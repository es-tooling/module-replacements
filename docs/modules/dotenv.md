# dotenv

Although dotenv is reliable, it may not be necessary or may lack certain features.

## Alternatives

### dotenvx

Modern and secure alternative by the same author. It supports encryption, and multi-environment configs.

[Project Page](https://github.com/dotenvx/dotenvx)
[npm](https://www.npmjs.com/package/@dotenvx/dotenvx)

### Node.js --env-file

Built into Node.js since v20.6.0. Zero dependencies, good for simple use cases.

```bash
node --env-file=.env index.js
```

Also supported by [tsx](https://www.npmjs.com/package/tsx), [Bun](https://bun.sh/docs/runtime/env#manually-specifying-env-files), and [Deno](https://docs.deno.com/runtime/reference/env_variables/#.env-file).

[Node docs](https://nodejs.org/dist/latest-v20.x/docs/api/cli.html#--env-fileconfig)
