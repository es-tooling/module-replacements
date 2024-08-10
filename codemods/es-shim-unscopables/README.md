# es-shim-unscopables Codemod

## Introduction

This codemod removes the `es-shim-unscopables` package from the codebase. It eliminates unnecessary dependency by replacing calls to its functions with native JavaScript functionality, thus optimizing the bundle size and improving performance.

### Before

```javascript
import { unscopables } from 'es-shim-unscopables';

const result = unscopables(array);
```

### After

```javascript
const result = array.filter(Boolean); // Example of native functionality that may replace unscopables
```