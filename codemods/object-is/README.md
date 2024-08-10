# Object Is Codemod

## Introduction

This codemod replaces usages of the `object-is` npm module with the built-in `Object.is` method. By doing so, it reduces dependencies and leverages native JavaScript functionality, which can lead to improved performance and reduced bundle size.

### Before

```ts
import objectIs from 'object-is';

const result = objectIs(value1, value2);
```

### After

```ts
const result = Object.is(value1, value2);
```