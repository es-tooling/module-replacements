---
description: Modern alternatives to @arcblock/remark-include for composing markdown files together
---

# Replacements for `@arcblock/remark-include`

## `@it-service-npm/remark-include`

[`@it-service-npm/remark-include`](https://github.com/IT-Service-NPM/remark-include) is a more actively maintained and feature-rich alternative to [`@arcblock/remark-include`](https://github.com/wangshijun/remark-include).

Update the Markdown files:

```markdown
Hello. I am an includer.

@include ./included.md

That should do it!
```

to:

```markdown
Hello. I am an includer.

::include{file=./included.md}

That should do it!
```

`onInclude` option must be refactored as Remark plugins.
For example,
[`@it-service-npm/remark-heading-adjustment`](https://www.npmjs.com/package/@it-service-npm/remark-heading-adjustment).
They used with included AST and
[configured with `processor.data()`](https://github.com/IT-Service-NPM/remark-include/blob/7ee27f6fa49836487a5237994bf9d4b9f2a86d7d/src/index.ts#L216C1-L226C1):

```typescript
  const includedFile: VFile = readSync(includedFilePath, 'utf8');

  const includedAST: Root = processor()
    .data('topHeadingDepth', includeDirective.depth + 1)
    .data('filePathChanges', {
      sourcePath: includedFile.path,
      destinationPath: file.path
    })
    .runSync(
      processor.parse(includedFile),
      includedFile
    ) as Root;

  return includedAST.children;
```

With `@it-service-npm/remark-include`, you can use `::include{file=./included.md}`
[GitLab transclusion syntax](https://docs.gitlab.com/user/markdown/#includes)
statements to compose markdown files together.

Additional features:

- GitLab include directives inside the included file are ignored,
  but this plugin **support recursive transclusion**
- It is possible to use globs (`::include{file=./included*.md}`)
  in `file` attribute
- New attribute `optional`,
  which disable fatal directive error when file does not exists
- Relative images and links in the imported files will have their paths rewritten
  to be relative the original document rather than the imported file
  (with [`@it-service-npm/remark-relative-url-adjustment`](https://www.npmjs.com/package/@it-service-npm/remark-relative-url-adjustment))
- An imported markdown file will “inherit” the heading levels.
  If the `::include{file=./included.md}` statement happens under Heading 2,
  for example, any heading 1 in the included file
  will be “translated” to have header level 3
  (with [`@it-service-npm/remark-heading-adjustment`](https://www.npmjs.com/package/@it-service-npm/remark-heading-adjustment))

This plugin is crafted in TypeScript
and is compatible with the latest version of Remark.
