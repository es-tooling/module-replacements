---
description: Modern alternatives to toml for TOML parsing and stringifying
---

# Replacements for `toml`

`toml` appears to be unmaintained and has known spec-compliance issues.

## `toml`

[`smol-toml`](https://github.com/squirrelchat/smol-toml) is a well maintained TOML v1.1.0 parser/stringifier with full spec compliance, comment/AST support, and no deps.

Parse (load):

```ts
import toml from 'toml' // [!code --]
import { parse } from 'smol-toml' // [!code ++]

const obj = toml.parse(src) // [!code --]
const obj = parse(src) // [!code ++]
```

Stringify:

```ts
import { stringify } from 'smol-toml' // [!code ++]

const text = stringify(obj) // [!code ++]
```

## Bun `TOML` API

[Native TOML parsing](https://bun.com/reference/bun/TOML) is supported in Bun.

Example:

```ts
import toml from 'toml' // [!code --]
import { TOML } from 'bun' // [!code ++]

toml.parse(src) // [!code --]
TOML.parse(src) // [!code ++]
```
