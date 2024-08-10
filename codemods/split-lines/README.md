# Split Lines Codemod

## Introduction

This codemod replaces the usage of the `split-lines` npm module with native JavaScript string methods. The goal is to eliminate an unnecessary dependency, optimize the codebase, and enhance performance by utilizing built-in ES features.

### Before

```javascript
import splitLines from 'split-lines';

const lines = splitLines(someString, { preserveNewlines: true });
```

### After

```javascript
const lines = someString.split(/(\r?\n)/).reduce((acc, part, index, array) => {
    if (index % 2 === 0) {
        acc.push(part + (array[index + 1] || ''));
    }
    return acc;
}, []);
```