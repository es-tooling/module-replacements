# Abort Controller Codemod

## Introduction

This codemod removes the unnecessary import of the `abort-controller` npm module, ensuring that the codebase relies on built-in browser functionality where applicable. This helps to decrease bundle size and improve performance by eliminating unused dependencies.

### Before

```javascript
import AbortController from 'abort-controller';

const controller = new AbortController();
const signal = controller.signal;
```

### After

```javascript
const controller = new AbortController();
const signal = controller.signal;
```