# Array.prototype.with Codemod

## Introduction

This codemod replaces instances of `array.prototype.with` with the native JavaScript `with` method. This transformation helps to streamline array operations by utilizing built-in functionalities, reducing the need for external libraries, and ultimately improving the codebase's performance and reduce its bundle size.

### Before

```javascript
const myArray = [1, 2, 3];
const newArray = myArray.with(1, 4); // Using array.prototype.with
```

### After

```javascript
const myArray = [1, 2, 3];
const newArray = myArray.with(1, 4); // This is now a native method
```