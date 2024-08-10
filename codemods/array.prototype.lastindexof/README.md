# Array.prototype.lastIndexOf Codemod

## Introduction

This codemod replaces the usage of `Array.prototype.lastindexof` with the standard `lastIndexOf` method on the Array prototype. The goal is to eliminate non-standard method names, ensuring compatibility with native JavaScript features while improving code readability and maintainability.

### Before

```javascript
const arr = [1, 2, 3, 4, 5];
const index = arr.lastindexof(3);
```

### After

```javascript
const arr = [1, 2, 3, 4, 5];
const index = arr.lastIndexOf(3);
```