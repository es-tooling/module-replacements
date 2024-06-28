# qs

`qs` can typically be replaced with platform-provided APIs. When you need more functionality, there are other alternatives.

# Alternatives

## URLSearchParams

[URLSearchParams](https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams) is available starting in Node 10 and can be used when you don't need nesting or arrays

## fast-querystring

[fast-querystring](https://www.npmjs.com/package/fast-querystring) can be used when you need arrays but not nesting.

## picoquery

[picoquery](https://www.npmjs.com/package/picoquery) can be used when you need nesting and arrays.

## qs-esm
[qs-esm](https://www.npmjs.com/package/qs-esm) is an esm-only fork of `qs` with the following core differences:

- No polyfills for legacy Node versions, making this package dependency-free and reducing bundle-size.
- Includes TypeScript types, eliminating the need to install a separate @types/ package.
