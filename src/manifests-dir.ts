import {fileURLToPath} from 'node:url';
import * as path from 'node:path';

// @ts-ignore filthy cjs/esm polyfill hacks so we can have import.meta
const currentDir = fileURLToPath(new URL('.', import.meta.url));
export const manifestsDir = path.resolve(currentDir, '../manifests');
