# `lodash` / `underscore`

`lodash` and `underscore` have not been updated for many years and almost all methods can be replaced with modern JavaScript built-in methods, the rest - with simple helpers.

Extracted from `lodash` packages like `lodash.%methodname%` are not maintained, deprecated, haven't been updated for many more years, and a part of them have significant security issues and bugs. They are no longer safe for usage.

The same situation with custom `lodash` builds like `lodash-es`.

# Replacements

## You don’t (may not) need Lodash/Underscore

Here you could read how to replace Lodash or Underscore in your project.

[Website](https://you-dont-need.github.io/You-Dont-Need-Lodash-Underscore)

## es-toolkit

[es-toolkit](https://es-toolkit.dev/) is a utility library similar to lodash that is designed to replace lodash by offering a seamless compat layer. It supports tree shaking out of the box and offers better performances for modern JavaScript runtimes.
