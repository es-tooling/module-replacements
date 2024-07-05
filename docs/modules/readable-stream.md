# readable-stream

[`readable-stream`](https://www.npmjs.com/package/readable-stream) is a mirror of the NodeJS `stream` module which also works in the browser.

# Alternatives

## NodeJS (since v0.9.4)

If your NodeJS version is recent it is better to directly use [`stream`](https://nodejs.org/api/stream.html).

## Streams API (Browsers and NodeJS 16.5.0)

The [Streams API](https://developer.mozilla.org/en-US/docs/Web/API/Streams_API) is a way to have Readable, Writable and Transform streams natively in your browser.

On NodeJS this API is available as a global since NodeJS 18.0.0, it needed to be imported from `stream/web` before.

WebStreams are (experimentally) interoperable with NodeJS streams using [`stream.Readable.toWeb`](https://nodejs.org/api/stream.html#streamreadabletowebstreamreadable-options), [`stream.Writable.fromWeb`](https://nodejs.org/api/stream.html#streamwritablefromwebwritablestream-options), and [`stream.Writable.toWeb`](https://nodejs.org/api/stream.html#streamwritabletowebstreamwritable)
