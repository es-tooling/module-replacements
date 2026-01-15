import {readFileSync} from 'node:fs';
import {ManifestModule} from './types.js';
import {manifestsDir} from './manifests-dir.js';

const nativeReplacements = JSON.parse(
  readFileSync(`${manifestsDir}/native.json`, 'utf8')
) as ManifestModule;
const microUtilsReplacements = JSON.parse(
  readFileSync(`${manifestsDir}/micro-utilities.json`, 'utf8')
) as ManifestModule;
const preferredReplacements = JSON.parse(
  readFileSync(`${manifestsDir}/preferred.json`, 'utf8')
) as ManifestModule;

export * from './types.js';

export {nativeReplacements, microUtilsReplacements, preferredReplacements};

export const all: ManifestModule = {
  replacements: [
    ...nativeReplacements.replacements,
    ...microUtilsReplacements.replacements,
    ...preferredReplacements.replacements
  ]
};
