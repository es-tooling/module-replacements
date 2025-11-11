---
description: Modern alternatives to the ora package for displaying elegant terminal spinners with status indicators
---

# Replacements for `ora`

## `nanospinner`

[`nanospinner`](https://github.com/usmanyunusov/nanospinner) provides simple start/success/error/warning methods with one dependency (`picocolors`).

```ts
import ora from 'ora' // [!code --]
import { createSpinner } from 'nanospinner' // [!code ++]

const spinner = ora('Loading...').start() // [!code --]
const spinner = createSpinner('Loading...').start() // [!code ++]

spinner.succeed('Done!') // [!code --]
spinner.success('Done!') // [!code ++]

spinner.fail('Error!') // [!code --]
spinner.error('Error!') // [!code ++]
```

## `picospinner`

[`picospinner`](https://github.com/tinylibs/picospinner) has zero dependencies with support for custom symbols, frames, and colors through Node.js built-in styling.

```ts
import ora from 'ora' // [!code --]
import { Spinner } from 'picospinner' // [!code ++]

const spinner = ora('Loading...').start() // [!code --]
const spinner = new Spinner('Loading...') // [!code ++]
spinner.start() // [!code ++]
```

If you want to customize the color of the spinner, you can specify this when creating an instance:

```ts
const spinner = new Spinner('Loading...', { colors: { spinner: 'yellow' } })
```
