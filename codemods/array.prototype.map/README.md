# array.prototype.map Codemod

## Introduction

This codemod transforms usages of the `Array.prototype.map` method to ensure that it correctly applies to array instances. The goal is to standardize array handling in the codebase, improving readability and performance by leveraging built-in ES features.

### Before

```javascript
const results = dirtyArray.map((item) => item.value);
```

### After

```javascript
const results = Array.prototype.map.call(dirtyArray, (item) => item.value);
```