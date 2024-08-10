# has-symbols Codemod

## Introduction

This codemod removes the dependency on the `has-symbols` package and its submodule `has-symbols/shams` by replacing their usage with a boolean literal `true`. This simplifies the code and improves the performance by eliminating unnecessary dependencies.

### Before

```javascript
import hasSymbols from 'has-symbols';
import hasSymbolsShams from 'has-symbols/shams';

if (hasSymbols()) {
  // Some code here
}

if (hasSymbolsShams()) {
  // Some other code here
}
```

### After

```javascript
if (true) {
  // Some code here
}

if (true) {
  // Some other code here
}
```