import {fileURLToPath} from 'node:url';
import * as path from 'node:path';
import {readFile, readdir} from 'node:fs/promises';

const scriptDir = fileURLToPath(new URL('.', import.meta.url));

const moduleListDir = path.resolve(scriptDir, '..', 'docs', 'modules');
const moduleListReadmePath = path.resolve(moduleListDir, 'README.md');

const moduleListReadme = await readFile(moduleListReadmePath, {
  encoding: 'utf8'
});
const listOfDocumentedModules = moduleListReadme.split('## List of modules')[1];

const files = await readdir(moduleListDir);
for (const file of files) {
  if (!file.endsWith('.md') || file === 'README.md') {
    continue;
  }

  if (!listOfDocumentedModules.includes(file)) {
    throw new Error(
      `Module ${file} is not listed in the README.md but was found in modules documentation.
      Please add
        - [\`${file.slice(0, -3)}\`](./${file})
      to ./docs/modules/README.md`
    );
  }
}
