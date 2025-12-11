export interface EngineConstraint {
  engine: string;
  minVersion?: string;
  maxVersion?: string;
}

interface ModuleReplacementLike {
  engines?: EngineConstraint[];
  preferred?: boolean;
}

export interface KnownUrlDescriptor {
  type: 'mdn' | 'node' | 'e18e';
  id: string;
}

export type KnownUrl = KnownUrlDescriptor | string;

export interface DocumentedModuleReplacement extends ModuleReplacementLike {
  type: 'documented';
  url: KnownUrl;
  replacementModule: string;
}

export interface NativeModuleReplacement extends ModuleReplacementLike {
  type: 'native';
  url: KnownUrl;
  description: string;
  webFeatureId?: string;
}

export interface SimpleModuleReplacement extends ModuleReplacementLike {
  type: 'simple';
  description: string;
  url?: KnownUrl;
}

export interface NoModuleReplacement extends ModuleReplacementLike {
  type: 'none';
  url?: KnownUrl;
}

export type ModuleReplacementDescriptor =
  | DocumentedModuleReplacement
  | NativeModuleReplacement
  | SimpleModuleReplacement
  | NoModuleReplacement;

export interface ModuleReplacement {
  type: 'module';
  moduleName: string;
  replacements: ModuleReplacementDescriptor[];
}

export interface ManifestModule {
  replacements: ModuleReplacement[];
}
