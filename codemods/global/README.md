# Global Codemod

## Introduction

This codemod replaces the usage of `global`, `global/document`, and `global/window` with the standardized `globalThis`, `document`, and `window` identifiers, respectively. This change helps to eliminate unnecessary dependencies and improves the compatibility and readability of the code by leveraging built-in global objects.

### Before

```javascript
import global from 'global';
import document from 'global/document';
import window from 'global/window';

const element = document.createElement('div');
window.alert('Hello, World!');
```

### After

```javascript
const element = document.createElement('div');
window.alert('Hello, World!');
```