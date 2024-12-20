# eslint-plugin-react

`eslint-plugin-react` has a large footprint, lighter alternatives exist.

# Alternatives

## `@eslint-react/eslint-plugin`

Not a drop-in replacement but a feature rich alternative with many of the same rules.

[Project Page](https://github.com/Rel1cx/eslint-react)
[npm](https://www.npmjs.com/package/@eslint-react/eslint-plugin)

## `@stylistic/eslint-plugin-jsx`

The following stylistic rules in `eslint-plugin-react` can be replaced by the same rules in `@stylistic/eslint-plugin-jsx`:

- `react/jsx-child-element-spacing`
- `react/jsx-closing-bracket-location`
- `react/jsx-closing-tag-location`
- `react/jsx-curly-brace-presence`
- `react/jsx-curly-newline`
- `react/jsx-curly-spacing`
- `react/jsx-equals-spacing`
- `react/jsx-first-prop-new-line`
- `react/jsx-indent-props`
- `react/jsx-indent`
- `react/jsx-max-props-per-line`
- `react/jsx-newline`
- `react/jsx-one-expression-per-line`
- `react/jsx-pascal-case`
- `react/jsx-props-no-multi-spaces`
- `react/jsx-sort-default-props`
- `react/jsx-sort-props`
- `react/jsx-space-before-closing`
- `react/jsx-tag-spacing`
- `react/jsx-wrap-multilines`

[Project Page](https://eslint.style/packages/jsx)
[npm](https://www.npmjs.com/package/@stylistic/eslint-plugin-jsx)

## TypeScript

The following correctness rules in `eslint-plugin-react` can be enforced by TypeScript with appropriate `tsconfig.json` settings:

- `react/jsx-no-duplicate-props`
- `react/jsx-no-undef`
- `react/jsx-uses-react`
- `react/jsx-uses-vars`
- `react/no-invalid-html-attribute`
- `react/no-unescaped-entities` -> No need when using `@typescript-eslint/parser`
- `react/no-unknown-property`
- `react/style-prop-object`
- `react/react-in-jsx-scope`
- `react/require-render-return`

[Project Page](https://www.typescriptlang.org)
[npm](https://www.npmjs.com/package/typescript)
