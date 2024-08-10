# Object Keys Codemod

## Introduction

This codemod replaces the usage of the `object-keys` npm module with the native `Object.keys` method. It removes unnecessary dependencies from the codebase, which helps to reduce bundle size and improve performance.

### Before

```javascript
import objectKeys from 'object-keys';

const keys = objectKeys(obj);
```

### After

```javascript
const keys = Object.keys(obj);
```