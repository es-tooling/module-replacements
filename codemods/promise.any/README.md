# promise.any Codemod

## Introduction

This codemod replaces usage of the `promise.any` package with the built-in `Promise.any` method, which is part of the ECMAScript specification. By using the native implementation, this codemod helps to eliminate an unnecessary dependency, reducing the bundle size and enhancing performance.

### Before

```javascript
import promiseAny from 'promise.any';

const result = promiseAny([promise1, promise2]).then(value => {
    console.log(value);
});
```

### After

```javascript
const result = Promise.any([promise1, promise2]).then(value => {
    console.log(value);
});
```