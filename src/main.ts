import native from '../manifests/native.json';
import optimisation from '../manifests/optimisation.json';

export interface ManifestModule {
  id: string;
  replacements: string[];
}

export interface ManifestReplacement {
  id: string;
  native?: boolean;
  example: string;
  url: string;
}

export interface Manifest {
  modules: ManifestModule[];
  replacements: ManifestReplacement[];
}

const nativeReplacements = native as Manifest;
const optimisationReplacements = optimisation as Manifest;

export {nativeReplacements, optimisationReplacements};

export const all: Manifest = {
  modules: [...native.modules, ...optimisation.modules],
  replacements: [...native.replacements, ...optimisation.replacements]
};
