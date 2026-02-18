import {readdir, readFile, access} from 'node:fs/promises';
import {fileURLToPath} from 'node:url';
import * as path from 'node:path';

const scriptDir = fileURLToPath(new URL('.', import.meta.url));
const manifestsDir = path.resolve(scriptDir, '../manifests');
const docsDir = path.resolve(scriptDir, '../docs/modules');
const seenModules = new Set();

async function checkManifestForDuplicates(name, manifest) {
  for (const moduleName of Object.keys(manifest.mappings)) {
    if (seenModules.has(moduleName)) {
      throw new Error(`Module ${moduleName} was found in multiple manifests`);
    }
    seenModules.add(moduleName);
  }
}

function checkManifestIsSorted(name, manifest) {
  const keys = Object.keys(manifest.mappings);
  const sorted = [...keys].sort();

  for (let i = 0; i < sorted.length; i++) {
    if (keys[i] !== sorted[i]) {
      throw new Error(
        `Manifest ${name} mappings should be sorted by module name (a-z)`
      );
    }
  }

  const replacementKeys = Object.keys(manifest.replacements);
  const sortedReplacementKeys = [...replacementKeys].sort();

  for (let i = 0; i < sortedReplacementKeys.length; i++) {
    if (replacementKeys[i] !== sortedReplacementKeys[i]) {
      throw new Error(
        `Manifest ${name} replacements should be sorted by id (a-z)`
      );
    }
  }
}

export async function checkManifestsForProblems() {
  console.log('Checking for problems in manifests...');
  const manifests = await readdir(manifestsDir);
  seenModules.clear();

  for (const manifestName of manifests) {
    if (!manifestName.endsWith('.json')) {
      continue;
    }

    const manifestPath = path.join(manifestsDir, manifestName);
    const manifest = JSON.parse(
      await readFile(manifestPath, {encoding: 'utf8'})
    );

    await checkManifestForDuplicates(manifestName, manifest);
    checkManifestIsSorted(manifestName, manifest);
    await checkDocPathsExist(manifestName, manifest);
  }
  console.log('OK');
}

async function checkDocPathsExist(name, manifest) {
  for (const mod of manifest.moduleReplacements) {
    if (!mod.docPath) {
      continue;
    }

    const docFile = path.join(docsDir, `${mod.docPath}.md`);
    try {
      await access(docFile);
    } catch {
      throw new Error(
        `Module ${mod.moduleName} in ${name} has docPath "${mod.docPath}" but ${mod.docPath}.md does not exist in docs/modules/`
      );
    }
  }
}
