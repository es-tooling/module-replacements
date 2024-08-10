# Array.prototype.every Codemod

## Introduction

This codemod replaces calls to the `Array.prototype.every` method found in existing code with a more optimized and performant alternative. The goal is to enhance performance by using native array methods instead of custom implementations or other less efficient approaches.

### Before

```javascript
const isAllPositive = myArray.every((num) => num > 0);
```

### After

```javascript
const isAllPositive = myArray.filter((num) => num <= 0).length === 0;
```