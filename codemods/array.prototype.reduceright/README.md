# array.prototype.reduceright Codemod

## Introduction

This codemod replaces the usage of the `array.prototype.reduceright` npm module with the built-in `reduceRight` method available on JavaScript arrays. By eliminating this dependency, we reduce the overall bundle size and enhance the performance of the codebase.

### Before

```javascript
import arrayPrototypeReduceright from 'array.prototype.reduceright';

const result = arrayPrototypeReduceright([1, 2, 3], (acc, item) => acc + item);
```

### After

```javascript
const result = [1, 2, 3].reduceRight((acc, item) => acc + item);
```