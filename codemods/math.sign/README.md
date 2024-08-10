# Math Sign Codemod

## Introduction

This codemod replaces the usage of the `math.sign/polyfill` npm module with the built-in `Math.sign` method. By utilizing native JavaScript features, it reduces unnecessary dependencies and optimizes the codebase for better performance.

### Before

```javascript
import sign from 'math.sign/polyfill';

const value = sign(number);
```

### After

```javascript
const value = Math.sign(number);
```