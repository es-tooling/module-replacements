import {readdir, readFile, writeFile} from 'node:fs/promises';
import {fileURLToPath} from 'node:url';
import * as path from 'node:path';

const scriptDir = fileURLToPath(new URL('.', import.meta.url));
const manifestsDir = path.resolve(scriptDir, '../manifests');
const manifests = await readdir(manifestsDir);

function sortObjectKeys(obj) {
  const sorted = {};
  for (const key of Object.keys(obj).sort()) {
    sorted[key] = obj[key];
  }
  return sorted;
}

for (const manifestName of manifests) {
  if (!manifestName.endsWith('.json')) {
    continue;
  }

  const manifestPath = path.join(manifestsDir, manifestName);
  const manifest = JSON.parse(await readFile(manifestPath, {encoding: 'utf8'}));

  manifest.mappings = sortObjectKeys(manifest.mappings);
  manifest.replacements = sortObjectKeys(manifest.replacements);

  await writeFile(manifestPath, JSON.stringify(manifest, null, 2) + '\n', 'utf8');
}
