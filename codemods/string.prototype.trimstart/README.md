# string.prototype.trimstart Codemod

## Introduction

This codemod replaces occurrences of the non-standard `string.prototype.trimstart` method with the standardized `String.prototype.trimStart` method. This update improves code consistency and reduces reliance on non-standard features, enhancing overall code quality.

### Before

```javascript
const str = '   hello world   ';
const trimmed = str.trimstart();
```

### After

```javascript
const str = '   hello world   ';
const trimmed = str.trimStart();
```