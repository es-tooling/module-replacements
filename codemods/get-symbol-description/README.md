# Get Symbol Description Codemod

## Introduction

This codemod replaces the usage of the `get-symbol-description` function with direct access to the `description` property of the relevant object. This transformation reduces unnecessary dependency on the `get-symbol-description` function, leading to a more streamlined codebase.

### Before

```javascript
import { getSymbolDescription } from 'some-module';

const symbolDesc = getSymbolDescription(someObject);
```

### After

```javascript
const symbolDesc = someObject.description;
```