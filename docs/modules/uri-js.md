# uri-js

`uri-js` is unmaintained and emits [deprecation warnings](https://github.com/garycourt/uri-js/pull/95) for newer node versions. It is recommended to use a different package for RFC 3986 URI parsing.

# Alternatives

## `uri-js-replace`

[`uri-js-replace`](https://www.npmjs.com/package/uri-js-replace) is a 0 dependency package that can replace the functionality of `uri-js`. It is designed to have the same API as `uri-js`, but with modernized code and no deprecation warnings.

## `fast-uri`

[`fast-uri`](https://www.npmjs.com/package/fast-uri) is a 0 dependency package that can replace the functionality of `uri-js`. It has a slightly different top-level API than `uri-js`, but it should be a drop-in replacement for most use cases, and is designed to be faster than `uri-js`.
