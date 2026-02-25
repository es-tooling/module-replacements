import {mkdir, readFile, readdir, rm, writeFile} from 'node:fs/promises';
import {fileURLToPath} from 'node:url';
import {existsSync} from 'node:fs';
import * as path from 'node:path';

const scriptDir = fileURLToPath(new URL('.', import.meta.url));
const tsManifestsPath = path.resolve(scriptDir, '../src/manifests');
const jsonManifestsPath = path.resolve(scriptDir, '../manifests');

if (existsSync(tsManifestsPath)) {
  await rm(tsManifestsPath, {recursive: true});
}

await mkdir(tsManifestsPath, {recursive: true});

const manifests = await readdir(jsonManifestsPath, {withFileTypes: true});

for (const manifest of manifests) {
  if (manifest.isFile() && path.extname(manifest.name) === '.json') {
    const content = await readFile(
      path.join(jsonManifestsPath, manifest.name),
      'utf8'
    );

    await writeFile(
      path.join(tsManifestsPath, manifest.name.replace(/\.json$/, '.ts')),
      `import {ManifestModule} from '../types.js';\n\nconst manifest: ManifestModule = ${content.trim()};\nexport default manifest;\n`
    );
  }
}
