---
description: Modern alternatives to CLI argument parsing packages using Node.js built-in util.parseArgs
---

# Replacements for argument parsers

Node.js 18.3+ (and 16.17+) includes [`util.parseArgs`](https://nodejs.org/api/util.html#utilparseargsconfig), a built-in argument parser that can replace many common CLI parsing libraries.

## Packages covered

- `minimist`
- `mri`
- `arg`
- `meow`
- `yargs-parser`
- `yargs`
- `commander`
- `sade`

## `minimist`

`minimist` is the simplest migration case. It's often a transitive dependency rather than a direct choice:

```ts
import minimist from 'minimist' // [!code --]
import { parseArgs } from 'node:util' // [!code ++]

const argv = minimist(process.argv.slice(2)) // [!code --]
const { values, positionals } = parseArgs({ // [!code ++]
  args: process.argv.slice(2), // [!code ++]
  options: { // [!code ++]
    force: { type: 'boolean', short: 'f' }, // [!code ++]
    output: { type: 'string', short: 'o' }, // [!code ++]
  }, // [!code ++]
  allowPositionals: true, // [!code ++]
}) // [!code ++]

// Access options
argv.force // [!code --]
values.force // [!code ++]

// Access positionals
argv._ // [!code --]
positionals // [!code ++]
```

### Handling unknown options

`minimist` accepts any flag by default. To match this behavior, use `strict: false`:

```ts
const { values, positionals } = parseArgs({
  args: process.argv.slice(2),
  strict: false,
  allowPositionals: true,
})
```

### Providing a minimist-compatible interface

For gradual migration, you can create a compatibility layer:

```ts
import { parseArgs } from 'node:util'

const { values, positionals } = parseArgs({
  args: process.argv.slice(2),
  options: {
    help: { type: 'boolean', short: 'h' },
    force: { type: 'boolean', short: 'f' },
  },
  strict: false,
  allowPositionals: true,
})

// minimist-compatible object
const argv = {
  _: positionals,
  ...values,
  // Add short aliases only when truthy (minimist behavior)
  ...(values.help && { h: values.help }),
  ...(values.force && { f: values.force }),
}
```

### Using tokens for advanced parsing

For minimist-style parsing where `--flag value` treats `value` as the flag's argument (not a positional), use the `tokens` option:

```ts
const { tokens } = parseArgs({
  args: process.argv.slice(2),
  strict: false,
  allowPositionals: true,
  tokens: true,
})

const result = { _: [] }
for (let i = 0; i < tokens.length; i++) {
  const token = tokens[i]
  if (token.kind === 'option') {
    const nextToken = tokens[i + 1]
    // Check if boolean flag is followed by a value
    if (token.value === undefined && nextToken?.kind === 'positional') {
      result[token.name] = nextToken.value
      i++ // Skip next token
    } else {
      result[token.name] = token.value ?? true
    }
  } else if (token.kind === 'positional') {
    result._.push(token.value)
  }
}
```

## `mri`

`mri` is a lightweight minimist alternative. The migration is nearly identical to minimist:

```ts
import mri from 'mri' // [!code --]
import { parseArgs } from 'node:util' // [!code ++]

const argv = mri(process.argv.slice(2), { // [!code --]
  alias: { h: 'help', v: 'version' }, // [!code --]
  boolean: ['help', 'version'], // [!code --]
}) // [!code --]
const { values, positionals } = parseArgs({ // [!code ++]
  args: process.argv.slice(2), // [!code ++]
  options: { // [!code ++]
    help: { type: 'boolean', short: 'h' }, // [!code ++]
    version: { type: 'boolean', short: 'v' }, // [!code ++]
  }, // [!code ++]
  allowPositionals: true, // [!code ++]
}) // [!code ++]
```

## `arg`

`arg` uses a schema-based approach similar to `parseArgs`:

```ts
import arg from 'arg' // [!code --]
import { parseArgs } from 'node:util' // [!code ++]

const args = arg({ // [!code --]
  '--port': Number, // [!code --]
  '--host': String, // [!code --]
  '--verbose': Boolean, // [!code --]
  '-p': '--port', // [!code --]
  '-h': '--host', // [!code --]
}) // [!code --]
const { values } = parseArgs({ // [!code ++]
  args: process.argv.slice(2), // [!code ++]
  options: { // [!code ++]
    port: { type: 'string', short: 'p' }, // [!code ++]
    host: { type: 'string', short: 'h' }, // [!code ++]
    verbose: { type: 'boolean' }, // [!code ++]
  }, // [!code ++]
}) // [!code ++]

// Note: parseArgs returns strings, convert if needed
const port = Number(values.port) // [!code ++]
```

> [!NOTE]
> `parseArgs` only supports `string` and `boolean` types. For numbers, parse the string value yourself.

## `meow`

`meow` is popular for small CLIs, combining parsing with auto-help from package.json:

```ts
import meow from 'meow' // [!code --]
import { parseArgs } from 'node:util' // [!code ++]
import { readFileSync } from 'node:fs' // [!code ++]

const cli = meow(` // [!code --]
  Usage // [!code --]
    $ my-cli <input> // [!code --]

  Options // [!code --]
    --rainbow, -r  Include a rainbow // [!code --]
    --postfix      Append a string // [!code --]
`, { // [!code --]
  importMeta: import.meta, // [!code --]
  flags: { // [!code --]
    rainbow: { type: 'boolean', shortFlag: 'r' }, // [!code --]
    postfix: { type: 'string', default: '!' }, // [!code --]
  } // [!code --]
}) // [!code --]
cli.input // => positionals // [!code --]
cli.flags // => { rainbow: false, postfix: '!' } // [!code --]

const { values, positionals } = parseArgs({ // [!code ++]
  args: process.argv.slice(2), // [!code ++]
  options: { // [!code ++]
    rainbow: { type: 'boolean', short: 'r' }, // [!code ++]
    postfix: { type: 'string' }, // [!code ++]
    help: { type: 'boolean', short: 'h' }, // [!code ++]
    version: { type: 'boolean', short: 'v' }, // [!code ++]
  }, // [!code ++]
  allowPositionals: true, // [!code ++]
}) // [!code ++]
const postfix = values.postfix ?? '!' // [!code ++]

// Handle --help yourself // [!code ++]
if (values.help) { // [!code ++]
  console.log(` // [!code ++]
  Usage // [!code ++]
    $ my-cli <input> // [!code ++]

  Options // [!code ++]
    --rainbow, -r  Include a rainbow // [!code ++]
    --postfix      Append a string // [!code ++]
`) // [!code ++]
  process.exit(0) // [!code ++]
} // [!code ++]

// Handle --version yourself // [!code ++]
if (values.version) { // [!code ++]
  const pkg = JSON.parse(readFileSync(new URL('./package.json', import.meta.url), 'utf8')) // [!code ++]
  console.log(pkg.version) // [!code ++]
  process.exit(0) // [!code ++]
} // [!code ++]
```

> [!NOTE]
> `meow` provides automatic `--help` and `--version` handling from your package.json. With `parseArgs`, you implement these yourself. For very simple CLIs, this trade-off may not be worth it.

## `yargs-parser`

`yargs-parser` (the parsing engine behind `yargs`) has more features, but basic usage maps directly:

```ts
import yargsParser from 'yargs-parser' // [!code --]
import { parseArgs } from 'node:util' // [!code ++]

const argv = yargsParser(process.argv.slice(2), { // [!code --]
  alias: { h: 'help' }, // [!code --]
  boolean: ['help', 'verbose'], // [!code --]
  string: ['config'], // [!code --]
}) // [!code --]
const { values, positionals } = parseArgs({ // [!code ++]
  args: process.argv.slice(2), // [!code ++]
  options: { // [!code ++]
    help: { type: 'boolean', short: 'h' }, // [!code ++]
    verbose: { type: 'boolean' }, // [!code ++]
    config: { type: 'string' }, // [!code ++]
  }, // [!code ++]
  allowPositionals: true, // [!code ++]
}) // [!code ++]
```

## `yargs`

`yargs` uses a chained builder API. For simple cases without subcommands:

```ts
import yargs from 'yargs' // [!code --]
import { hideBin } from 'yargs/helpers' // [!code --]
import { parseArgs } from 'node:util' // [!code ++]

const argv = yargs(hideBin(process.argv)) // [!code --]
  .option('port', { // [!code --]
    alias: 'p', // [!code --]
    type: 'number', // [!code --]
    default: 3000, // [!code --]
  }) // [!code --]
  .option('host', { // [!code --]
    alias: 'h', // [!code --]
    type: 'string', // [!code --]
    default: 'localhost', // [!code --]
  }) // [!code --]
  .option('verbose', { // [!code --]
    type: 'boolean', // [!code --]
    default: false, // [!code --]
  }) // [!code --]
  .parseSync() // [!code --]

const { values } = parseArgs({ // [!code ++]
  args: process.argv.slice(2), // [!code ++]
  options: { // [!code ++]
    port: { type: 'string', short: 'p' }, // [!code ++]
    host: { type: 'string', short: 'h' }, // [!code ++]
    verbose: { type: 'boolean' }, // [!code ++]
  }, // [!code ++]
}) // [!code ++]
const port = Number(values.port ?? '3000') // [!code ++]
const host = values.host ?? 'localhost' // [!code ++]
const verbose = values.verbose ?? false // [!code ++]
```

### yargs with subcommands

`yargs` subcommand support cannot be directly replaced with `parseArgs`. You'll need to handle routing yourself:

```ts
// yargs approach // [!code --]
yargs(hideBin(process.argv)) // [!code --]
  .command('serve', 'Start the server', (yargs) => { // [!code --]
    return yargs.option('port', { type: 'number' }) // [!code --]
  }, (argv) => { // [!code --]
    startServer(argv.port) // [!code --]
  }) // [!code --]
  .command('build', 'Build the project', {}, () => { // [!code --]
    runBuild() // [!code --]
  }) // [!code --]
  .parse() // [!code --]

// parseArgs approach // [!code ++]
const { values, positionals } = parseArgs({ // [!code ++]
  args: process.argv.slice(2), // [!code ++]
  options: { // [!code ++]
    port: { type: 'string' }, // [!code ++]
  }, // [!code ++]
  allowPositionals: true, // [!code ++]
}) // [!code ++]

const [command] = positionals // [!code ++]
switch (command) { // [!code ++]
  case 'serve': // [!code ++]
    startServer(Number(values.port)) // [!code ++]
    break // [!code ++]
  case 'build': // [!code ++]
    runBuild() // [!code ++]
    break // [!code ++]
  default: // [!code ++]
    console.error(`Unknown command: ${command}`) // [!code ++]
    process.exit(1) // [!code ++]
} // [!code ++]
```

> [!NOTE]
> If your CLI relies heavily on yargs features like `.demandOption()`, `.conflicts()`, `.implies()`, auto-generated help with `--help`, or complex subcommand nesting, migrating to `parseArgs` requires implementing these features yourself. Evaluate whether the dependency savings justify the added code.

## `commander` and `sade`

`commander` and `sade` provide subcommand routing and auto-generated help, which `parseArgs` does not. For simple single-command CLIs, you can replace the parsing portion:

```ts
import { program } from 'commander' // [!code --]
program // [!code --]
  .option('-f, --force', 'Force operation') // [!code --]
  .option('-o, --output <path>', 'Output path') // [!code --]
  .parse() // [!code --]
const opts = program.opts() // [!code --]

import { parseArgs } from 'node:util' // [!code ++]
const { values } = parseArgs({ // [!code ++]
  args: process.argv.slice(2), // [!code ++]
  options: { // [!code ++]
    force: { type: 'boolean', short: 'f' }, // [!code ++]
    output: { type: 'string', short: 'o' }, // [!code ++]
  }, // [!code ++]
}) // [!code ++]
```

> [!NOTE]
> If you need subcommands, auto-generated help, or validation, `parseArgs` may not be sufficient on its own. Consider keeping `commander` or `sade` for complex CLIs, or build these features yourself.

## Feature comparison

| Feature | `parseArgs` | `minimist` | `yargs` | `commander` |
|---------|-------------|------------|---------|-------------|
| Boolean flags | ✅ | ✅ | ✅ | ✅ |
| String options | ✅ | ✅ | ✅ | ✅ |
| Short aliases | ✅ | ✅ | ✅ | ✅ |
| Multiple values | ✅ `multiple: true` | ✅ | ✅ | ✅ |
| Default values | ⚠️ manual `??` | ✅ | ✅ | ✅ |
| Subcommands | ❌ | ❌ | ✅ | ✅ |
| Auto-help | ❌ | ❌ | ✅ | ✅ |
| Type coercion | ❌ (string/boolean only) | ❌ | ✅ | ✅ |
| Validation | ❌ | ❌ | ✅ | ✅ |

## Node.js version requirements

`util.parseArgs` is available in:
- Node.js 18.3.0+
- Node.js 16.17.0+

For older Node.js versions, use the [`@pkgjs/parseargs`](https://github.com/pkgjs/parseargs) polyfill.

## Further reading

- [Node.js util.parseArgs documentation](https://nodejs.org/api/util.html#utilparseargsconfig)
- [parseArgs proposal and discussion](https://github.com/nodejs/node/pull/42675)
