# Number IsInteger Codemod

## Introduction

This codemod removes the import of the `number.isinteger` module, replacing its usage with native JavaScript functionality. The goal is to reduce unnecessary dependencies and improve the overall performance of the codebase by leveraging built-in capabilities.

### Before

```javascript
import number from 'number.isinteger';

const isInteger = number.isInteger(42);
```

### After

```javascript
const isInteger = Number.isInteger(42);
```