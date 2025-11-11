---
description: Modern alternatives to the xmldom package for XML DOM parsing and serialization
---

# Replacements for `xmldom`

## `@xmldom/xmldom`

[`@xmldom/xmldom`](https://github.com/xmldom/xmldom) is the maintained fork of the original `xmldom`.

For example:

```ts
import { DOMParser, XMLSerializer } from 'xmldom' // [!code --]
import { DOMParser, XMLSerializer } from '@xmldom/xmldom' // [!code ++]

const doc = new DOMParser().parseFromString(source, 'text/xml')
const xml = new XMLSerializer().serializeToString(doc)
```

CommonJS:

```ts
const { DOMParser, XMLSerializer } = require('xmldom') // [!code --]
const { DOMParser, XMLSerializer } = require('@xmldom/xmldom') // [!code ++]
```
