# Remove `is-whitespace` Dependency Codemod

## Introduction

This codemod removes the `is-whitespace` npm module from the codebase and replaces its usage with a built-in JavaScript feature. The goal is to reduce unnecessary dependencies, resulting in a smaller bundle size and improved performance.

### Before

```javascript
import isWhitespace from 'is-whitespace';

const isStringEmpty = (str) => isWhitespace(str);
```

### After

```javascript
const isStringEmpty = (str) => str.trim() === '';
```