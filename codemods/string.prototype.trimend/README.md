# String.prototype.trimend Codemod

## Introduction

This codemod transforms instances of `string.prototype.trimend` into the more standardized `String.prototype.trimEnd`. This change not only aligns the code with current JavaScript standards but also facilitates better performance by using built-in methods without the need for additional dependencies.

### Before

```javascript
const result = myString.trimend();
```

### After

```javascript
const result = myString.trimEnd();
```