# String.prototype.lastindexof to lastIndexOf Codemod

## Introduction

This codemod transforms the usage of the deprecated `string.prototype.lastindexof` method to the standardized `lastIndexOf` method. This change not only ensures better compatibility with modern JavaScript standards but also helps to optimize the codebase by reducing unnecessary method calls.

### Before

```javascript
const str = 'Hello, world!';
const index = str.lastindexof('o');
```

### After

```javascript
const str = 'Hello, world!';
const index = str.lastIndexOf('o');
```