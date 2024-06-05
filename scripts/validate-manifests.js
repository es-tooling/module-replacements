import ajv from 'ajv';
import {readdir, readFile} from 'node:fs/promises';
import {fileURLToPath} from 'node:url';
import * as path from 'node:path';

const validator = new ajv();
const scriptDir = fileURLToPath(new URL('.', import.meta.url));
const manifestsDir = path.resolve(scriptDir, '../manifests');
const schemaPath = path.resolve(scriptDir, '../manifest-schema.json');
const manifests = await readdir(manifestsDir);
const schema = JSON.parse(await readFile(schemaPath, {encoding: 'utf8'}));
const validate = validator.compile(schema);

for (const manifestName of manifests) {
  if (!manifestName.endsWith('.json')) {
    continue;
  }

  const manifestPath = path.join(manifestsDir, manifestName);
  const manifest = JSON.parse(await readFile(manifestPath, {encoding: 'utf8'}));
  const isValid = validate(manifest);
  if (!isValid) {
    console.log(validate.errors);
    throw new Error(`Validation for ${manifestPath} failed!`);
  }
}
