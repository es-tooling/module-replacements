# find-up, read-package-up, read-package, etc.

Many of these upwards traversal libraries are overly granular and non-generic.

We can replace most of them with one upwards traversal library and, sometimes, one file reading library.

# Alternatives

## empathic

`empathic` can be used to find _any_ file or directory upwards in the file system. It is very fast and very small.

[Project Page](https://github.com/lukeed/empathic)

[npm](https://www.npmjs.com/package/empathic)

## pkg-types

If you need to _read_ a `package.json` into a strong type, you can combine an upwards traversal library with `pkg-types`.

This library contains functions for reading `package.json` files and returning them as a strong type.

[Project Page](https://github.com/unjs/pkg-types/)

[npm](https://www.npmjs.com/package/pkg-types)
