import {readdir, readFile, writeFile} from 'node:fs/promises';
import {format} from 'prettier';
import {fileURLToPath} from 'node:url';
import * as path from 'node:path';
import bcd from '@mdn/browser-compat-data' with {type: 'json'};
import type {
  Identifier,
  CompatStatement,
  SimpleSupportStatement
} from '@mdn/browser-compat-data';
import type {
  ManifestModule,
  ModuleReplacement,
  EngineConstraint
} from '../src/types.js';

const scriptDir = fileURLToPath(new URL('.', import.meta.url));
const manifestsDir = path.resolve(scriptDir, '../manifests');

/**
 * Resolve the minimum version from a BCD support statement.
 * Returns null if the feature is not supported or version is unknown.
 */
function resolveMinVersion(statement: SimpleSupportStatement): string | null {
  const {version_added, version_removed} = statement;

  if (version_removed) return null;
  if (!version_added) return null;
  if (typeof version_added === 'string' && version_added.includes('≤'))
    return null;

  return version_added;
}

/**
 * Traverse the BCD data using a dot-delimited feature ID and return the
 * `__compat.support` record, or null if the path is invalid.
 */
function resolveBcdSupport(
  featureId: string
): CompatStatement['support'] | null {
  const [topLevel, ...rest] = featureId.split('.');

  if (!(topLevel in bcd)) return null;

  let node: Identifier = bcd[topLevel as keyof typeof bcd] as Identifier;

  for (const part of rest) {
    const next = node[part];
    if (!next) return null;
    node = next;
  }

  return node.__compat?.support ?? null;
}

/**
 * Extract engine constraints from a BCD support block.
 */
function extractEngines(
  support: CompatStatement['support']
): EngineConstraint[] {
  const engines: EngineConstraint[] = [];

  for (const [engineName, statement] of Object.entries(support)) {
    if (!statement) continue;

    const entries = Array.isArray(statement) ? statement : [statement];
    const minVersion = entries.reduce<string | null>((acc, entry) => {
      if (acc !== null) return acc;
      return resolveMinVersion(entry);
    }, null);

    if (minVersion === null) continue;

    engines.push({engine: engineName, minVersion});
  }

  return engines;
}

/**
 * Update engines for a single replacement based on its bcdFeatureId.
 */
function updateReplacementEngines(
  replacement: ModuleReplacement
): ModuleReplacement {
  if (replacement.type !== 'native' || !replacement.webFeatureId) {
    return replacement;
  }

  const featureId = replacement.webFeatureId.compatKey;
  const support = resolveBcdSupport(featureId);

  if (!support) {
    console.warn(`Warning: BCD feature '${featureId}' not found`);
    return replacement;
  }

  const allEngines = extractEngines(support);

  if (allEngines.length === 0) {
    console.warn(
      `Warning: No compatible engines found for BCD feature '${featureId}'`
    );
    return replacement;
  }

  const existingEngineNames = new Set(
    replacement.engines?.map((e) => e.engine) ?? []
  );
  const newEngines = allEngines.filter(
    (e) => !existingEngineNames.has(e.engine)
  );

  if (newEngines.length === 0) {
    return replacement;
  }

  return {
    ...replacement,
    engines: [...(replacement.engines ?? []), ...newEngines]
  };
}

/**
 * Main function to update all manifests.
 */
async function main() {
  console.log('Updating engines from BCD data...\n');

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
