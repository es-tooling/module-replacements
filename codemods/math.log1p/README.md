# Math Log1p Codemod

## Introduction

This codemod replaces instances of `Math.log1p` polyfills imported from the `math.log1p/polyfill` module with the native `Math.log1p` function. This reduces unnecessary dependencies and leverages built-in JavaScript features, ultimately improving performance and reducing bundle size.

### Before

```javascript
import 'math.log1p/polyfill';

const result = Math.log1p(value);
```

### After

```javascript
const result = Math.log1p(value);
```