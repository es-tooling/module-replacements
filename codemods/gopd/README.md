# gopd Codemod

## Introduction

This codemod replaces instances of the `gopd` library with native JavaScript functionality. It searches for `typeof` checks and calls made to `gopd` and transforms them into equivalent `Object.getOwnPropertyDescriptor` calls. This transformation helps in reducing dependencies, improving the performance of the codebase, and minimizing bundle sizes.

### Before

```javascript
import gopd from 'gopd';

const type = typeof gopd(someObject, 'propertyName');
const descriptor = gopd(someObject, 'propertyName');
```

### After

```javascript
const type = typeof Object.getOwnPropertyDescriptor(someObject, 'propertyName');
const descriptor = Object.getOwnPropertyDescriptor(someObject, 'propertyName');
```