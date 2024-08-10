# Typed Array Length Codemod

## Introduction

This codemod removes the dependency on the `typed-array-length` package and replaces its usage with the native `length` property of typed arrays. The goal is to reduce unnecessary dependencies, minimize bundle size, and leverage built-in JavaScript features for improved performance.

### Before

```javascript
import typedArrayLength from 'typed-array-length';

const array = new Uint8Array(10);
const length = typedArrayLength(array);
```

### After

```javascript
const array = new Uint8Array(10);
const length = array.length;
```