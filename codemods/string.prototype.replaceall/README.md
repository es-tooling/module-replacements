# String.prototype.replaceAll Codemod

## Introduction

This codemod transforms instances of `string.prototype.replaceall` to the built-in method `replaceAll`. This replacement helps in removing unnecessary dependencies on external libraries for string manipulation, thereby reducing the bundle size and improving code performance.

### Before

```javascript
const updatedString = myString.replaceall('foo', 'bar');
```

### After

```javascript
const updatedString = myString.replaceAll('foo', 'bar');
```