# `strip-ansi`

[`strip-ansi`](https://www.npmjs.com/package/strip-ansi) is a simple utility function that can be replaced with native APIs.

# Alternatives

## Node.js

Added in v16.11.0, `util.stripVTControlCharacters` can be used to strip ANSI escape codes from a string.

```js
import { stripVTControlCharacters } from 'node:util';

console.log(stripVTControlCharacters('\u001B[4me18e\u001B[0m')); // returns 'e18e'
```

[Documentation](https://nodejs.org/api/util.html#utilstripvtcontrolcharactersstr)

> [!NOTE]
> Due to [a bug](https://github.com/nodejs/node/issues/53697), this utility doesn't strip control characters from ANSI hyperlinks correctly. This behavior has been fixed as of NodeJS v22.10.

## Deno

Added as a part of Node API, `util.stripVTControlCharacters` can be used to strip ANSI escape codes from a string.

```js
import { stripVTControlCharacters } from 'node:util';

console.log(stripVTControlCharacters('\u001B[4me18e\u001B[0m')); // returns 'e18e'
```

[Documentation](https://docs.deno.com/api/node/util/~/stripVTControlCharacters)

## Bun

Currently, Bun doesn't have a native API for `stripVTControlCharacters` yet.

[Documentation](https://bun.sh/docs/runtime/nodejs-apis#node-util)
