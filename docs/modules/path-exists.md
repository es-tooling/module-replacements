# path-exists

`path-exists` is a simple utility that can be replaced with platform-provided APIs.

# Alternatives

## Node.js

Added in v0.1.21, `fs.existsSync` can be used to check if a path exists. It is synchronous and returns a boolean.

```js
import { existsSync } from 'node:fs';

if (existsSync('/etc/passwd'))
  console.log('The path exists.');
```

[documentation](https://nodejs.org/docs/latest/api/fs.html#fsexistssyncpath)

## Bun

The `Bun.file()` function accepts a path and returns a BunFile instance.

````ts
const path = "/path/to/package.json";
const file = Bun.file(path);

await file.exists(); // boolean;
````

[documentation](https://bun.sh/guides/read-file/exists)
