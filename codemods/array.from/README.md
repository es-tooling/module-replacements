# Codemod: Replace `Array.from` Import with Built-in ES Feature

## Introduction

This codemod transforms instances of `array.from` by replacing them with the built-in `Array.from` method. This helps to eliminate the dependency on the `array.from` package, reducing bundle size and improving performance by utilizing native JavaScript functionality.

### Before

```javascript
import array from 'array.from';

const result = array.from(someIterable);
```

### After

```javascript
const result = Array.from(someIterable);
```