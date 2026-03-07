---
description: Modern alternatives to the stream-buffers package for buffering and generating streams in Node.js
---

# Replacements for `stream-buffers`

## Node.js Utility Consumers

Since Node.js ≥ 16.7.0 [Utility Consumers](https://nodejs.org/api/webstreams.html#webstreams_utility_consumers) let you consume a Readable stream fully into memory (`Buffer`/`string`/`JSON`/`Blob`/`ArrayBuffer`).

Example:

```ts
import streamBuffers from 'stream-buffers' // [!code --]
import { pipeline } from 'node:stream/promises' // [!code --]
import { buffer, text, json, blob, arrayBuffer } from 'node:stream/consumers' // [!code ++]

const sink = new streamBuffers.WritableStreamBuffer() // [!code --]
await pipeline(readable, sink) // [!code --]

const out = sink.getContents() // or sink.getContentsAsString('utf8') / JSON.parse(sink.getContentsAsString('utf8')) / new Blob([sink.getContents()]) / sink.getContents().buffer.slice(...) [!code --]
const out = await buffer(readable) // or text(readable) / json(readable) / blob(readable) / arrayBuffer(readable) [!code ++]
```

Capturing output when an API expects a Writable example:

```ts
import streamBuffers from 'stream-buffers' // [!code --]
import { PassThrough } from 'node:stream' // [!code ++]
import { buffer, text } from 'node:stream/consumers' // [!code ++]

const sink = new streamBuffers.WritableStreamBuffer() // [!code --]
const sink = new PassThrough() // [!code ++]

await someFnThatWritesTo(sink) // [!code --]
const out = sink.getContents() // or sink.getContentsAsString('utf8') [!code --]

const resultP = buffer(sink) // or text(sink) [!code ++]
await someFnThatWritesTo(sink) // [!code ++]
sink.end() // [!code ++]
const out = await resultP // [!code ++]
```

Push data over time example:

```ts
import streamBuffers from 'stream-buffers' // [!code --]
import { Readable } from 'node:stream' // [!code ++]

const r = new streamBuffers.ReadableStreamBuffer() // [!code --]
const r = new Readable({ read() {} }) // [!code ++]

r.put('first chunk') // [!code --]
r.push('first chunk') // [!code ++]

r.put(Buffer.from('second chunk')) // [!code --]
r.push(Buffer.from('second chunk')) // [!code ++]

r.stop() // [!code --]
r.push(null) // [!code ++]
```

Control chunk size and frequency example:

```ts
import streamBuffers from 'stream-buffers' // [!code --]
import { Readable } from 'node:stream' // [!code ++]
import { setTimeout } from 'node:timers/promises' // [!code ++]

const r = new streamBuffers.ReadableStreamBuffer({ // [!code --]
  frequency: 10, // [!code --]
  chunkSize: 2048 // [!code --]
}) // [!code --]
r.put(data) // [!code --]
r.stop() // [!code --]

const data = Buffer.from('...your data...') // [!code ++]
const chunkSize = 2048 // [!code ++]
const frequencyMs = 10 // [!code ++]

const r = Readable.from(async function* () { // [!code ++]
  for (let i = 0; i < data.length; i += chunkSize) { // [!code ++]
    yield data.slice(i, i + chunkSize) // [!code ++]
    await setTimeout(frequencyMs) // [!code ++]
  } // [!code ++]
}()) // [!code ++]
```
