# Pad Left Codemod

## Introduction

This codemod replaces the use of the `pad-left` npm module with the built-in JavaScript `String.prototype.padStart` method. By removing the import of the external package and utilizing native functionality, this transformation reduces unnecessary dependencies and improves the performance of the codebase.

### Before

```javascript
import padLeft from 'pad-left';

const paddedString = padLeft('test', 5, '0');
```

### After

```javascript
const paddedString = 'test'.toString().padStart(5, '0');
```