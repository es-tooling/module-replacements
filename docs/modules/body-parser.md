---
description: Modern alternatives to the body-parser package for parsing HTTP request bodies in Node.js servers
---

# Replacements for `body-parser`

## `milliparsec`

[`milliparsec`](https://github.com/tinyhttp/milliparsec) is a lightweight alternative to [`body-parser`](https://github.com/expressjs/body-parser) with a smaller footprint.

Example:

```js
import bodyParser from 'body-parser' // [!code --]
import { json, urlencoded } from 'milliparsec' // [!code ++]
import express from 'express'

const app = express()

app.use(bodyParser.json()) // [!code --]
app.use(bodyParser.urlencoded({ extended: true })) // [!code --]

app.use(json()) // [!code ++]
app.use(urlencoded()) // [!code ++]
```

For API differences and feature comparison, see the [migration.md](https://github.com/tinyhttp/milliparsec/blob/master/migration.md).
