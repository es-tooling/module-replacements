# array-buffer-byte-length Codemod

## Introduction

This codemod replaces the use of the `array-buffer-byte-length` library with the native `byteLength` property of `ArrayBuffer` instances. This transformation helps reduce dependencies and enhances performance by leveraging built-in JavaScript features.

### Before

```ts
import arrayBufferByteLength from 'array-buffer-byte-length';

const buffer = new ArrayBuffer(10);
const length = arrayBufferByteLength(buffer);
```

### After

```ts
const buffer = new ArrayBuffer(10);
const length = buffer.byteLength;
```