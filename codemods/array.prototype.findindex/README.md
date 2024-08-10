# array.prototype.findindex Codemod

## Introduction

This codemod replaces instances of `array.prototype.findindex` with the built-in `Array.prototype.findIndex` method. By making this change, we eliminate the need for an external dependency, which helps reduce bundle size and improves performance.

### Before

```javascript
const index = array.prototype.findindex(array, element);
```

### After

```javascript
const index = array.findIndex(element);
```