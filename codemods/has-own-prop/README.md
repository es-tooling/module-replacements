# has-own-prop Codemod

## Introduction

This codemod replaces the usage of the `has-own-prop` npm module with the built-in `Object.hasOwn` method. This change aims to reduce unnecessary dependencies and improve performance by utilizing native JavaScript features.

### Before

```javascript
import hasOwnProp from 'has-own-prop';

const obj = { key: 'value' };

if (hasOwnProp(obj, 'key')) {
    console.log('Key exists!');
}
```

### After

```javascript
const obj = { key: 'value' };

if (Object.hasOwn(obj, 'key')) {
    console.log('Key exists!');
}
```