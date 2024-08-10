# is-plain-object Codemod

## Introduction

This codemod removes the dependency on the `is-plain-object` npm module by replacing its usage with a custom implementation using native JavaScript constructs. The goal is to eliminate unnecessary dependencies, thereby reducing bundle size and improving performance.

### Before

```javascript
import isPlainObject from 'is-plain-object';

function checkObject(value) {
    return isPlainObject(value);
}
```

### After

```javascript
function checkObject(value) {
    return !!value && typeof value === 'object' && 
           (Object.getPrototypeOf(value) === null || 
            Object.getPrototypeOf(value) === Object.prototype);
}
```