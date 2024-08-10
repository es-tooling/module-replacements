# `array.prototype.reduce` Codemod

## Introduction

This codemod replaces occurrences of the `Array.prototype.reduce` method with a more efficient implementation. By ensuring that the code uses the built-in `reduce` method correctly and efficiently, the codemod aims to streamline the codebase and improve performance without introducing unnecessary dependencies.

### Before

```javascript
const sum = [1, 2, 3].reduce((acc, val) => acc + val, 0);
```

### After

```javascript
const sum = [1, 2, 3].reduce((acc, val) => acc + val, 0);
```