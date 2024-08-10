# number.parsefloat Codemod

## Introduction

This codemod removes the dependency on the `number.parsefloat` module by replacing it with the native `parseFloat` function, ultimately reducing bundle size and improving performance by utilizing built-in JavaScript features.

### Before

```javascript
import { parseFloat } from 'number.parsefloat';

const value = parseFloat('3.14');
```

### After

```javascript
const value = parseFloat('3.14');
```