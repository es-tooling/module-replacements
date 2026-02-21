import {ManifestModule} from './types.js';

import microUtilsReplacements from './manifests/micro-utilities.js';
import preferredReplacements from './manifests/preferred.js';
import nativeReplacements from './manifests/native.js';

export * from './types.js';

export {nativeReplacements, microUtilsReplacements, preferredReplacements};

export const all: ManifestModule = {
  replacements: {
    ...nativeReplacements.replacements,
    ...microUtilsReplacements.replacements,
    ...preferredReplacements.replacements
  },
  mappings: {
    ...nativeReplacements.mappings,
    ...microUtilsReplacements.mappings,
    ...preferredReplacements.mappings
  }
};
