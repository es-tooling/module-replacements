---
description: Modern alternatives to CLI argument parsing packages using Node.js built-in util.parseArgs
---

# Replacements for argument parsers

## `util.parseArgs` (native, Node.js)

[`util.parseArgs`](https://nodejs.org/api/util.html#utilparseargsconfig) is built into Node.js (since 18.3.0 and 16.17.0) and can replace many common CLI parsing libraries such as `minimist`, `mri`, `arg`, `meow`, `yargs-parser`, `yargs`, `commander`, and `sade`.

Example:

```ts
import { parseArgs } from 'node:util'

const { values, positionals } = parseArgs({
  args: process.argv.slice(2),
  options: {
    force: { type: 'boolean', short: 'f' },
    output: { type: 'string', short: 'o' },
  },
  allowPositionals: true,
})
```

> [!NOTE]
> `parseArgs` only supports `string` and `boolean` types and does not provide subcommand routing, auto-generated help, or validation. If your CLI relies heavily on these features, evaluate whether the dependency savings justify the added code.
