import {readdir, readFile, writeFile} from 'node:fs/promises';
import {fileURLToPath} from 'node:url';
import * as path from 'node:path';
import type {
  ManifestModule,
  ModuleReplacement,
  EngineConstraint
} from '../src/types.js';

const scriptDir = fileURLToPath(new URL('.', import.meta.url));
const manifestsDir = path.resolve(scriptDir, '../manifests');

const RUNTIME_URLS = {
  cloudflare: 'https://platform-node-compat.pi0.workers.dev/?json',
  deno: 'https://platform-node-compat.deno.dev/?json',
  vercel: 'https://platform-node-compat.vercel.app/?json',
  netlify: 'https://platform-node-compat.netlify.app/?json'
} as const;

type RuntimeName = keyof typeof RUNTIME_URLS;

interface RuntimeData {
  _url: string;
  version: string;
  builtinModules: {
    [moduleName: string]:
      | false
      | {
          exports: string[];
          missingExports: string[];
        };
  };
}

/**
 * Fetch runtime compatibility data from all runtime URLs
 */
async function fetchRuntimeData(): Promise<Map<RuntimeName, RuntimeData>> {
  const runtimeData = new Map<RuntimeName, RuntimeData>();

  for (const [name, url] of Object.entries(RUNTIME_URLS)) {
    try {
      console.log(`Fetching ${name} data from ${url}...`);
      const response = await fetch(url);
      if (!response.ok) {
        console.warn(`Warning: Failed to fetch ${name} data: ${response.statusText}`);
        continue;
      }
      const data = (await response.json()) as RuntimeData;
      runtimeData.set(name as RuntimeName, data);
      console.log(`  ✓ Fetched ${name} (version ${data.version})`);
    } catch (error) {
      console.warn(`Warning: Error fetching ${name} data:`, error);
    }
  }

  return runtimeData;
}

/**
 * Check if a runtime supports a specific node feature
 */
function isFeatureSupported(
  runtimeData: RuntimeData,
  moduleName: string,
  exportName?: string
): boolean {
  const moduleSupport = runtimeData.builtinModules[moduleName];

  if (moduleSupport === false || moduleSupport === undefined) {
    return false;
  }

  if (!exportName) {
    return true;
  }

  const {exports, missingExports} = moduleSupport;

  if (missingExports.includes(exportName)) {
    return false;
  }

  if (exports.includes(exportName)) {
    return true;
  }

  return false;
}

/**
 * Extract runtime constraints from runtime compatibility data
 */
function extractRuntimeEngines(
  allRuntimeData: Map<RuntimeName, RuntimeData>,
  moduleName: string,
  exportName?: string
): EngineConstraint[] {
  const engines: EngineConstraint[] = [];

  for (const [runtimeName, runtimeData] of allRuntimeData) {
    if (isFeatureSupported(runtimeData, moduleName, exportName)) {
      engines.push({
        engine: runtimeName,
        minVersion: runtimeData.version
      });
    }
  }

  return engines;
}

/**
 * Update engines for a single replacement based on its nodeFeatureId
 */
function updateReplacementEngines(
  replacement: ModuleReplacement,
  allRuntimeData: Map<RuntimeName, RuntimeData>
): ModuleReplacement {
  if (replacement.type !== 'native' || !replacement.nodeFeatureId) {
    return replacement;
  }

  const {moduleName, exportName} = replacement.nodeFeatureId;
  const runtimeEngines = extractRuntimeEngines(allRuntimeData, moduleName, exportName);

  if (runtimeEngines.length === 0) {
    console.warn(
      `Warning: No runtime support found for ${moduleName}${exportName ? `.${exportName}` : ''}`
    );
    return replacement;
  }

  // Check if engines have changed
  const existingRuntimeEngines = replacement.engines?.filter((e) =>
    Object.keys(RUNTIME_URLS).includes(e.engine)
  ) ?? [];

  const enginesChanged =
    existingRuntimeEngines.length !== runtimeEngines.length ||
    !runtimeEngines.every((newEngine) =>
      existingRuntimeEngines.some(
        (existing) =>
          existing.engine === newEngine.engine &&
          existing.minVersion === newEngine.minVersion
      )
    );

  if (!enginesChanged) {
    return replacement;
  }

  const nonRuntimeEngines = replacement.engines?.filter(
    (e) => !Object.keys(RUNTIME_URLS).includes(e.engine)
  ) ?? [];

  const updatedEngines = [...nonRuntimeEngines, ...runtimeEngines];

  console.log(
    `  Updated engines for ${moduleName}${exportName ? `.${exportName}` : ''}: ${runtimeEngines.map((e) => `${e.engine}@${e.minVersion}`).join(', ')}`
  );

  return {
    ...replacement,
    engines: updatedEngines
  };
}

/**
 * Main function to update all manifests
 */
async function main() {
  console.log('Updating engines from runtime compatibility data...\n');

  const allRuntimeData = await fetchRuntimeData();

  if (allRuntimeData.size === 0) {
    console.error('Error: Failed to fetch any runtime data');
    process.exit(1);
  }

  console.log('');

  const manifestFiles = await readdir(manifestsDir);

  for (const manifestName of manifestFiles) {
    if (!manifestName.endsWith('.json')) {
      continue;
    }

    console.log(`Processing ${manifestName}...`);

    const manifestPath = path.join(manifestsDir, manifestName);
    const manifestContent = await readFile(manifestPath, {encoding: 'utf8'});
    const manifest: ManifestModule = JSON.parse(manifestContent);

    const updatedManifest: ManifestModule = {
      ...manifest,
      replacements: Object.fromEntries(
        Object.entries(manifest.replacements).map(([id, replacement]) => [
          id,
          updateReplacementEngines(replacement, allRuntimeData)
        ])
      )
    };

    await writeFile(
      manifestPath,
      JSON.stringify(updatedManifest, null, 2) + '\n',
      {encoding: 'utf8'}
    );

    console.log(`  ✓ Updated ${manifestName}\n`);
  }

  console.log('Done!');
}

main().catch((error) => {
  console.error('Error:', error);
  process.exit(1);
});
