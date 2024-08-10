# Last Index Of Codemod

## Introduction

This codemod replaces the use of a custom `last-index-of` module with the built-in `Array.prototype.lastIndexOf` method. This transformation simplifies the codebase by removing the dependency on an external module and utilizes a native JavaScript feature for improved performance.

### Before

```javascript
import lastIndexOf from 'last-index-of';

const index = lastIndexOf(array, value);
```

### After

```javascript
const index = array.lastIndexOf(value);
```