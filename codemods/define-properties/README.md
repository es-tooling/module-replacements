# Define Properties Codemod

## Introduction

This codemod replaces the `define-properties` npm package with a custom `define` function, reducing the reliance on external libraries and streamlining the code. It checks for the usage of the `supportsDescriptors` method and modifies the calls to `define-properties` accordingly, ensuring better performance and a smaller bundle size.

### Before

```javascript
import defineProperties from 'define-properties';

defineProperties(obj, {
  prop1: value1,
  prop2: value2,
});

defineProperties(obj, {
  prop1: value1,
  prop2: value2,
}, predicateFunction);
```

### After

```javascript
const $defineProperties = function (object, map) {
  let propKeys = Object.keys(map);
  propKeys = propKeys.concat(Object.getOwnPropertySymbols(map));

  for (var i = 0; i < propKeys.length; i += 1) {
    const propKey = propKeys[i];
    const value = map[propKey];

    if (propKey in object) {
      continue;
    }

    Object.defineProperty(object, propKey, {
      value,
      configurable: true,
      enumerable: false,
      writable: true,
    })
  }

  return object;
};

$defineProperties(obj, {
  prop1: value1,
  prop2: value2,
});

// This usage of `define-properties` can be cleaned up through a mix of Object.defineProperty() and a custom predicate function.
// Details can be found here: https://github.com/es-tooling/module-replacements-codemods/issues/66
```