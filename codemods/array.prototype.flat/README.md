# Array.prototype.flat Codemod

## Introduction

This codemod replaces instances of the `Array.prototype.flatten` method with the native `Array.prototype.flat` method. The goal is to utilize built-in JavaScript features, reducing dependencies and improving performance in the codebase.

### Before

```javascript
const flattenedArray = array.flatten();
```

### After

```javascript
const flattenedArray = array.flat();
```