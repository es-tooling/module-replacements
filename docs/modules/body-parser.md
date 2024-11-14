# Body-parser

`body-parser` can be replaced with more modern alternatives which is both lighter and faster.

# Alternatives

## Native Implementation

For simple use cases, you can implement a minimal body parser in vanilla JavaScript:

```js
const sizeLimit = 10 * 1024; // limit body size to 10kB
req.body = {};

await new Promise(function(res, rej) {
  let buffers = [];
  let size = 0;

  // parse each chunk and append them into Buffer array
  req.on('data', chunk => {
    size += chunk.length;
    if (size > sizeLimit) {
      return rej(new Error('Size limit'));
    }

    buffers.push(chunk);
  });

  req.on('end', () => res(buffers));
})
.then(function(buffers) {
  if (!buffers.length) return;

  try {
    req.body = JSON.parse(Buffer.concat(buffers).toString());
  } catch (err) {
    return Promise.reject(new Error('Invalid JSON: ' + err.message));
  }
});
```

Do note that the above implementation lacks sophisticated features such as better error handling, timeouts, flexible size limits, etc.


## milliparsec

`milliparsec` a modern `body-parser` alternative that supports `async / await`, lighter (8 kB vs 62.6 kB for `body-parser`), and [30% faster](https://github.com/tinyhttp/milliparsec/blob/master/bench/index.md)

[Project Page](https://github.com/tinyhttp/milliparsec)
[npm](https://www.npmjs.com/package/milliparsec)

