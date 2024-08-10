# Array.prototype.copyWithin Codemod

## Introduction

This codemod replaces the usage of the `Array.prototype.copyWithin` method with the `copyWithin` method without the need for the `Array` prototype. It aims to streamline the code by ensuring that the native method is used directly, which can enhance performance and reduce unnecessary abstraction.

### Before

```javascript
const array = [1, 2, 3, 4, 5];
array.copyWithin(0, 3); // This is using the prototype method
```

### After

```javascript
const array = [1, 2, 3, 4, 5];
array.copyWithin(0, 3); // This is using the native method, directly through the array
```