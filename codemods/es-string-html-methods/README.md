# es-string-html-methods Codemod

## Introduction

This codemod replaces usage of deprecated string HTML methods from the `es-string-html-methods` package with their corresponding member method calls directly on string instances. By doing this, it eliminates unnecessary imports and reduces dependencies, thereby optimizing bundle size and performance.

### Before

```javascript
import { blink, bold } from 'es-string-html-methods';

const str1 = blink('foo');
const str2 = bold('bar');
```

### After

```javascript
const str1 = 'foo'.blink();
const str2 = 'bar'.bold();
```