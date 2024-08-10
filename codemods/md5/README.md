# md5 Codemod

## Introduction

This codemod replaces the usage of the `md5` npm module with the built-in `crypto` module from Node.js. It updates the import statements and transforms the function calls to utilize the more efficient `crypto.createHash('md5').update().digest('hex')` syntax, thereby reducing external dependencies and enhancing performance.

### Before

```javascript
import md5 from 'md5';

const hash = md5(data);
```

### After

```javascript
import { createHash } from 'crypto';

const hash = createHash('md5').update(data).digest('hex');
```