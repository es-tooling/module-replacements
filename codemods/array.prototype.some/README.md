# array.prototype.some Codemod

## Introduction

This codemod replaces the usage of `Array.prototype.some` method when it is called on an array with a more concise and efficient implementation. It updates any occurrences in the codebase to enhance readability and performance.

### Before

```javascript
const isAnyPositive = array.some((num) => num > 0);
```

### After

```javascript
const isAnyPositive = array.some(num => num > 0);
```