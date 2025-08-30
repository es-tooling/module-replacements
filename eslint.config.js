import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import { defineConfig } from "eslint/config";


export default defineConfig([
  { files: ["**/*.{js,mjs,cjs,ts,mts,cts}"], plugins: { js }, extends: ["js/recommended"] },
  { files: ["**/*.{js,mjs,cjs,ts,mts,cts}"], languageOptions: { globals: globals.node } },
  tseslint.configs.recommended,
  {
    files: ['**/*.js'],
    rules: {
      'no-duplicate-manifest-entries': 'error',
    },
    plugins: {
      'no-duplicate-manifest-entries': {
        rules: {
          'no-duplicate-manifest-entries': noDuplicateManifestEntries,
        },
      },
    },
  },
]);

