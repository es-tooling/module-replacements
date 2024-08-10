# Math F16 Round Codemod

## Introduction

This codemod replaces the use of the `math.f16round` polyfill with the built-in `f16round` function. By doing so, it eliminates the need for an external dependency, helping to reduce the bundle size and improve performance.

### Before

```javascript
import { f16round } from 'math-polyfills';

const value = f16round(3.14159);
```

### After

```javascript
const value = f16round(3.14159);
```