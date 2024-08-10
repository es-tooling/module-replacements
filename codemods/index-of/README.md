# Index Of Codemod

## Introduction

This codemod replaces instances of the `index-of` array method with the built-in `indexOf` method. By utilizing native JavaScript features, this transformation reduces dependency on external libraries, improving performance and bundle size.

### Before

```javascript
import indexOf from 'index-of';

const items = [1, 2, 3];
const index = indexOf(items, 2);
```

### After

```javascript
const items = [1, 2, 3];
const index = items.indexOf(2);
```