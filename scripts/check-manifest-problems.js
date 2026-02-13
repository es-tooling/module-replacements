import {readdir, readFile, access} from 'node:fs/promises';
import {fileURLToPath} from 'node:url';
import * as path from 'node:path';

const scriptDir = fileURLToPath(new URL('.', import.meta.url));
const manifestsDir = path.resolve(scriptDir, '../manifests');
const docsDir = path.resolve(scriptDir, '../docs/modules');
const seenModules = new Set();

async function checkManifestForDuplicates(name, manifest) {
  const seenInThisManifest = new Set();

  for (const mod of manifest.moduleReplacements) {
    if (seenInThisManifest.has(mod.moduleName)) {
      throw new Error(
        `Module ${mod.moduleName} was found multiple times in ${name}`
      );
    }
    if (seenModules.has(mod.moduleName)) {
      throw new Error(
        `Module ${mod.moduleName} was found in multiple manifests`
      );
    }
    seenInThisManifest.add(mod.moduleName);
    seenModules.add(mod.moduleName);
  }
}

function checkManifestIsSorted(name, manifest) {
  const sorted = [...manifest.moduleReplacements].sort((a, b) => {
    if (a.moduleName === b.moduleName) {
      return 0;
    }
    return a.moduleName > b.moduleName ? 1 : -1;
  });

  for (let i = 0; i < sorted.length; i++) {
    const mod = sorted[i];
    const unsortedMod = manifest.moduleReplacements[i];

    if (mod !== unsortedMod) {
      throw new Error(`Manifest ${name} should be sorted by module name (a-z)`);
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
