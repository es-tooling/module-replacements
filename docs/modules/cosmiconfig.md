---
description: Modern alternatives to the cosmiconfig package
---

# Replacements for `cosmiconfig`

## `lilconfig`

[`lilconfig`](https://github.com/antonk52/lilconfig) is a zero-dependency alternative to cosmiconfig with the same API

> [!NOTE]
> `lilconfig` does not support YAML files out of the box unless you provide custom loaders.

### Example

```js
import { lilconfig, lilconfigSync } from 'lilconfig'

const options = {
  searchPlaces: [
    'package.json', // Will use "myapp" field
    '.myapprc',
    '.myapprc.json',
    'myapp.config.js'
  ]
}

await lilconfig('myapp', options).search()

// Sync version
lilconfigSync('myapp', options).search()
```

### Loading YAML files

```js
import { lilconfig } from 'lilconfig'
import { parse } from 'yaml'

const yamlLoader = (filepath, content) => parse(content)

const options = {
  searchPlaces: [
    'package.json',
    '.myapprc',
    '.myapprc.yaml',
    '.myapprc.yml',
    'myapp.config.js'
  ],
  loaders: {
    '.yaml': yamlLoader,
    '.yml': yamlLoader,
    noExt: yamlLoader
  }
}

await lilconfig('myapp', options).search()
```
