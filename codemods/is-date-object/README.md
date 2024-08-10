# is-date-object Codemod

## Introduction

This codemod replaces the usage of the `is-date-object` npm module with a built-in ES feature for determining if an object is a Date. It leverages `Object.prototype.toString.call` for this check, thereby reducing dependencies and improving performance.

### Before

```ts
import isDate from 'is-date-object';

const dateCheck = isDate(someValue);
```

### After

```ts
const dateCheck = Object.prototype.toString.call(someValue) === '[object Date]';
```