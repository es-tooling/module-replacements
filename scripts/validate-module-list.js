import {fileURLToPath} from 'node:url';
import * as path from 'node:path';
import {readFile, readdir} from 'node:fs/promises';

const scriptDir = fileURLToPath(new URL('.', import.meta.url));
const moduleListDir = path.resolve(scriptDir, '..', 'docs', 'modules');
const moduleListReadmePath = path.resolve(moduleListDir, 'README.md');
const manifestsDir = path.resolve(scriptDir, '../manifests');

export async function validateModuleList() {
  console.log('Validating README contains all documented modules...');
  const moduleListReadme = await readFile(moduleListReadmePath, {
    encoding: 'utf8'
  });
  const listOfDocumentedModules =
    moduleListReadme.split('## List of modules')[1];
  const allDocPaths = [];

  const manifests = await readdir(manifestsDir);

  for (const manifestName of manifests) {
    const manifestPath = path.join(manifestsDir, manifestName);
    const manifestObj = JSON.parse(
      await readFile(manifestPath, {encoding: 'utf8'})
    );

    for (const mapping of Object.values(manifestObj.mappings)) {
      if (mapping.url && mapping.url.type === 'e18e') {
        allDocPaths.push(mapping.url.id);
      }
    }
  }

  const files = await readdir(moduleListDir);
  for (const file of files) {
    if (!file.endsWith('.md') || file === 'README.md') {
      continue;
    }

    const docName = file.slice(0, -3);

    if (!listOfDocumentedModules.includes(file)) {
      throw new Error(
        `Module ${file} is not listed in the README.md but was found in modules documentation.
        Please add
          - [\`${docName}\`](./${file})
        to ./docs/modules/README.md`
      );
    }

    if (!allDocPaths.includes(docName)) {
      throw new Error(
        `Module ${docName} has documentation but does not exist in any manifest`
      );
    }
  }
  console.log('OK');
}
