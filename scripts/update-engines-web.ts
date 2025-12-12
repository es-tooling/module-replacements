import {readdir, readFile, writeFile} from 'node:fs/promises';
import {fileURLToPath} from 'node:url';
import * as path from 'node:path';
import {features} from 'web-features';
import type {
  ManifestModule,
  ModuleReplacementDescriptor,
  NativeModuleReplacement,
  EngineConstraint
} from '../src/types.js';

const scriptDir = fileURLToPath(new URL('.', import.meta.url));
const manifestsDir = path.resolve(scriptDir, '../manifests');

type Support = Extract<(typeof features)[string], {kind: 'feature'}>['status']['support'];

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
  replacement: ModuleReplacementDescriptor
): ModuleReplacementDescriptor {
  if (replacement.type !== 'native' || !replacement.webFeatureId) {
    return replacement;
  }

  const {webFeatureId} = replacement;
  const feature = features[webFeatureId];

  if (!feature) {
    console.warn(`Warning: Web feature '${webFeatureId}' not found`);
    return replacement;
  }

  if (feature.kind !== 'feature') {
    console.warn(
      `Warning: Web feature '${webFeatureId}' is not of kind 'feature'`
    );
    return replacement;
  }

  const support = feature.status.support;
  const engines = extractEngines(support);

  if (engines.length === 0) {
    console.warn(
      `Warning: No compatible engines found for web feature '${webFeatureId}'`
    );
    return replacement;
  }

  if (engines.every((e) => replacement.engines?.some((re) => re.engine === e.engine && re.minVersion === e.minVersion))) {
    return replacement;
  }

  console.log(
    `  Updated engines for webFeatureId '${webFeatureId}': ${engines.map((e) => `${e.engine}@${e.minVersion}`).join(', ')}`
  );

  return {
    ...replacement,
    engines
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

    const updatedManifest = {
      ...manifest,
      replacements: manifest.replacements.map((module) => ({
        ...module,
        replacements: module.replacements.map(updateReplacementEngines)
      }))
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
