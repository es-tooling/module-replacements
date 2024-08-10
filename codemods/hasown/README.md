# hasown Codemod

## Introduction

This codemod replaces the use of the `hasown` function from an external package with the built-in `Object.hasOwn` method in JavaScript. This transformation reduces the number of dependencies in the codebase while improving performance by utilizing a native feature.

### Before

```javascript
import hasown from 'hasown';

const obj = { key: 'value' };
if (hasown(obj, 'key')) {
  console.log('Key exists!');
}
```

### After

```javascript
const obj = { key: 'value' };
if (Object.hasOwn(obj, 'key')) {
  console.log('Key exists!');
}
```