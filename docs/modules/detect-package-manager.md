---
description: Lightweight alternative to detect-package-manager for detecting the package manager with zero subdependencies
---

# Replacements for `detect-package-manager`

## `package-manager-detector`

[`package-manager-detector`](https://www.npmjs.com/package/package-manager-detector) is a lightweight alternative for detecting the package manager being used in a project.

### Key differences

- **Zero subdependencies** compared to 16 in `detect-package-manager`
- **Actively maintained** while `detect-package-manager` hasn't been updated in over a year and a half
- **Smaller bundle size** due to the lack of dependencies

### Migration example

```ts
import { detect } from 'detect-package-manager' // [!code --]
import { detect } from 'package-manager-detector' // [!code ++]

const pm = await detect() // [!code --]
const result = await detect() // [!code ++]
const pm = result?.name // [!code ++]
```

Note: `package-manager-detector` returns an object with `name` and `agent` properties, while `detect-package-manager` returns a string directly.

Both packages can detect npm, yarn, pnpm, and bun package managers in your project by analyzing lock files. Additionally, `package-manager-detector` also supports deno.
