# shortid

`shortid` is deprecated, because the architecture is unsafe.

# Alternatives

## nanoid

`nanoid` is a secure alternative to `shortid`. It is a tiny, secure, URL-friendly, unique string ID generator for JavaScript.

Also note that `nanoid` is faster than `shortid`.

```ts
import { nanoid } from 'nanoid'
model.id = nanoid() //=> "V1StGXR8_Z5jdHi6B-myT"
```

[Project Page](https://github.com/ai/nanoid/)
[NPM](https://www.npmjs.com/package/nanoid)
