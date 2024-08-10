# is-windows Codemod

## Introduction

This codemod removes the dependency on the `is-windows` npm package by replacing its usage with a built-in Node.js feature. It converts calls to `is-windows()` into a direct comparison of `process.platform` with `'win32'`, reducing unnecessary dependencies and improving performance.

### Before

```javascript
import isWindows from 'is-windows';

if (isWindows()) {
    console.log('Running on Windows');
}
```

### After

```javascript
if (process.platform === 'win32') {
    console.log('Running on Windows');
}
```