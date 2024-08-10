# Codemod: Replace `String.prototype.trimRight` with `String.prototype.trimEnd`

## Introduction

This codemod replaces instances of `String.prototype.trimRight` with the built-in `String.prototype.trimEnd` method. This change not only reduces unnecessary dependencies by utilizing modern JavaScript features but also improves performance by leveraging native functionalities.

### Before

```javascript
const myString = "   Hello, World!   ";
const trimmedString = myString.trimRight();
```

### After

```javascript
const myString = "   Hello, World!   ";
const trimmedString = myString.trimEnd();
```