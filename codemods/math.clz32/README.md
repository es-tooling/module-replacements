# Math.clz32 Codemod

## Introduction

This codemod replaces the usage of the `math.clz32/polyfill` library with the built-in `Math.clz32` method. The objective is to eliminate the unnecessary dependency on the polyfill, thereby reducing the bundle size and improving performance.

### Before

```javascript
import { clz32 } from 'math.clz32/polyfill';

const result = clz32(5);
```

### After

```javascript
const result = Math.clz32(5);
```