# String.prototype.padend to padEnd Codemod

## Introduction

This codemod replaces the usage of the non-standard `String.prototype.padend` method with the standard `String.prototype.padEnd` method. This change helps to ensure compatibility with more environments and improves maintainability by using built-in JavaScript functionality.

### Before

```javascript
const str = 'Hello';
const padded = str.padend(10, '!');
```

### After

```javascript
const str = 'Hello';
const padded = str.padEnd(10, '!');
```