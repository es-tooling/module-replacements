# Deep Equal Codemod

## Introduction

This codemod replaces instances of the `deep-equal` npm module with the `dequal` package. This change reduces unnecessary dependencies while maintaining the functionality of deep equality checks in the codebase.

### Before

```javascript
import deepEqual from 'deep-equal';

const isEqual = deepEqual(obj1, obj2);
```

### After

```javascript
import { dequal } from 'dequal';

const isEqual = dequal(obj1, obj2);
```