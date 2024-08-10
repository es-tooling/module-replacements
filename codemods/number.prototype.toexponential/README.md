# number.prototype.toexponential Codemod

## Introduction

This codemod removes the import statement for `number.prototype.toexponential`, which is an unnecessary dependency in the codebase. By utilizing built-in JavaScript functionalities instead, this codemod helps to decrease bundle size and improve code performance.

### Before

```javascript
import 'number.prototype.toexponential';

const num = 5;
const expNum = num.toExponential(2);
```

### After

```javascript
const num = 5;
const expNum = num.toExponential(2);
```