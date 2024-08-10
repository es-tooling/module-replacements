# Codemod: is-primitive

## Introduction

This codemod replaces the usage of the `is-primitive` npm module with a custom implementation of the `isPrimitive` function. This change aims to reduce unnecessary dependencies and improve the performance of the codebase by utilizing a built-in approach to validate primitive values.

### Before

```javascript
import isPrimitive from 'is-primitive';

const value = 'Hello, World!';
const result = isPrimitive(value);
```

### After

```javascript
const val = 'Hello, World!';
const result = (() => {
    if (typeof val === 'object') {
        return val === null;
    }
    return typeof val !== 'function';
})();
```