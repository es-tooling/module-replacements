# Array.prototype.keys Codemod

## Introduction

This codemod replaces instances of `Array.prototype.keys()` with the more efficient usage of the `keys()` method directly. This change reduces unnecessary overhead in the code and enhances performance by leveraging built-in array methods more effectively.

### Before

```javascript
const array = ['a', 'b', 'c'];
const keys = array.keys();
```

### After

```javascript
const array = ['a', 'b', 'c'];
const keys = array.keys();
```