# Object.getPrototypeOf Codemod

## Introduction

This codemod replaces the use of the `object.getprototypeof` npm module with the built-in `Object.getPrototypeOf` method. This change helps to eliminate unnecessary dependencies, reducing the bundle size and improving the performance of the codebase.

### Before

```javascript
import object from 'object.getprototypeof';

const proto = object.getPrototypeOf(someObject);
```

### After

```javascript
const proto = Object.getPrototypeOf(someObject);
```