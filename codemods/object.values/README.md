# Object.values Codemod

## Introduction

This codemod replaces the usage of the `object.values` package by transforming calls to it into the built-in `Object.values` method. This update helps reduce unnecessary dependencies and leverages native JavaScript features, thereby improving the performance of the codebase.

### Before

```javascript
import objectValues from 'object.values';

const valuesArray = objectValues(someObject);
```

### After

```javascript
const valuesArray = Object.values(someObject);
```