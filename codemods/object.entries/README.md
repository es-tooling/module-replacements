# Object.entries Codemod

## Introduction

This codemod replaces occurrences of the `object.entries` function from a third-party module with the built-in `Object.entries` method available in JavaScript. This improves performance and reduces the size of the dependencies in the codebase by utilizing native functionality.

### Before

```javascript
import { entries } from 'object.entries';

const array = entries(someObject);
```

### After

```javascript
const array = Object.entries(someObject);
```