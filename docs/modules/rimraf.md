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

await rm(path, {recursive: true});
rmSync(path, {recursive: true});
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
