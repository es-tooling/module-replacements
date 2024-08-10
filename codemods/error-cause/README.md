# Error Cause Codemod

## Introduction

This codemod removes the import of the `error-cause/auto` package from the codebase. By eliminating this unnecessary dependency, it helps reduce bundle size and improve the performance of the application.

### Before

```javascript
import { createError } from 'error-cause/auto';

const error = createError('An error occurred');
```

### After

```javascript
const error = new Error('An error occurred');
```