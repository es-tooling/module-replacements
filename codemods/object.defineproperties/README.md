# object.defineproperties Codemod

## Introduction

This codemod replaces instances of the `object.defineproperties` function with the built-in `Object.defineProperties` method. This change reduces unnecessary dependencies, leveraging native JavaScript functionality for improved performance and a smaller bundle size.

### Before

```javascript
import object from 'object.defineproperties';

const obj = {};
object.defineproperties(obj, {
    prop1: {
        value: 42,
        writable: true,
    },
});
```

### After

```javascript
const obj = {};
Object.defineProperties(obj, {
    prop1: {
        value: 42,
        writable: true,
    },
});
```