# parseint Codemod

## Introduction

This codemod replaces instances of the `parseint` function with the built-in `parseInt` function. This transformation helps to standardize the usage of JavaScript's built-in features, reducing unnecessary custom definitions and improving code clarity.

### Before

```javascript
import { parseint } from 'some-module';

const number = parseint('123');
```

### After

```javascript
const number = parseInt('123');
```