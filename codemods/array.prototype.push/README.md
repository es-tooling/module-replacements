# Array.prototype.push Codemod

## Introduction

This codemod replaces the usage of `array.push` with a more efficient implementation that avoids unnecessary overhead in the codebase. By optimizing the way arrays are manipulated, this transformation helps reduce bundle size and improve performance.

### Before

```javascript
const array = [];
array.push(item);
```

### After

```javascript
const array = [item];
```