# Functions Have Names Codemod

## Introduction

This codemod removes the `functions-have-names` package from the codebase and replaces its usage with a simple boolean literal. The goal is to reduce dependencies, enhance performance, and simplify the code.

### Before

```javascript
import functionsHaveNames from 'functions-have-names';

const result = functionsHaveNames();
```

### After

```javascript
const result = true;
```