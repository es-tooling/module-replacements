# is-travis Codemod

## Introduction

This codemod replaces the use of the `is-travis` npm module with a built-in JavaScript expression that checks the `process.env` for the `TRAVIS` environment variable. This change helps to reduce unnecessary dependencies and improve the performance of the codebase.

### Before

```javascript
import isTravis from 'is-travis';

const isRunningOnTravis = isTravis();
```

### After

```javascript
const isRunningOnTravis = 'TRAVIS' in process.env;
```