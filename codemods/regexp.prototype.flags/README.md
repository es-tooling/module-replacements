# RegExp.prototype.flags Codemod

## Introduction

This codemod removes the dependency on the `regexp.prototype.flags` package by eliminating unnecessary import statements and replacing usages of the package with native JavaScript functionality. It not only reduces the bundle size but also enhances performance by relying on built-in language features.

### Before

```javascript
import flags from 'regexp.prototype.flags';

const flagValue = flags(someRegExp);
```

### After

```javascript
const flagValue = someRegExp.flags;
```