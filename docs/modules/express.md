---
description: Modern alternatives to the express package
---

# Replacements for `express`

Express has been the industry standard for years, but the ecosystem has shifted toward ESM-first, type-safe, and runtime-agnostic frameworks that offer significantly better performance and developer experience.

## `h3`

[`h3`](https://github.com/h3js/h3) is a minimal H(TTP) framework built for high performance and portability. It is the engine behind Nuxt and Nitro, designed to work anywhere (Node.js, Workers, Deno, Bun).

Example:

<!-- prettier-ignore -->
```ts
import express from 'express' // [!code --]
import { H3, defineHandler, toNodeHandler } from 'h3' // [!code ++]
import { createServer } from 'node:http' // [!code ++]

const app = express() // [!code --]
const app = new H3() // [!code ++]

app.get('/', (req, res) => res.send('Hello world')) // [!code --]
app.get('/', defineHandler(() => 'Hello world')) // [!code ++]

app.listen(3000) // [!code --]
createServer(toNodeHandler(app)).listen(3000) // [!code ++]
```

## `tinyhttp`

[`tinyhttp`](https://github.com/tinyhttp/tinyhttp) is a modern, Express-like web framework written in TypeScript. It is designed to be a drop-in replacement that is significantly lighter and faster while remaining compatible with many Express middlewares.

Example:

```ts
import express from 'express' // [!code --]
import { App } from '@tinyhttp/app' // [!code ++]

const app = express() // [!code --]
const app = new App() // [!code ++]

app.get('/', (req, res) => res.send('Hello world')) // [!code --]

app.listen(3000)
```

## `hono`

[`hono`](https://github.com/honojs/hono) is a small, simple, and ultrafast web framework for the Edges. It has excellent TypeScript support and built-in middleware for common tasks without the overhead of heavy dependencies.

Example:

```ts
import express from 'express' // [!code --]
import { Hono } from 'hono' // [!code ++]

const app = express() // [!code --]
const app = new Hono() // [!code ++]

app.get('/', (req, res) => res.send('Hello world')) // [!code --]
app.get('/', (context) => context.text('Hello world')) // [!code ++]

export default app // [!code ++]
```

## `elysia`

If you are using Bun, [`elysia`](https://github.com/elysiajs/elysia) is often the best choice. It is specifically optimized for the Bun runtime and provides "End-to-End Type Safety," allowing your frontend to inherit types directly from your backend.

Example:

```ts
import express from 'express' // [!code --]
import { Elysia } from 'elysia' // [!code ++]

const app = express() // [!code --]
const app = new Elysia() // [!code ++]

app.get('/', (req, res) => res.send('Hello world')) // [!code --]
app.get('/', () => 'Hello world') // [!code ++]

app.listen(3000)
```
