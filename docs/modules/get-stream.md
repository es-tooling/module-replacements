---
description: Modern alternatives to the get-stream package
---

# Replacements for `get-stream`

## Converting stream to string

```ts
async function streamToString(stream) {
  const chunks = []
  for await (const chunk of stream) {
    chunks.push(Buffer.from(chunk))
  }
  return Buffer.concat(chunks).toString('utf-8')
}
```

## Converting stream to Array

```ts
await Array.fromAsync(stream)
```

## Converting stream to Buffer

```ts
async function streamToBuffer(stream) {
  const chunks = await Array.fromAsync(stream, chunk => Buffer.from(chunk))
  return Buffer.concat(chunks)
}
```
