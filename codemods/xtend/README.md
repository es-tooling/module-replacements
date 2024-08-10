# Xtend Codemod

## Introduction

This codemod eliminates the `xtend` npm module by refactoring code to use the built-in JavaScript spread operator. This reduces the dependency on an external package, thereby decreasing the bundle size and improving the performance of the codebase.

### Before

```javascript
import xtend from 'xtend';

const merged = xtend(object1, object2);
```

### After

```javascript
const merged = { ...object1, ...object2 };
```