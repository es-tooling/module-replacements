# Date Codemod

## Introduction

This codemod replaces the usage of the `date` and `date/auto` npm modules with the built-in JavaScript `Date` object. This transition helps reduce unnecessary dependencies, thereby decreasing the bundle size and improving the performance of the codebase.

### Before

```javascript
import date from 'date';
import 'date/auto';

const today = date();
const formattedDate = date.format(today, 'YYYY-MM-DD');
```

### After

```javascript
const today = new Date();
const formattedDate = today.toISOString().split('T')[0];
```