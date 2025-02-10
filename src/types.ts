interface ModuleReplacementLike {
  type: string;
  moduleName: string;
  category?: string;
}

export interface DocumentedModuleReplacement extends ModuleReplacementLike {
  type: 'documented';
  docPath: string;
}

export interface NativeModuleReplacement extends ModuleReplacementLike {
  type: 'native';
  mdnPath: string;
  nodeVersion: string;
  replacement: string;
}

export interface PolyfillModuleReplacement extends ModuleReplacementLike {
  type: 'polyfill';
  mdnPath: string;
  nodeVersion: string;
  replacement: string;
}

export interface SimpleModuleReplacement extends ModuleReplacementLike {
  type: 'simple';
  replacement: string;
}

export interface NoModuleReplacement extends ModuleReplacementLike {
  type: 'none';
}

export type ModuleReplacement =
  | DocumentedModuleReplacement
  | NativeModuleReplacement
  | SimpleModuleReplacement
  | NoModuleReplacement;

export interface ManifestModule {
  moduleReplacements: ModuleReplacement[];
}
