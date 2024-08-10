# Codemod for Replacing `string.prototype.matchall`

## Introduction

This codemod replaces calls to the `string.prototype.matchall` npm package with the built-in `String.prototype.matchAll` method. The goal is to eliminate the dependency on the `string.prototype.matchall` package, thereby reducing bundle size and enhancing performance.

### Before

```javascript
import matchAll from 'string.prototype.matchall';

const result = matchAll("test string", /test/g);
```

### After

```javascript
const result = "test string".matchAll(/test/g);
```