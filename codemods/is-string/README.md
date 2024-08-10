# is-string Codemod

## Introduction

This codemod removes the dependency on the `is-string` npm package by replacing its usage with a built-in JavaScript feature. It transforms all calls to `isString` into a usage of `Object.prototype.toString.call`, which improves performance and reduces the overall bundle size by eliminating unnecessary dependencies.

### Before

```javascript
import isString from 'is-string';

if (isString(value)) {
  // Do something
}
```

### After

```javascript
if (Object.prototype.toString.call(value) === '[object String]') {
  // Do something
}
```