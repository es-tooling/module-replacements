# Array Map Codemod

## Introduction

This codemod transforms instances of using custom `array-map` utility functions into native JavaScript `Array.prototype.map` methods. The goal is to reduce dependency on external libraries, improve performance by utilizing built-in functionality, and streamline the codebase.

### Before

```javascript
import { arrayMap } from 'array-map';

const result = arrayMap(array, item => item * 2);
```

### After

```javascript
const result = array.map(item => item * 2);
```