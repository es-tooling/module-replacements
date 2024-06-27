# rimraf

`rimraf` pulls in many transitive dependencies, and can often be replaced with
built-in Node APIs.

# Alternatives

## NodeJS (since v12.x / v14.x)

Node.js v14.14 and up supports [the `fs.rm`
function](https://nodejs.org/api/fs.html#fspromisesrmpath-options), which allows
files and directories to be deleted recursively:

```js
import {rm} from 'node:fs/promises';
import {rmSync} from 'node:fs';

// This will throw an error if the path does not exist.
await rm(path, {recursive: true});
rmSync(path, {recursive: true});

// This will do nothing if the path does not exist.
await rm(path, {recursive: true, force: true});
rmSync(path, {recursive: true, force: true});
```

If you need to support Node 12, you can [use
`fs.rmdir`](https://nodejs.org/api/fs.html#fspromisesrmdirpath-options), which
also has the `recursive` option available since Node v12.10, although it will
print a deprecation message in Node v14 and up:

```js
const {rmdir} = require('fs').promises;
const {rmdirSync} = require('fs');

async function main() {
    await rmdir(path, {recursive: true});
}

rmdirSync(path, {recursive: true});

```

For command-line usage, such as npm scripts, you can run Node in eval mode:
```bash
node -e "fs.rmSync('./foo', { recursive: true, force: true })"
```
Note that this may not work for developers who use alternative JavaScript
runtimes and do not have Node installed. To support them, you can use the
[premove](https://www.npmjs.com/package/premove) package instead.
