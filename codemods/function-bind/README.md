# Function Bind Codemod

## Introduction

This codemod removes the dependency on the `function-bind` module by eliminating its import statement from the codebase. This change enhances performance by reducing unnecessary dependencies.

### Before

```javascript
import functionBind from 'function-bind';

const boundFunction = functionBind.call(context, functionName);
```

### After

```javascript
const boundFunction = functionName.bind(context);
```