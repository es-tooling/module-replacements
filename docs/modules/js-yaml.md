# `js-yaml`

`js-yaml` appears to be no longer maintained. It also parses some YAML incorrectly.

## Alternatives

### `yaml`

`yaml` is a better JavaScript YAML parser. It’s maintained, follows the YAML spec more closely, and has support for more features, such as modifying YAML content.

[Project Page](https://eemeli.org/yaml/)

[npm](https://www.npmjs.com/package/yaml)

### Bun API

[Since Bun v1.2.21, YAML parsing is built in](https://bun.com/blog/release-notes/bun-v1.2.21#native-yaml-support) via the `YAML` namespace:

```js
import { YAML } from "bun";

console.log(YAML.parse("123"));        // 123
console.log(YAML.parse("null"));       // null
console.log(YAML.parse("false"));      // false
console.log(YAML.parse("abc"));        // "abc"
console.log(YAML.parse("- abc"));      // [ "abc" ]
console.log(YAML.parse("abc: def"));   // { "abc": "def" }
```
