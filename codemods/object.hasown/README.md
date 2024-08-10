# Object.hasOwn Codemod

## Introduction

This codemod replaces instances of `object.hasown` with the built-in `Object.hasOwn` method. This not only reduces dependencies by removing unnecessary imports but also leverages modern JavaScript features for better performance and simpler code.

### Before

```javascript
import { hasown as objectHasOwn } from 'object.hasown';

const hasOwnProperty = objectHasOwn(obj, 'propertyName');
```

### After

```javascript
const hasOwnProperty = Object.hasOwn(obj, 'propertyName');
```