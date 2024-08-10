# Replace `has` with `Object.hasOwn`

## Introduction

This codemod replaces the usage of the `has` utility from external libraries with the built-in `Object.hasOwn` method. This transformation reduces the number of dependencies in your codebase and utilizes native JavaScript features for better performance and smaller bundle size.

### Before

```javascript
import { has } from 'lodash';

const obj = { key: 'value' };
if (has(obj, 'key')) {
    console.log('The key exists.');
}
```

### After

```javascript
const obj = { key: 'value' };
if (Object.hasOwn(obj, 'key')) {
    console.log('The key exists.');
}
```