# es-aggregate-error Codemod

## Introduction

This codemod replaces instances of the `es-aggregate-error` package with the built-in `AggregateError` feature provided by modern JavaScript. It removes the import statement for `es-aggregate-error` and updates any usages where `AggregateError` is instantiated.

### Before

```javascript
import AggregateError from 'es-aggregate-error';

const error = new AggregateError([new Error('Error 1'), new Error('Error 2')]);
```

### After

```javascript
const error = new AggregateError([new Error('Error 1'), new Error('Error 2')]);
```