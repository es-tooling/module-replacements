# qs

`qs` can typically be replaced with platform-provided APIs. When you need more functionality, there are other alternatives.

# Alternatives

## URLSearchParams

[URLSearchParams](https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams) is available starting in Node 10 and can be used when you don't need nesting or arrays

## fast-querystring

[fast-querystring](https://www.npmjs.com/package/fast-querystring) can be used when you need arrays but not nesting.

[Project Page](https://github.com/anonrig/fast-querystring)
[npm](https://www.npmjs.com/package/fast-querystring)

## picoquery

[picoquery](https://www.npmjs.com/package/picoquery) can be used when you need nesting and arrays.

- `v2.x` and above are ESM only.
- `v1.x` is compatible with CommonJS and will be maintained with non-breaking changes.

`nestingSyntax: 'js'` offers the highest level of compatibility with `qs`. However, you may be able to use an alternative `nestingSyntax` value for increased performance.

[Project Page](https://github.com/43081j/picoquery)
[npm](https://www.npmjs.com/package/picoquery)

## qs-esm

[qs-esm](https://www.npmjs.com/package/qs-esm) is an esm-only fork of `qs` with the following core differences:

- No polyfills for legacy Node versions, making this package dependency-free and reducing bundle-size.
- Includes TypeScript types, eliminating the need to install a separate @types/ package.

[Project Page](https://github.com/payloadcms/qs-esm)
[npm](https://www.npmjs.com/package/qs-esm)

## neoqs

[neoqs](https://www.npmjs.com/package/neoqs) is a fork of `qs` with the following core differences:

- No polyfills for legacy Node versions, making this package dependency-free and reducing bundle-size.
- Includes TypeScript types, eliminating the need to install a separate @types/ package.
- ESM and CommonJS builds are provided.
- Legacy mode supporting ES5.

[Project Page](https://github.com/puruvj/neoqs)
[npm](https://www.npmjs.com/package/neoqs)
