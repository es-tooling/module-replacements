# Math Atanh Codemod

## Introduction

This codemod replaces instances of the `Math.atanh` polyfill with the native `Math.atanh` function. By doing so, it eliminates the need for an external polyfill and reduces the bundle size, leading to improved performance in the codebase.

### Before

```javascript
import 'math.atanh/polyfill';

const result = Math.atanh(value);
```

### After

```javascript
const result = Math.atanh(value);
```