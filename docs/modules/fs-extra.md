# fs-extra

`fs-extra` adds some file system methods that previously were not included in the native `fs` module and added `Promise` support to the `fs` methods.
Many of the fs-extra modules have since been implemented natively by Node.

[fs-extra](https://github.com/jprichardson/node-fs-extra)

## Alternatives

### `node:fs`

[Node.js File System Module](https://nodejs.org/docs/latest/api/fs.html)

To use the promise-based APIs:

```js
import * as fs from 'node:fs/promises';
```

To use the callback and sync APIs:

```js
import * as fs from 'node:fs/promises';
```

### Equivalent Methods

- `ensureFile` -> `fs.exists` - deprecated since v1
- `ensureFileSync` -> `fs.existsSync`
- `copySync` -> `fs.copyFileSync`
- `mkdirp` -> fs.mkdir`
- `mkdirpSync` -> `fs.mkdirSync`
- `removeSync` -> `fs.rmSync`
- `remove` -> `fs.rm`
- `move` -> `fs.rename`
- `moveSync` -> `fs.renameSync`
- `ensureDirSync` -> `fs.existsSync`
- `pathExistsSync` -> `fs.existsSync`
- `outputFileSync` -> `fs.writeFileSync`

### Methods that need migrating

- `copy`
- `emptyDir`
- `emptyDirSync`
- `ensureDir`
- `ensureLink`
- `ensureLinkSync`
- `ensureSymlink`
- `ensureSymlinkSync`
- `mkdirs`
- `mkdirsSync`
- `outputFile`
- `outputJson`
- `outputJsonSync`
- `pathExists`
- `readJson`
- `readJsonSync`
- `writeJson`
- `writeJsonSync`
