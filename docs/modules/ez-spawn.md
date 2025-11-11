---
description: Modern alternatives to the ez-spawn package for spawning child processes
---

# Replacements for `@jsdevtools/ez-spawn`

## `tinyexec`

`ez-spawn` accepts shell-like command strings, which `tinyexec` does not.

For example:

```ts
import ezSpawn from '@jsdevtools/ez-spawn' // [!code --]
import { x } from 'tinyexec' // [!code ++]

await ezSpawn.async('ls -l') // [!code --]
await x('ls', ['-l']) // [!code ++]
```

Alternatively, you can use [`args-tokenizer`](https://github.com/TrySound/args-tokenizer/) to convert a shell string to a command and arguments:

```ts
import ezSpawn from '@jsdevtools/ez-spawn' // [!code --]
import { tokenizeArgs } from 'args-tokenizer' // [!code ++]
import { x } from 'tinyexec' // [!code ++]

const [command, ...args] = tokenizeArgs('ls -l') // [!code ++]
await ezSpawn.async('ls -l') // [!code --]
await x(command, args) // [!code ++]
```
