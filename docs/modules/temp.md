---
description: Modern alternatives to the temp package for creating temporary files and directories
---

# Replacements for `temp`

## `fs.mkdtemp` (native, since Node.js v14.x)

Node.js has the [`fs.mkdtemp`](https://nodejs.org/api/fs.html#fsmkdtempprefix-options-callback) function for creating a unique temporary directory. Directory cleanup can be done by passing `{recursive: true}` to [`fs.rm`](https://nodejs.org/api/fs.html#fsrmpath-options-callback), available in v14.14.0 and up.

Example:

```ts
import temp from 'temp' // [!code --]
import { mkdtemp } from 'node:fs/promises' // [!code ++]
import { join } from 'node:path' // [!code ++]
import { tmpdir } from 'node:os' // [!code ++]

const dirPath = temp.mkdirSync('foo') // [!code --]
const dirPath = await mkdtemp(join(tmpdir(), 'foo-')) // [!code ++]
```

## `fs.mkdtempDisposable` (native, since Node.js v20.4.0)

Node.js now provides [`fs.mkdtempDisposable`](https://nodejs.org/api/fs.html#fspromisesmkdtempdisposableprefix-options) which leverages the `using` keyword for automatic cleanup. This eliminates the need for `temp.track()` or manual cleanup logic.

Example:

```ts
import temp from 'temp' // [!code --]
import { mkdtempDisposable } from 'node:fs/promises' // [!code ++]
import { join } from 'node:path' // [!code ++]
import { tmpdir } from 'node:os' // [!code ++]

temp.track() // [!code --]
const dirPath = temp.mkdirSync('foo') // [!code --]
await using tempDir = await mkdtempDisposable(join(tmpdir(), 'foo-')) // [!code ++]
const dirPath = tempDir.path // [!code ++]
```

## Deno

Deno provides built-in [`Deno.makeTempDir`](https://docs.deno.com/api/deno/~/Deno.makeTempDir) and [`Deno.makeTempFile`](https://docs.deno.com/api/deno/~/Deno.makeTempFile) for creating unique temporary directories and files in the system temp directory (or a custom `dir`).

```ts
import temp from 'temp' // [!code --]

const tempDir = temp.mkdirSync('foo') // [!code --]
const tempDir = await Deno.makeTempDir({ prefix: 'foo-' }) // [!code ++]
```

```ts
import temp from 'temp' // [!code --]

const tempFile = temp.openSync('foo').path // [!code --]
const tempFile = await Deno.makeTempFile({ prefix: 'foo-' }) // [!code ++]
```

> [!NOTE]
> See also: secure tempfiles in Node.js without dependencies (Advanced Web Machinery): https://advancedweb.hu/secure-tempfiles-in-nodejs-without-dependencies/
