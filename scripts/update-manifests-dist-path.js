import {readFile, writeFile} from 'node:fs/promises';
import {fileURLToPath} from 'node:url';
import * as path from 'node:path';

const scriptDir = fileURLToPath(new URL('.', import.meta.url));
const distPath = path.resolve(scriptDir, '../dist');
const flavours = ['esm', 'commonjs']

for (const flavour of flavours) {
  const flavourPath = `${distPath}/${flavour}/manifests-dir.js`;
  const contents = await readFile(flavourPath, 'utf8');
  await writeFile(flavourPath, contents.replaceAll(
    '../manifests',
    '../../manifests'
  ));
}
