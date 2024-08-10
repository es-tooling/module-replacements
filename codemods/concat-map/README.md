# concat-map Codemod

## Introduction

This codemod replaces the use of the `concat-map` method with the built-in `flatMap` array method. This transformation helps to reduce dependencies on external utility libraries by utilizing native JavaScript functionality, thereby improving performance and reducing bundle size.

### Before

```javascript
const result = array.concatMap(item => transform(item));
```

### After

```javascript
const result = array.flatMap(item => transform(item));
```