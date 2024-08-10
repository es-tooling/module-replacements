# Reflect.getPrototypeOf Codemod

## Introduction

This codemod replaces calls to the `reflect.getprototypeof` module with the built-in `Reflect.getPrototypeOf` function. This change helps to eliminate an unnecessary dependency, thereby reducing bundle size and improving code performance.

### Before

```javascript
import reflect from 'reflect.getprototypeof';

const proto = reflect.getprototypeof(obj);
```

### After

```javascript
const proto = Reflect.getPrototypeOf(obj);
```