# String.prototype.split Codemod

## Introduction

This codemod replaces the use of the `split` method from external libraries with the built-in `String.prototype.split` method. This improves performance by reducing unnecessary dependencies, thereby minimizing the bundle size and enhancing the overall efficiency of the codebase.

### Before

```javascript
import split from 'some-string-split-library';

const result = split('apple,banana,cherry', ',');
```

### After

```javascript
const result = 'apple,banana,cherry'.split(',');
```