# mkdirp / make-dir

[`mkdirp`](https://www.npmjs.com/package/mkdirp) and [`make-dir`](https://www.npmjs.com/package/make-dir) can often be replaced with built-in Node APIs.

# Alternatives

## Node.js (since v10.x)

Node.js v10.0 and up supports the `recursive` option in [the `fs.mkdir`
function](https://nodejs.org/api/fs.html#fspromisesmkdirpath-options), which
allows parent directories to be created automatically:

```js
import {mkdir} from 'node:fs/promises';
import {mkdirSync} from 'node:fs';

await mkdir('some/nested/path', {recursive: true});
mkdirSync('some/nested/path', {recursive: true});
```
