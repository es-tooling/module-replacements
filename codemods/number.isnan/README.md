# number.isnan Codemod

## Introduction

This codemod replaces usages of the `number.isnan` function from the `number` library with the built-in `Number.isNaN` method. This transformation eliminates the dependency on the `number` library, reducing bundle size and improving the performance of the codebase.

### Before

```javascript
import { isNaN } from 'number';

const result = isNaN(value);
```

### After

```javascript
const result = Number.isNaN(value);
```