# Number.parseInt Codemod

## Introduction

This codemod replaces instances of the `Number.parseInt` import from an external module with the built-in JavaScript `Number.parseInt` method. This change helps to reduce unnecessary dependencies and improves code performance by utilizing native functionality.

### Before

```javascript
import { parseInt } from 'number.parseint';

const value = parseInt('42', 10);
```

### After

```javascript
const value = Number.parseInt('42', 10);
```