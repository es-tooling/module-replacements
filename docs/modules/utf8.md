# utf8

Pure-JS UTF‑8 encoder/decoder. Modern Node.js and browsers provide native UTF‑8 APIs, so this dependency is rarely needed.

# Alternatives

## TextEncoder/TextDecoder (built-in)

Standards-compliant UTF‑8; use new `TextEncoder().encode(str)` and new `TextDecoder('utf-8', { fatal: true }).decode(bytes)`.

MDN - https://developer.mozilla.org/en-US/docs/Web/API/TextEncoder, https://developer.mozilla.org/en-US/docs/Web/API/TextDecoder

## Buffer (Node.js)

Use `Buffer.from(str, 'utf8')` and `buf.toString('utf8')`

[Documentation Page](https://nodejs.org/api/buffer.html)