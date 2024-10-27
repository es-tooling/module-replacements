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
import * as fs from 'node:fs';
```

#### Equivalent Methods

| fs-extra                                                                                                      | node:fs                                                   | Notes                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `copySync(src, dest[, options])`                                                                              | `fs.copyFileSync(src, dest[, mode])`                      |                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| `mkdirs(dir[,options][,callback])`, `mkdirp(dir[,options][,callback])`, `ensureDir(dir[,options][,callback])` | `fs.mkdir(dir, { recursive: true }, callback)`            | `ensureDir` and `mkdirp` are aliases of `mkdirs`                                                                                                                                                                                                                                                                                                                                                                                                                             |
| `mkdirpSync(dir[,options])`, `mkdirsSync(dir[,options])`, `ensureDirSync(dir[,options])`                      | `fs.mkdirSync(dir, { recursive: true })`                  | `ensureDirSync` and `mkdirpSync` are aliases of `mkdirsSync`                                                                                                                                                                                                                                                                                                                                                                                                                 |
| `remove(path[,callback])`                                                                                     | `fs.rm(path, { recursive: true, force: true }, callback)` |                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| `removeSync(dir)`                                                                                             | `fs.rmSync(dir, { recursive: true, force: true })`        |                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| `move(src, dest, { overwrite: true }, callback)`                                                              | `fs.rename(source, destination)`                          |                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| `moveSync(source, destination, { overwrite: true })`                                                          | `fs.renameSync(source, destination)`                      | These are not strictly equivalent. The `move` methods in fs-extra act like the `mv` command and they will work across devices also. The `rename` methods in fs work like the `rename` system call and will **not** work across devices. Having Node’s `rename` methods work across devices is currently [marked as a "won't fix."](https://github.com/nodejs/node/issues/19077) Also, the `overwrite: true` behaviour is the default/only behaviour in the standard library. |
| `copy(source, destination, callback)`                                                                         | `fs.cp(source, destination, callback)`                    |                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| `pathExistsSync(file)`                                                                                        | `fs.existsSync(path)`                                     |                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |

#### Methods that need migrating or more than one `node:fs` method

##### `emptyDir(dir[, callback])`

##### `emptyDirSync(dir)`

##### `ensureFile(file[, callback])`

##### `ensureFileSync(file)`

##### `ensureLink(srcPath, destPath[, callback])`

##### `ensureLinkSync(srcPath, destPath)`

##### `ensureSymlink(srcPath, destPath[, type][, callback])`

##### `ensureSymlinkSync(srcPath, destPath[, type])`

##### `outputFile(file, data[, options][, callback])`

##### `outputFileSync(file, data[, options])`

##### `outputJson(file, object[, options][, callback])`

##### `outputJsonSync(file, object[, options])`

##### `pathExists(file[, callback])`

##### `readJson(file[, options][, callback])`

##### `readJsonSync(file[, options])`

##### `writeJson(file, object[, options][, callback])`

##### `writeJsonSync(file, object[, options])`
