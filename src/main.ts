import native from '../manifests/native.json';
import microUtils from '../manifests/micro-utilities.json';
import preferred from '../manifests/preferred.json';
import {ManifestModule} from './types.js';

const nativeReplacements = native as ManifestModule;
const microUtilsReplacements = microUtils as ManifestModule;
const preferredReplacements = preferred as ManifestModule;

export {
  nativeReplacements,
  microUtilsReplacements,
  preferredReplacements
};

export const all: ManifestModule = {
  moduleReplacements: [
    ...nativeReplacements.moduleReplacements,
    ...microUtilsReplacements.moduleReplacements,
    ...preferredReplacements.moduleReplacements
  ]
};
