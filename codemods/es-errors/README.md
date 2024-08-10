# es-errors Codemod

## Introduction

This codemod replaces the use of the `es-errors` module and its specific error constructors with built-in JavaScript error types. This change reduces unnecessary dependencies and leads to a more lightweight codebase while ensuring that error handling remains efficient and standard.

### Before

```javascript
import { Error, EvalError, RangeError, ReferenceError, SyntaxError, TypeError, URIError } from 'es-errors';

const evalError = new EvalError('This is an evaluation error');
const rangeError = new RangeError('This is a range error');
```

### After

```javascript
const evalError = new EvalError('This is an evaluation error');
const rangeError = new RangeError('This is a range error');
```