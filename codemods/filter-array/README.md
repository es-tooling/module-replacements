# Filter Array Codemod

## Introduction

This codemod transforms instances of using a custom `filterArray` function into the built-in `Array.prototype.filter` method. This change reduces dependency on custom utility functions, leading to a more standardized, efficient codebase and decreased bundle size.

### Before

```javascript
const filteredItems = filterArray(items, item => item.isActive);
```

### After

```javascript
const filteredItems = items.filter(item => item.isActive);
```