# String.prototype.padLeft Codemod

## Introduction

This codemod replaces uses of the `String.prototype.padLeft` method with the built-in `String.prototype.padStart` method. The goal is to eliminate the reliance on the less common `padLeft` method, reducing unnecessary dependencies and simplifying the codebase.

### Before

```javascript
const paddedString = myString.padLeft(5, '0');
```

### After

```javascript
const paddedString = myString.padStart(5, '0');
```