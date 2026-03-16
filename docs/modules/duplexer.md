[`Duplex.from`](https://nodejs.org/api/stream.html#streamduplexfromsrc) can be used instead

Before:

```js
import duplexer from 'duplexer'

duplexer(writableStream, readableStream)
```

After:

```js
import { Duplex } from 'node:stream'

Duplex.from({
  writable: writableStream,
  readable: readableStream
})
```
