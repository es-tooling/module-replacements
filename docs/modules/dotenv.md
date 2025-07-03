# dotenv

Although dotenv is reliable, it may not be necessary or may lack certain features.

## Alternatives

### Node.js --env-file / --env-file-if-exists

Built into Node.js since v20.6.0 (v22.9.0 for `--env-file-if-exists`). Zero dependencies, good for simple use cases.

`--env-file` will raise an error if the env-file does not exist. For those cases, where the env-file might or might not exist, use `--env-file-if-exists`.

```bash
node --env-file=.env index.js
```

Also supported by [tsx](https://www.npmjs.com/package/tsx), [Bun](https://bun.sh/docs/runtime/env#manually-specifying-env-files), and [Deno](https://docs.deno.com/runtime/reference/env_variables/#.env-file).

Node docs: [`--env-file`](https://nodejs.org/dist/latest-v20.x/docs/api/cli.html#--env-fileconfig) / [`--env-file-if-exists`](https://nodejs.org/docs/latest-v22.x/api/cli.html#--env-file-if-existsconfig)
