# Promise.prototype Finally Codemod

## Introduction

This codemod replaces the usage of the `promise.prototype.finally` polyfill with the native `finally` method provided by JavaScript's Promise API. This update not only aligns the codebase with modern JavaScript standards but also helps in reducing unnecessary dependencies, leading to a smaller bundle size and improved performance.

### Before

```javascript
import promiseFinally from 'promise.prototype.finally';

promiseFinally();

const result = promiseFinally(promise, callback);
```

### After

```javascript
const result = promise.finally(callback);
```