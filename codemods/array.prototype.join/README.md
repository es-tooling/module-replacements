# Array.prototype.join Codemod

## Introduction

This codemod replaces usages of the `Array.prototype.join` method imported from utility libraries with the built-in `Array.prototype.join` method. This helps to reduce the number of dependencies in the codebase while leveraging native JavaScript functionality.

### Before

```javascript
import { join } from 'some-array-utility';

const array = ['Hello', 'World'];
const result = join(array, ' ');
```

### After

```javascript
const array = ['Hello', 'World'];
const result = array.join(' ');
```