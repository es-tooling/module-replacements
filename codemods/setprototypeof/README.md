# setprototypeof Codemod

## Introduction

This codemod replaces the usage of the `setprototypeof` npm module with the built-in `Object.setPrototypeOf` method. This transformation helps to eliminate unnecessary dependencies, reduce bundle size, and improve performance by leveraging native JavaScript functionality.

### Before

```javascript
import setprototypeof from 'setprototypeof';

const obj = {};
setprototypeof(obj, prototype);
```

### After

```javascript
const obj = {};
Object.setPrototypeOf(obj, prototype);
```