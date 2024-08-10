# String Prototype PadStart Codemod

## Introduction

This codemod replaces the outdated use of `string.prototype.padstart` with the modern `padStart` method. This update improves code readability and ensures the use of native JavaScript features, which can help reduce bundle size and enhance performance.

### Before

```javascript
const paddedString = '5'.prototype.padstart(3, '0');
```

### After

```javascript
const paddedString = '5'.padStart(3, '0');
```