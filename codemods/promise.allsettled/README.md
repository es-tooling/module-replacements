# Promise.allsettled Codemod

## Introduction

This codemod replaces the usage of the `promise.allsettled` npm module with the built-in `Promise.allSettled` method. This transformation helps reduce unnecessary dependencies while improving the performance and readability of the code by leveraging native JavaScript features.

### Before

```javascript
import promise from 'promise.allsettled';

promise.allSettled([promise1, promise2]).then(results => {
  // handle results
});
```

### After

```javascript
Promise.allSettled([promise1, promise2]).then(results => {
  // handle results
});
```