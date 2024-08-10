# is-number Codemod

## Introduction

This codemod removes the dependency on the `is-number` npm module and replaces its usage with a built-in check for determining if a value is a number. This not only reduces unnecessary dependencies but also enhances performance by using native JavaScript features.

### Before

```javascript
import isNumber from 'is-number';

const value = '5';

if (isNumber(value)) {
    console.log(`${value} is a number.`);
}
```

### After

```javascript
const value = '5';

if (typeof value === 'number' || (typeof value === 'string' && Number.isFinite(+value))) {
    console.log(`${value} is a number.`);
}
```