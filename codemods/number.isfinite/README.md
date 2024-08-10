# Number IsFinite Codemod

## Introduction

This codemod removes the import of the `number.isfinite` npm module and replaces its usage with the native `Number.isFinite` method. The primary goal is to reduce unnecessary dependencies, improve performance, and leverage built-in JavaScript features.

### Before

```javascript
import isFinite from 'number.isfinite';

const value = 42;
if (isFinite(value)) {
  console.log('Value is finite');
}
```

### After

```javascript
const value = 42;
if (Number.isFinite(value)) {
  console.log('Value is finite');
}
```