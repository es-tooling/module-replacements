# es-set-tostringtag Codemod

## Introduction

This codemod removes the dependency on the `es-set-tostringtag` package and replaces its usage with the native `Object.defineProperty` and `Symbol.toStringTag`. By doing so, it eliminates unnecessary dependencies and leverages built-in ES features, enhancing performance and reducing bundle size.

### Before

```javascript
import setToStringTag from 'es-set-tostringtag';

const myObject = {};
setToStringTag(myObject, 'MyObject', { force: true });
```

### After

```javascript
const myObject = {};
Object.defineProperty(myObject, Symbol.toStringTag, {
  configurable: true,
  enumerable: false,
  value: 'MyObject',
  writable: false,
});
```