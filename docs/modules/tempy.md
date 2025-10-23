---
description: Modern alternatives to the tempy package for creating temporary files and directories
---
# Replacements for `tempy`

## Node.js (since v14.x)

Node.js has the [`fs.mkdtemp`](https://nodejs.org/api/fs.html#fsmkdtempprefix-options-callback) function for creating a unique temporary directory. Directory cleanup can be done by passing `{recursive: true}` to [`fs.rm`](https://nodejs.org/api/fs.html#fsrmpath-options-callback), available in v14.14.0 and up.

Example:

```diff
- import { temporaryDirectory } from 'tempy'
+ import { mkdtemp, realpath } from 'node:fs/promises'
+ import { join } from 'node:path'
+ import { tmpdir } from 'node:os'

- const tempDir = temporaryDirectory()
+ const tempDir = await mkdtemp(join(await realpath(tmpdir()), 'foo-'))
```

## Deno

Deno provides built-in [`Deno.makeTempDir`](https://docs.deno.com/api/deno/~/Deno.makeTempDir) and [`Deno.makeTempFile`](https://docs.deno.com/api/deno/~/Deno.makeTempFile) for creating unique temporary directories and files in the system temp directory (or a custom `dir`). You can also set `prefix` and `suffix`. Both return the full path and require `--allow-write`.

```diff
- import { temporaryDirectory } from 'tempy'

- const tempDir = temporaryDirectory({ prefix: 'foo-' })

+ const tempDir = await Deno.makeTempDir({ prefix: 'foo-' })
```

```diff
- import { temporaryFile } from 'tempy'

- const tempFile = temporaryFile({ extension: 'txt' })

+ const tempFile = await Deno.makeTempFile({ suffix: '.txt' })
```

> [!NOTE]
> See also: secure tempfiles in Node.js without dependencies (Advanced Web Machinery): https://advancedweb.hu/secure-tempfiles-in-nodejs-without-dependencies/
