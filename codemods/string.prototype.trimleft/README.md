# string.prototype.trimleft Codemod

## Introduction

This codemod replaces the usage of the deprecated `String.prototype.trimleft` method with its modern alternative, `String.prototype.trimStart`. This transformation not only helps in maintaining compatibility with up-to-date JavaScript standards but also reduces the risk of issues arising from the use of obsolete methods.

### Before

```javascript
const myString = "   Hello, World!   ";
const trimmedString = myString.trimleft();
```

### After

```javascript
const myString = "   Hello, World!   ";
const trimmedString = myString.trimStart();
```