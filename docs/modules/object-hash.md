# object-hash

Generate hashes from objects and values in Node and the browser. Note: the project is largely unmaintained.

## Alternatives

### `ohash`

Actively maintained utilities for hashing, serialization, equality, and diffs. Uses stable serialization plus SHA-256 (Base64URL). Serialization was originally based on object-hash.

[Project Page](https://github.com/unjs/ohash)

[npm](https://www.npmjs.com/package/ohash)

### Web Crypto

Use the standard [`SubtleCrypto.digest`](https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/digest) API available in the runtimes. Pair it with a stable serializer (e.g., [`safe-stable-stringify`](https://github.com/BridgeAR/safe-stable-stringify)) to deterministically hash objects.

### `Bun.CryptoHasher` (built-in)

Bun’s native incremental hasher (e.g., sha256). Combine with a stable serializer for object hashing. For fast non-crypto fingerprints, see [`Bun.hash`](https://bun.com/reference/bun/hash).

[Documentation Page](https://bun.com/reference/bun/CryptoHasher)
