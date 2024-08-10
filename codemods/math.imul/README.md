# Math Imul Codemod

## Introduction

This codemod replaces instances of the `math.imul/polyfill` module with the built-in `Math.imul()` function. By utilizing native capabilities instead of a polyfill, this codemod helps to reduce unnecessary dependencies and improve both the performance and the bundle size of the codebase.

### Before

```javascript
import { imul } from 'math.imul/polyfill';

const result = imul(2, 3);
```

### After

```javascript
const result = Math.imul(2, 3);
```