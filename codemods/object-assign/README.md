# Object Assign Codemod

## Introduction

This codemod replaces instances of the `object-assign` npm module with the built-in `Object.assign` method. By doing this, it eliminates the dependency on an external package, reducing bundle size and improving overall performance.

### Before

```javascript
import objectAssign from 'object-assign';

const target = {};
const source = { a: 1, b: 2 };
const result = objectAssign(target, source);
```

### After

```javascript
const target = {};
const source = { a: 1, b: 2 };
const result = Object.assign(target, source);
```