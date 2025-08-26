# tempy

`tempy` can often be replaced with built-in Node APIs.

# Alternatives

## Node.js (since v14.x)

Node.js has the `fs.mkdtemp` function for creating a unique temporary directory.
The [promise-based
API](https://nodejs.org/api/fs.html#fspromisesmkdtempprefix-options), shown
below, is available in Node v10.x and up, and can be used in conjunction with
`os.tmpdir`:

```js
import {mkdtemp, realpath} from 'node:fs/promises';
import {join} from 'node:path';
import {tmpdir} from 'node:os';

// MacOS and possibly some other platforms return a symlink from `os.tmpdir`.
// For some applications, this can cause problems; thus, we use `realpath`.
const tempDir = await mkdtemp(join(await realpath(tmpdir()), 'foo-'));
```

Directory cleanup can be done by passing `{recursive: true}` to `fs.rm`,
available in v14.14.0 and up:

```js
import {rm, writeFile} from 'node:fs/promises';

try {
    await writeFile(join(tempDir, 'bar.txt'), 'Hello, world!', {encoding: 'utf-8'});
    await writeFile(join(tempDir, 'baz.txt'), '...', {encoding: 'utf-8'});
} finally {
    await rm(tempDir, {recursive: true});
}
```

# See also
- [Secure tempfiles in Node.js without
  dependencies](https://advancedweb.hu/secure-tempfiles-in-nodejs-without-dependencies/)
  (Advanced Web Machinery)
