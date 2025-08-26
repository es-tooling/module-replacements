# readable-stream

[`readable-stream`](https://www.npmjs.com/package/readable-stream) is a mirror of the Node.js `stream` module which also works in the browser.

# Alternatives

## Node.js (since v0.9.4)

If your Node.js version is recent it is better to directly use [`stream`](https://nodejs.org/api/stream.html).

## Streams API (Browsers and Node.js 16.5.0)

The [Streams API](https://developer.mozilla.org/en-US/docs/Web/API/Streams_API) is a way to have Readable, Writable and Transform streams natively in your browser.

On Node.js this API is available as a global since Node.js 18.0.0, it needed to be imported from `stream/web` before.

WebStreams are (experimentally) interoperable with Node.js streams using [`stream.Readable.toWeb`](https://nodejs.org/api/stream.html#streamreadabletowebstreamreadable-options), [`stream.Writable.fromWeb`](https://nodejs.org/api/stream.html#streamwritablefromwebwritablestream-options), and [`stream.Writable.toWeb`](https://nodejs.org/api/stream.html#streamwritabletowebstreamwritable)
