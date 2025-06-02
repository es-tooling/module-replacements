# axios

`axios` is a popular HTTP client library, but modern JavaScript and Node.js provide native alternatives that can often replace it for many use cases.

# Alternatives

## Native `fetch` API

The native `fetch` API is now available in Node.js (since v18.x) and all modern browsers. For most HTTP requests, it can replace axios without additional dependencies.

```js
// GET request
const response = await fetch('https://api.example.com/data');
const data = await response.json();

// POST request with JSON
const response = await fetch('https://api.example.com/data', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ key: 'value' })
});
```

[MDN Documentation](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)

## ky

`ky` is a tiny and elegant HTTP client based on the Fetch API. It provides a more convenient API than raw fetch while being much smaller than axios. Also, includes `hooks` (interceptors) for request/response modification.

[Project Page](https://github.com/sindresorhus/ky)
[npm](https://www.npmjs.com/package/ky)

## ofetch

`ofetch` is a better fetch API with automatic response parsing, request/response interceptors, and retry functionality.

[Project Page](https://github.com/unjs/ofetch)
[npm](https://www.npmjs.com/package/ofetch)