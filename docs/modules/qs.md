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

- no polyfills for ancient Node versions. This reduces the amount of dependencies from 15 to 1, and the bundle size from 11kb to 4.2kb.
- types are included, thus you do not have to install a `@types/` package anymore
