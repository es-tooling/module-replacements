# Replace `is-npm` Module Codemod

## Introduction

This codemod replaces the `is-npm` npm module with a more efficient implementation using built-in Node.js environment variables. It eliminates the dependency on the library, reducing bundle size and improving performance by leveraging native features.

### Before

```javascript
import { isNpm, isYarn, isNpmOrYarn } from 'is-npm';

if (isNpm) {
    console.log('Running in npm environment');
}

if (isYarn) {
    console.log('Running in yarn environment');
}

if (isNpmOrYarn) {
    console.log('Running in either npm or yarn environment');
}
```

### After

```javascript
if (
    (process.env.npm_config_user_agent &&
        process.env.npm_config_user_agent.startsWith('npm')) ||
    (process.env.npm_package_json &&
        process.env.npm_package_json.endsWith('package.json')) ||
    (process.env.npm_config_user_agent &&
        process.env.npm_config_user_agent.startsWith('yarn'))
) {
    console.log('Running in npm or yarn environment');
} else if (process.env.npm_config_user_agent &&
    process.env.npm_config_user_agent.startsWith('npm')) {
    console.log('Running in npm environment');
} else if (process.env.npm_config_user_agent &&
    process.env.npm_config_user_agent.startsWith('yarn')) {
    console.log('Running in yarn environment');
}
```