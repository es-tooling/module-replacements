# Object.keys Codemod

## Introduction

This codemod removes the import of the `object.keys` module, which is often unnecessary since modern JavaScript provides a built-in `Object.keys` method. This transformation helps reduce bundle size by eliminating the dependency on an external module.

### Before

```javascript
import objectKeys from 'object.keys';

const keys = objectKeys(someObject);
```

### After

```javascript
const keys = Object.keys(someObject);
```