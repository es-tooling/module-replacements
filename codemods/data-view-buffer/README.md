# Data View Buffer Codemod

## Introduction

This codemod replaces the usage of the `data-view-buffer` package with the built-in `DataView` API. It removes the import statement for the external dependency and transforms the corresponding instance property calls to directly utilize the native `DataView` feature, enhancing performance and reducing bundle size.

### Before

```javascript
import DataViewBuffer from 'data-view-buffer';

const buffer = DataViewBuffer(data);
```

### After

```javascript
const buffer = new DataView(data).buffer;
```