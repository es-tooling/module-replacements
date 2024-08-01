import {readdir, readFile, writeFile} from 'node:fs/promises';
import {fileURLToPath} from 'node:url';
import * as path from 'node:path';

const scriptDir = fileURLToPath(new URL('.', import.meta.url));
const manifestsDir = path.resolve(scriptDir, '../manifests');
const manifests = await readdir(manifestsDir);

for (const manifestName of manifests) {
  if (!manifestName.endsWith('.json')) {
    continue;
  }

  const manifestPath = path.join(manifestsDir, manifestName);
  const manifest = JSON.parse(await readFile(manifestPath, {encoding: 'utf8'}));
  manifest.moduleReplacements.sort((a, b) => {
    if (a.moduleName === b.moduleName) {
      return 0;
    }
    return a.moduleName > b.moduleName ? 1 : -1;
  });

  await writeFile(manifestPath, JSON.stringify(manifest, null, 2), 'utf8');
}
