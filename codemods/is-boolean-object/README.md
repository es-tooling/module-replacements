# is-boolean-object Codemod

## Introduction

This codemod replaces the usage of the `is-boolean-object` package with the native `Object.prototype.toString.call` method. By utilizing a built-in ES feature, the codemod reduces dependency on external packages, leading to a lighter codebase and potentially improved performance.

### Before

```javascript
import isBooleanObject from 'is-boolean-object';

const result = isBooleanObject(value);
if (result) {
    // Do something
}
```

### After

```javascript
const result = Object.prototype.toString.call(value) === '[object Boolean]';
if (result) {
    // Do something
}
```