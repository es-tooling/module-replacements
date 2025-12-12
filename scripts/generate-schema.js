import tsj from 'ts-json-schema-generator';
import {writeFile} from 'node:fs/promises';
import {fileURLToPath} from 'node:url';
import * as path from 'node:path';

const scriptDir = fileURLToPath(new URL('.', import.meta.url));
const schemaPath = path.resolve(scriptDir, '../manifest-schema.json');
const tsconfigPath = path.resolve(scriptDir, '../tsconfig.json');
const typesPath = path.resolve(scriptDir, '../src/types.ts');

const generator = tsj.createGenerator({
  path: typesPath,
  tsconfig: tsconfigPath,
  type: 'ManifestModule',
  topRef: false
});

const schema = generator.createSchema('ManifestModule');

await writeFile(schemaPath, JSON.stringify(schema, null, 2));
