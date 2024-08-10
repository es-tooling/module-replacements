# Reflect.ownKeys Codemod

## Introduction

This codemod replaces the usage of `Reflect.ownKeys` imported from the `reflect.ownkeys` module with the built-in `Reflect.ownKeys` method. This change reduces external dependencies and simplifies the codebase while maintaining its functionality.

### Before

```javascript
import reflectOwnKeys from 'reflect.ownkeys';

const keys = reflectOwnKeys(obj);
```

### After

```javascript
const keys = Reflect.ownKeys(obj);
```