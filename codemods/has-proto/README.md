# has-proto Codemod

## Introduction

This codemod eliminates the usage of the `has-proto` npm module by replacing its call expressions with a direct boolean literal `true`. This helps to reduce unnecessary dependencies and improve the performance of the codebase.

### Before

```javascript
import hasProto from 'has-proto';

const result = hasProto(obj);
```

### After

```javascript
const result = true;
```