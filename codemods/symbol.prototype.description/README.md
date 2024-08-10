# Symbol Prototype Description Codemod

## Introduction

This codemod removes the dependency on the `symbol.prototype.description` module and replaces its usage with the built-in ES feature. It eliminates the need for additional imports, reduces bundle size, and enhances code performance by directly accessing the `description` property of `Symbol` instances.

### Before

```javascript
import description from 'symbol.prototype.description';

const mySymbol = description(Symbol('foo'));
console.log(mySymbol); // Output: 'foo'
```

### After

```javascript
const mySymbol = Symbol('foo').description;
console.log(mySymbol); // Output: 'foo'
```