# Math Fround Codemod

## Introduction

This codemod replaces the polyfill for `Math.fround` with a native implementation available in modern JavaScript environments. By doing this, it reduces unnecessary dependencies and helps improve the performance of the codebase.

### Before

```javascript
import 'math.fround/polyfill';

const roundedValue = Math.fround(value);
```

### After

```javascript
const roundedValue = Math.fround(value);
```