# es-define-property Codemod

## Introduction

This codemod replaces the use of the `es-define-property` npm module with the built-in `Object.defineProperty` method from JavaScript. The goal is to reduce the number of dependencies in the codebase, thereby optimizing bundle size and improving overall performance.

### Before

```javascript
import defineProperty from 'es-define-property';

defineProperty(obj, 'key', {
    value: 'value',
    writable: true,
});
```

### After

```javascript
Object.defineProperty(obj, 'key', {
    value: 'value',
    writable: true,
});
```