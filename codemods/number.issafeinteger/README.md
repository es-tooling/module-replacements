# Remove Unnecessary `number.issafeinteger` Import Codemod

## Introduction

This codemod removes the import of the `number.issafeinteger` module from the codebase as it is no longer necessary. This helps reduce unnecessary dependencies and optimize the bundle size.

### Before

```javascript
import isSafeInteger from 'number.issafeinteger';

if (isSafeInteger(value)) {
    // do something with the safe integer
}
```

### After

```javascript
if (Number.isSafeInteger(value)) {
    // do something with the safe integer
}
```