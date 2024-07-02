# aggregate-error / es-aggregate-error

With newer browser and Node.js versions you should not need to use the [`aggregate-error`](https://www.npmjs.com/package/aggregate-error) or [`es-aggregate-error`](https://www.npmjs.com/package/es-aggregate-error) packages to use `AggregateError` with JavaScript.

# Alternatives

## Node.js (since 15.x) and modern browsers

With Node.js 15 there's now a built-in [AggregateError](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/AggregateError) type you can use.

```js
// before:
import AggregateError from 'es-aggregate-error';
// can be import AggregateError from 'aggregate-error';

const error = new AggregateError([new Error('foo'), 'bar', {message: 'baz'}]);

// after:
const error = new AggregateError([new Error('foo'), 'bar', {message: 'baz'}]);
```

This is also supported in the [following browser versions](https://caniuse.com/mdn-javascript_builtins_aggregateerror) (94.8% global coverage as of July 2024):

- Chrome 85+
- Edge 85+
- Safari 14+
- Firefox 79+
- Opera 71+

Note that the `aggregate-error` package has slightly different behaviour than the ES built-in `AggregateError`. When using the `aggregate-error` package, if a non-Error object is passed into the array given to the `AggregateError` consturctor, a new Error is created with all properties from the object copied over. If you are relying on this behaviour, you'll need to update your code to handle this case manually when switching to the built-in `AggregateError`.
