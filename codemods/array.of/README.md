# Array.of Codemod

## Introduction

This codemod replaces instances of the `array.of` npm package with the built-in `Array.of` method. By doing this, it eliminates an unnecessary dependency, thereby reducing the bundle size and improving the performance of the codebase.

### Before

```javascript
import array from 'array.of';

const arr = array(1, 2, 3);
```

### After

```javascript
const arr = Array.of(1, 2, 3);
```