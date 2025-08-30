# rimraf

`rimraf` pulls in many transitive dependencies, and can often be replaced with
built-in Node APIs.

# Alternatives

## Node.js (since v12.x / v14.x)

Node.js v14.14 and up supports [the `fs.rm`
function](https://nodejs.org/api/fs.html#fspromisesrmpath-options), which allows
files and directories to be deleted recursively:

```js
import { rm } from 'node:fs/promises';
import { rmSync } from 'node:fs';

// This will throw an error if the path does not exist.
await rm(path, { recursive: true });
rmSync(path, { recursive: true });

// This will do nothing if the path does not exist.
await rm(path, { recursive: true, force: true });
rmSync(path, { recursive: true, force: true });
```

If you need to support Node 12, you can [use
`fs.rmdir`](https://nodejs.org/api/fs.html#fspromisesrmdirpath-options), which
also has the `recursive` option available since Node v12.10, although it will
print a deprecation message in Node v14 and up:

```js
const { rmdir } = require('fs').promises;
const { rmdirSync } = require('fs');

async function main() {
    await rmdir(path, { recursive: true });
}

rmdirSync(path, { recursive: true });

```

For command-line usage, such as npm scripts, you can run Node in eval mode:
```bash
node -e "require('fs').rmSync('./foo', { recursive: true, force: true, maxRetries: process.platform === 'win32' ? 10 : 0 })"
```

## premove (Node 8.x and up)

For command-line usage across runtimes (to support developers who use
alternative runtimes and may not have the `node` command available), the
[`premove`](https://www.npmjs.com/package/premove) package includes a CLI.

`premove` also supports older versions of Node (v8.x and up) than `fs.rm` does.
