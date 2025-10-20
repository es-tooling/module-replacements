<!--
---
description: Modern alternatives to the dotenv package for loading and managing .env files in Node.js
---
-->

# Replacements for `dotenv`

Although dotenv is reliable, it may not be necessary or may lack certain features.

## Node.js --env-file / --env-file-if-exists

Built into Node.js (v20.6.0+; v22.9.0 for `--env-file-if-exists`). Zero dependencies—perfect for most apps that just need to load a `.env` at startup.

[`--env-file`](https://nodejs.org/dist/latest-v20.x/docs/api/cli.html#--env-fileconfig) throws if the file is missing. If the file may be absent, use [`--env-file-if-exists`](https://nodejs.org/docs/latest-v22.x/api/cli.html#--env-file-if-existsconfig).

```sh
node --env-file=.env index.js
```

Also supported by:

- [tsx](https://www.npmjs.com/package/tsx)
- [Bun](https://bun.sh/docs/runtime/env#manually-specifying-env-files)
- [Deno](https://docs.deno.com/runtime/reference/env_variables/#.env-file)

Remove dotenv preload:

```diff
- import 'dotenv/config'
// No import needed when using --env-file
```

Remove explicit dotenv config:

```diff
- import dotenv from 'dotenv'

- dotenv.config({ path: '.env' })
// No runtime configuration needed
```

In package.json scripts:

```diff
{
  "scripts": {
-    "start": "node index.js",
+    "start": "node --env-file=.env index.js"
  }
}
```
