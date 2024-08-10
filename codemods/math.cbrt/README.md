# Math Cbrt Codemod

## Introduction

This codemod replaces the usage of the `math.cbrt/polyfill` with the built-in `Math.cbrt` function, enhancing performance by eliminating unnecessary dependencies and reducing the bundle size.

### Before

```javascript
import { cbrt } from 'math.cbrt/polyfill';

const result = cbrt(27);
```

### After

```javascript
const result = Math.cbrt(27);
```