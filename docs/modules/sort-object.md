# sort-object

`sort-object` brings in many dependencies that are no longer needed for more modern Node versions. It can typically be replaced with platform-provided APIs. When you need more functionality, there are other alternatives.

# Alternatives

## JS APIs with Object.keys() + Object.sort()

For simple cases, you can use `Object.keys()` and `Array.prototype.sort()` to sort an object's keys.

```js
Object.keys(object)
  .sort()
  .reduce((obj, key) => {
    obj[key] = object[key];
    return obj;
  }, {});
```

## sort-object-keys

[`sort-object-keys`](https://www.npmjs.com/package/sort-object-keys) is a 0 dependency package that can replace the functionality of `sort-object`. This is useful for more complex cases, such as if you have a custom sort for your object keys.

## sortobject

[`sortobject`](https://www.npmjs.com/package/sortobject) is a 0 dependency package that can replace the functionality of `sort-object`. This library should be used over `sort-object-keys` if you need to deeply sort nested objects.
