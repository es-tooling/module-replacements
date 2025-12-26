---
description: node-fetch was a package created for fetch to run in node (similar to cross-fetch but cross-fetch is to work equal in browser and server), it has still millions of downloads even if fetch since 18 (experimental) and 21 (stable) supports fetch API
---

# Replacements for `node-fetch`

## Native `fetch` API

The native [`fetch`](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) API is available in Node.js (since v18.x) and all modern browsers.

Example:

```ts
// GET
const res = await fetch('https://api.example.com/data');
const data = await res.json();

// POST
await fetch('https://api.example.com/data', {
  method: 'POST',
  headers: {'Content-Type': 'application/json'},
  body: JSON.stringify({key: 'value'})
});
```

## `ky`

[`ky`](https://github.com/sindresorhus/ky) is a lightweight HTTP client based on the Fetch API with timeout support, hooks (interceptors) and other helpers.

Example:

```ts
import ky from 'ky';

const api = ky.create({
  prefixUrl: 'https://api.example.com',
  timeout: 5000 // ms
});

const data = await api.get('users').json();
```

## `ofetch`

[`ofetch`](https://github.com/unjs/ofetch) s a fetch wrapper with automatic JSON parsing, request/response interceptors, and retries.

Example:

```ts
import {ofetch} from 'ofetch';

const api = ofetch.create({
  baseURL: 'https://api.example.com'
});

const data = await api('/user', {query: {id: 123}});
const created = await api('/items', {method: 'POST', body: {name: 'A'}});
```
