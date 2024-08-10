# Array.prototype.foreach Codemod

## Introduction

This codemod transforms usages of `Array.prototype.foreach` to the built-in `Array.prototype.forEach` method. This change optimizes the code by leveraging native JavaScript functionality, reducing dependencies, and improving performance while maintaining the same behavior.

### Before

```javascript
const arr = [1, 2, 3];

arr.foreach((num) => {
  console.log(num);
});
```

### After

```javascript
const arr = [1, 2, 3];

arr.forEach((num) => {
  console.log(num);
});
```