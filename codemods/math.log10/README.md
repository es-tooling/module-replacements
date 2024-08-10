# Math Log10 Codemod

## Introduction

This codemod transforms instances of `Math.log10` using a polyfill `math.log10/polyfill`. It streamlines the usage of logarithmic functions by replacing the polyfill with native `Math.log10`, thereby reducing the unnecessary dependency on the polyfill.

### Before

```javascript
import 'math.log10/polyfill';

const value = Math.log10(100);
```

### After

```javascript
const value = Math.log10(100);
```