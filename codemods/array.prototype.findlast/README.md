# Array.prototype.findLast Codemod

## Introduction

This codemod replaces instances of `Array.prototype.findlast` with the built-in `findLast` method, which offers a more efficient and modern solution for finding the last element in an array that satisfies a given condition. This change reduces reliance on custom implementations and enhances code readability.

### Before

```javascript
const result = array.findlast(item => item.active);
```

### After

```javascript
const result = array.findLast(item => item.active);
```