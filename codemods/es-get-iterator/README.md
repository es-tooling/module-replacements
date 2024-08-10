# es-get-iterator Codemod

## Introduction

This codemod replaces the usage of the `es-get-iterator` module with native ES features. It converts calls to the `getIterator` function into a more efficient form that utilizes the `Symbol.iterator` property directly, thus reducing dependency on external libraries.

### Before

```javascript
import { getIterator } from 'es-get-iterator';

const iterable = [1, 2, 3];
const iterator = getIterator(iterable);
```

### After

```javascript
const iterable = [1, 2, 3];
const iterator = iterable[Symbol.iterator]();
```