# is-number-object Codemod

## Introduction

This codemod replaces the usage of the `is-number-object` npm module with a built-in JavaScript approach. It transforms the code to use `Object.prototype.toString.call` for checking if a value is a number, removing the dependency and enhancing performance by leveraging native capabilities.

### Before

```javascript
import isNumber from 'is-number-object';

const result = isNumber(value);
```

### After

```javascript
const result = Object.prototype.toString.call(value) === '[object Number]';
```