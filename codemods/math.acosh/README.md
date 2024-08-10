# Math ACOSH Codemod

## Introduction

This codemod replaces the usage of the `math.acosh/polyfill` with the built-in `Math.acosh` method. This transformation reduces unnecessary dependencies by utilizing native JavaScript functionality, ultimately improving performance and reducing bundle size.

### Before

```javascript
import acosh from 'math.acosh/polyfill';

const result = acosh(value);
```

### After

```javascript
const result = Math.acosh(value);
```