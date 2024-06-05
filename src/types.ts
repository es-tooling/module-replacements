interface ModuleReplacementLike {
  type: string;
  moduleName: string;
  category?: string;
}

interface DocumentedModuleReplacement extends ModuleReplacementLike {
  type: 'documented';
  docPath: string;
}

interface NativeModuleReplacement extends ModuleReplacementLike {
  type: 'native';
  mdnPath: string;
  nodeVersion: string;
  replacement: string;
}

interface SimpleModuleReplacement extends ModuleReplacementLike {
  type: 'simple';
  replacement: string;
}

interface NoModuleReplacement extends ModuleReplacementLike {
  type: 'none';
}

type ModuleReplacement = DocumentedModuleReplacement |
  NativeModuleReplacement |
  SimpleModuleReplacement |
  NoModuleReplacement;

export interface ManifestModule {
  moduleReplacements: ModuleReplacement[];
}
