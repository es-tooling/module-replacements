# Array.prototype.toReversed Codemod

## Introduction

This codemod replaces the use of the outdated `Array.prototype.toreversed` method with the modern `Array.prototype.toReversed` method. By making this change, the codemod aims to enhance code readability and take advantage of native JavaScript array methods, reducing reliance on custom implementations.

### Before

```javascript
const reversedArray = myArray.toreversed();
```

### After

```javascript
const reversedArray = myArray.toReversed();
```