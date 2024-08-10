# Array.prototype.splice Codemod

## Introduction

This codemod replaces usages of the `array.prototype.splice` package with native JavaScript's built-in `Array.prototype.splice` method. By eliminating the dependency on the external package, it reduces bundle size and enhances performance.

### Before

```javascript
import splice from 'array.prototype.splice';

const myArray = [1, 2, 3];
splice(myArray, 1, 1, 4); // Removes 2 and adds 4
```

### After

```javascript
const myArray = [1, 2, 3];
myArray.splice(1, 1, 4); // Removes 2 and adds 4
```