# array.prototype.at Codemod

## Introduction

This codemod replaces instances of the deprecated or inefficient usage of `array.prototype.at` with the native `Array.prototype.at` method. The goal is to leverage built-in ES features, thereby reducing unnecessary dependencies, and improving performance and code clarity.

### Before

```javascript
import { at } from 'some-array-library';

const firstElement = at(myArray, 0);
const lastElement = at(myArray, -1);
```

### After

```javascript
const firstElement = myArray.at(0);
const lastElement = myArray.at(-1);
```