# is-builtin-module Codemod

## Introduction

This codemod replaces the usage of the `is-builtin-module` package with the built-in `isBuiltin` function from the `node:module` module. By doing this, it eliminates the need for an external dependency, thereby reducing the overall bundle size and improving performance.

### Before

```javascript
import isBuiltin from 'is-builtin-module';

const check = isBuiltin('fs');
```

### After

```javascript
import { isBuiltin } from 'node:module';

const check = isBuiltin('fs');
```