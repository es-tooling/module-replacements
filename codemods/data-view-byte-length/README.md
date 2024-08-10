# data-view-byte-length Codemod

## Introduction

This codemod replaces instances of the `data-view-byte-length` package with the built-in `DataView.byteLength` property. The goal is to eliminate unnecessary dependencies, thereby reducing the bundle size and improving the performance of the codebase.

### Before

```javascript
import byteLength from 'data-view-byte-length';

const buffer = new ArrayBuffer(8);
const view = new DataView(buffer);
const length = byteLength(view);
```

### After

```javascript
const buffer = new ArrayBuffer(8);
const view = new DataView(buffer);
const length = view.byteLength;
```