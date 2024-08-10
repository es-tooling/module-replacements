# arraybuffer.prototype.slice Codemod

## Introduction

This codemod replaces the usage of the `arraybuffer.prototype.slice` method by transforming instances that call this method into direct calls to the native `slice` method available on `ArrayBuffer` instances. This helps to eliminate unnecessary dependencies while improving the performance of the codebase by leveraging built-in JavaScript features.

### Before

```javascript
import arraybufferPrototypeSlice from 'arraybuffer.prototype.slice';

const slicedBuffer = arraybufferPrototypeSlice(myArrayBuffer, start, end);
```

### After

```javascript
const slicedBuffer = myArrayBuffer.slice(start, end);
```