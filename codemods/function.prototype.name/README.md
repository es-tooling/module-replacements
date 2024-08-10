# Function.prototype.name Codemod

## Introduction

This codemod removes the reliance on the `function.prototype.name` npm module and replaces its usage with the native `name` property of functions. This helps in reducing unnecessary dependencies and improving performance by leveraging built-in JavaScript features.

### Before

```javascript
import functionName from 'function.prototype.name';

const myFunc = function () {};
const funcName = functionName(myFunc);
```

### After

```javascript
const myFunc = function () {};
const funcName = myFunc.name;
```