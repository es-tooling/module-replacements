---
description: Modern alternatives to the stream-buffers package for buffering and generating streams in Node.js
---

# Replacements for `stream-buffers`

## Utility Consumers (native, Node.js)

Since Node.js ≥ 16.7.0 [Utility Consumers](https://nodejs.org/api/webstreams.html#webstreams_utility_consumers) let you consume a Readable stream fully into memory (`Buffer`/`string`/`JSON`/`Blob`/`ArrayBuffer`).

Example:

```ts
import streamBuffers from 'stream-buffers' // [!code --]
import { pipeline } from 'node:stream/promises' // [!code --]
import { buffer } from 'node:stream/consumers' // [!code ++]

const sink = new streamBuffers.WritableStreamBuffer() // [!code --]
await pipeline(readable, sink) // [!code --]

const out = sink.getContents() // [!code --]
const out = await buffer(readable) // [!code ++]
```

Capturing output when an API expects a Writable example:

```ts
import streamBuffers from 'stream-buffers' // [!code --]
import { PassThrough } from 'node:stream' // [!code ++]
import { buffer, text } from 'node:stream/consumers' // [!code ++]

const sink = new streamBuffers.WritableStreamBuffer() // [!code --]
const sink = new PassThrough() // [!code ++]

await someFnThatWritesTo(sink) // [!code --]
const out = sink.getContents() // [!code --]

const resultP = buffer(sink) // [!code ++]
await someFnThatWritesTo(sink) // [!code ++]
sink.end() // [!code ++]
const out = await resultP // [!code ++]
```

Push data over time example:

```ts
import streamBuffers from 'stream-buffers' // [!code --]
import { Readable } from 'node:stream' // [!code ++]

const rs = new streamBuffers.ReadableStreamBuffer() // [!code --]
const rs = new Readable({ read() {} }) // [!code ++]

rs.put('first chunk') // [!code --]
rs.push('first chunk') // [!code ++]

rs.put(Buffer.from('second chunk')) // [!code --]
rs.push(Buffer.from('second chunk')) // [!code ++]

rs.stop() // [!code --]
rs.push(null) // [!code ++]
```

Control chunk size and frequency example:

<!-- prettier-ignore -->
```ts
import streamBuffers from 'stream-buffers' // [!code --]
import { Readable } from 'node:stream' // [!code ++]
import { setTimeout } from 'node:timers/promises' // [!code ++]

const rs = new streamBuffers.ReadableStreamBuffer({ frequency: 10, chunkSize: 2048 }) // [!code --]
rs.put(data) // [!code --]
rs.stop() // [!code --]

const data = Buffer.from('...your data...') // [!code ++]
const chunkSize = 2048 // [!code ++]
const frequencyMs = 10 // [!code ++]

const rs = Readable.from(async function* () { // [!code ++]
  for (let i = 0; i < data.length; i += chunkSize) { // [!code ++]
    yield data.slice(i, i + chunkSize) // [!code ++]
    await setTimeout(frequencyMs) // [!code ++]
  } // [!code ++]
}()) // [!code ++]
```
