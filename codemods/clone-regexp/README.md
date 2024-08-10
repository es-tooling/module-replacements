# Clone RegExp Codemod

## Introduction

This codemod removes the use of the `clone-regexp` npm module by replacing its functionality with the built-in `RegExp` constructor. This helps to reduce unnecessary dependencies and improve the performance of the codebase.

### Before

```javascript
import cloneRegexp from 'clone-regexp';

const originalRegex = /test/gi;
const clonedRegex = cloneRegexp(originalRegex, { flag: 'i' });
```

### After

```javascript
const originalRegex = /test/gi;
const clonedRegex = new RegExp(originalRegex.source, originalRegex.flags);
```

**Note**: If options were being passed to `clone-regexp`, please modify the new regular expression accordingly, as indicated by the warning in the console.