# Array.prototype.tospliced Codemod

## Introduction

This codemod updates instances of the deprecated `Array.prototype.tospliced` method to the more standard `Array.prototype.toSpliced` method. This transformation aims to standardize the usage of array methods in your codebase, improve readability, and reduce potential confusion caused by using non-standard methods.

### Before

```javascript
const array = [1, 2, 3, 4];
const newArray = array.tospliced(1, 2, 5);
```

### After

```javascript
const array = [1, 2, 3, 4];
const newArray = array.toSpliced(1, 2, 5);
```