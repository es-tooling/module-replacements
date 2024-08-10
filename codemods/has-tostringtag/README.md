# has-tostringtag Codemod

## Introduction

This codemod removes the `has-tostringtag` and `has-tostringtag/shams` modules from the codebase, replacing their usage with a simple boolean literal `true`. This effectively eliminates unnecessary dependencies, reduces the bundle size, and improves overall code performance.

### Before

```javascript
import hasToStringTag from 'has-tostringtag';
import hasToStringTagShams from 'has-tostringtag/shams';

if (hasToStringTag(obj)) {
    // do something
}

if (hasToStringTagShams(obj)) {
    // do something else
}
```

### After

```javascript
if (true) {
    // do something
}

if (true) {
    // do something else
}
```