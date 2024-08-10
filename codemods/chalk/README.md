# Chalk to Picocolors Codemod

## Introduction

This codemod replaces the usage of the popular `chalk` library with the lighter-weight `picocolors` library. It updates the import statements and all corresponding usages within the codebase to leverage `picocolors`, reducing the dependency size and enhancing overall performance.

### Before

```javascript
import chalk from 'chalk';

console.log(chalk.red('This is an error message'));
console.log(chalk.green('This is a success message'));
```

### After

```javascript
import pc from 'picocolors';

console.log(pc.red('This is an error message'));
console.log(pc.green('This is a success message'));
```