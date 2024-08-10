# Typed Array Byte Offset Codemod

## Introduction

This codemod replaces the `typed-array-byte-offset` npm module with built-in ES features. It eliminates the dependency by transforming calls to the module into direct usage of the `byteOffset` property from typed array instances. The ultimate goal is to reduce unnecessary dependencies and improve performance within the codebase.

### Before

```javascript
import byteOffset from 'typed-array-byte-offset';

const offset = byteOffset(new Uint8Array(buffer));
```

### After

```javascript
const offset = new Uint8Array(buffer).byteOffset;
```