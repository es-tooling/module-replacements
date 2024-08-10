# String.prototype.substr Codemod

## Introduction

This codemod replaces occurrences of the `String.prototype.substr` method with the more modern and preferred `String.prototype.substring` method. By doing so, it helps streamline the codebase, reduce reliance on deprecated features, and enhance readability.

### Before

```javascript
const stringValue = "Hello, World!";
const substring = stringValue.substr(0, 5);
```

### After

```javascript
const stringValue = "Hello, World!";
const substring = stringValue.substring(0, 5);
```