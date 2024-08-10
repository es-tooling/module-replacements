# Array Every Codemod

## Introduction

This codemod transforms usages of the custom `array-every` method into the built-in `Array.prototype.every` method. This change reduces dependency on unnecessary custom utilities by leveraging native JavaScript functionality, leading to cleaner code and potentially better performance.

### Before

```javascript
import { arrayEvery } from 'array-utils';

const allAdults = arrayEvery(users, user => user.age >= 18);
```

### After

```javascript
const allAdults = users.every(user => user.age >= 18);
```