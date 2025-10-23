---
description: Modern alternatives to depcheck for analyzing project dependencies and unused code
---
# Replacements for `depcheck`

## `knip`

[knip](https://github.com/webpro-nl/knip) is a more actively maintained and feature-rich alternative to [`depcheck`](https://github.com/depcheck/depcheck). In most cases, knip works out of the box without any configuration - just run `npx knip`. For projects that need customization, you can create a configuration file.

Example:

```json
{
  "$schema": "https://unpkg.com/knip@5/schema.json",
  "ignoreDependencies": ["@types/*", "eslint-*"]
}
```
