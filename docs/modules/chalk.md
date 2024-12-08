# chalk

`chalk`, `cli-color`, and similar libraries have various alternatives which are lighter and faster.

# Alternatives

## picocolors

A widely used alternative which is much lighter and faster.

[Project Page](https://github.com/alexeyraspopov/picocolors)

[npm](https://npmjs.com/package/picocolors)

## ansis

A lighter alternative which also supports 256 color creation.

[Project Page](https://github.com/webdiscus/ansis)

[npm](https://npmjs.com/package/ansis)

## styleText (Node 20.x and above)

Node itself has a `styleText` function in the built-in `util` library.

You can use it like so:

```js
import { styleText } from 'node:util';

styleText('green', 'Success!')
```

[Project Page](https://nodejs.org/api/util.html#utilstyletextformat-text-options)
