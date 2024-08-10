# is-even Codemod

## Introduction

This codemod removes the dependency on the `is-even` npm module by replacing its usage with a native JavaScript expression that checks if a number is even. This change optimizes performance, reduces bundle size, and eliminates unnecessary dependencies.

### Before

```ts
import isEven from 'is-even';

const result = isEven(4);
```

### After

```ts
const result = (4 % 2) === 0;
```