# for-each Codemod

## Introduction

This codemod replaces the usage of the `for-each` npm module with the built-in `Array.prototype.forEach` method. This helps reduce unnecessary dependencies and optimizes the performance of the codebase by leveraging native JavaScript functionality.

### Before

```javascript
import forEach from 'for-each';

forEach(array, (item) => {
    console.log(item);
});
```

### After

```javascript
array.forEach((item) => {
    console.log(item);
});
```