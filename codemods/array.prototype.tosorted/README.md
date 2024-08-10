# Array.prototype.tosorted Codemod

## Introduction

This codemod replaces occurrences of the non-standard `Array.prototype.tosorted` method with the standard `Array.prototype.toSorted` method. This update aligns the code with modern JavaScript standards, improving both code clarity and performance.

### Before

```javascript
const sortedArray = someArray.tosorted();
```

### After

```javascript
const sortedArray = someArray.toSorted();
```