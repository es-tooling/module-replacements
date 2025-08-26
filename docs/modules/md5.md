# md5

If you're using the `md5` package, you should consider using a more secure algorithm if possible, if not you can find a native Node.js alternative in the example blow.

# Alternatives

## Node.js

```js
import crypto from 'node:crypto';

crypto.createHash('md5').update('message').digest('hex')`
```
