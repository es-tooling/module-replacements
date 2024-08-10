# Object.fromEntries Codemod

## Introduction

This codemod replaces calls to the `Object.fromentries` function with the standard built-in `Object.fromEntries` method. This not only simplifies the code but also reduces dependency on any custom or unnecessary libraries, contributing to a smaller bundle size and improved performance.

### Before

```javascript
import { fromentries } from 'object.fromentries';

const obj = fromentries([['key1', 'value1'], ['key2', 'value2']]);
```

### After

```javascript
const obj = Object.fromEntries([['key1', 'value1'], ['key2', 'value2']]);
```