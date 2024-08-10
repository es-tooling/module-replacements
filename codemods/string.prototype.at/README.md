# String.prototype.at Codemod

## Introduction

This codemod replaces the usage of the `string.prototype.at` method with a more performant implementation. It updates any instance of `at()` in string operations to ensure better compatibility and efficiency within the codebase.

### Before

```javascript
const myString = "Hello, World!";
const character = myString.at(1); // returns 'e'
```

### After

```javascript
const myString = "Hello, World!";
const character = myString[1]; // returns 'e'
```