# buf-compare

[`buf-compare`](https://github.com/sindresorhus/buf-compare) recommends that you switch to native `Buffer.compare()` which has been available since Node.js v0.12.0

# Alternatives

## NodeJS

```js
import {Buffer} from 'node:buffer';

const buf1 = Buffer.from('1234');
const buf2 = Buffer.from('0123');
const arr = [buf1, buf2];

console.log(arr.sort(Buffer.compare));
// Prints: [ <Buffer 30 31 32 33>, <Buffer 31 32 33 34> ]
// (This result is equal to: [buf2, buf1].)
```

[Node.js Docs](https://nodejs.org/api/buffer.html#static-method-buffercomparebuf1-buf2)
