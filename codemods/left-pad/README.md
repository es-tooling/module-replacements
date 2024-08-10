# Left Pad Codemod

## Introduction

This codemod removes the `left-pad` dependency from the codebase and replaces its usage with the built-in `String.prototype.padStart` method. This change helps reduce unnecessary dependencies and bundle size while leveraging native JavaScript features for improved performance.

### Before

```javascript
import leftPad from 'left-pad';

const paddedString = leftPad('text', 10);
```

### After

```javascript
const paddedString = 'text'.padStart(10);
```