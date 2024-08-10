# Typed Array Byte Length Codemod

## Introduction

This codemod removes the dependency on the `typed-array-byte-length` module and replaces its usage with the native `byteLength` property from typed arrays. This reduces unnecessary dependencies, optimizes bundle size, and leverages built-in JavaScript features for better performance.

### Before

```javascript
import typedArrayByteLength from 'typed-array-byte-length';

const length = typedArrayByteLength(new Uint8Array([1, 2, 3]));
```

### After

```javascript
const length = new Uint8Array([1, 2, 3]).byteLength;
```