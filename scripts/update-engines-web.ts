import {readdir, readFile, writeFile} from 'node:fs/promises';
import {format} from 'prettier';
import {fileURLToPath} from 'node:url';
import * as path from 'node:path';
import {features} from 'web-features';
import type {
  ManifestModule,
  ModuleReplacement,
  EngineConstraint
} from '../src/types.js';

const scriptDir = fileURLToPath(new URL('.', import.meta.url));
const manifestsDir = path.resolve(scriptDir, '../manifests');

type Support = Extract<
  (typeof features)[string],
  {kind: 'feature'}
>['status']['support'];

/**
 * Extract engine constraints from web-features support data
 */
function extractEngines(support: Support): EngineConstraint[] {
  const engines: EngineConstraint[] = [];

  for (const [engineName, version] of Object.entries(support)) {
    if (version === false || !version) {
      continue;
    }

    if (typeof version === 'string' && version.includes('≤')) {
      continue;
    }

    engines.push({
      engine: engineName,
      minVersion: String(version)
    });
  }

  return engines;
}

/**
 * Update engines for a single replacement based on its webFeatureId
 */
function updateReplacementEngines(
  replacement: ModuleReplacement
): ModuleReplacement {
  if (replacement.type !== 'native' || !replacement.webFeatureId) {
    return replacement;
  }

  const {featureId, compatKey} = replacement.webFeatureId;
  const feature = features[featureId];

  if (!feature) {
    console.warn(`Warning: Web feature '${featureId}' not found`);
    return replacement;
  }

  if (feature.kind !== 'feature') {
    console.warn(
      `Warning: Web feature '${featureId}' is not of kind 'feature'`
    );
    return replacement;
  }

  const compatSupport = feature.status.by_compat_key?.[compatKey];
  if (!compatSupport) {
    console.warn(
      `Warning: Compat key '${compatKey}' not found for web feature '${featureId}'`
    );
    return replacement;
  }

  const engines = extractEngines(compatSupport.support);

  if (engines.length === 0) {
    console.warn(
      `Warning: No compatible engines found for web feature '${featureId} and compat key '${compatKey}'`
    );
    return replacement;
  }

  const existingEngineNames = new Set(
    replacement.engines?.map((e) => e.engine) ?? []
  );
  const newEngines = engines.filter((e) => !existingEngineNames.has(e.engine));

  if (newEngines.length === 0) {
    return replacement;
  }

  return {
    ...replacement,
    engines: [...(replacement.engines ?? []), ...newEngines]
  };
}

/**
 * Main function to update all manifests
 */
async function main() {
  console.log('Updating engines from web-features data...\n');

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
          updateReplacementEngines(replacement)
        ])
      )
    };

    await writeFile(
      manifestPath,
      await format(JSON.stringify(updatedManifest), {filepath: manifestPath}),
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
