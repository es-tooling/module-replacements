# is-odd Codemod

## Introduction

This codemod replaces the use of the `is-odd` npm module with a more efficient built-in JavaScript expression. It transforms function calls to `is-odd` into a binary expression that checks if a number is odd, thus reducing unnecessary dependencies and improving performance.

### Before

```javascript
import { isOdd } from 'is-odd';

const result = isOdd(5);
```

### After

```javascript
const result = (5 % 2) !== 0;
```