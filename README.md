# module-replacements

This project provides two things:

- A JS package containing manifests of suggested module replacements
- Documentation for replacements which are not entirely replaced by native
functionality

## Replacements documentation

You can read more about module replacements and browse the list
[by clicking here](./docs/modules/README.md).

## `module-replacements` package

### Usage

You can install this package via NPM:

```sh
npm i -S module-replacements
```

You can then import the manifest of your choice:

```ts
import {NativeReplacements} from 'module-replacements';
```

### Manifests

We provide three manifests:

- All (includes every manifest)
- Native replacements
- Micro utility replacements
- Preferred replacements

#### Native replacements

These are modules which can now be replaced by native functionality.

For example, pseudo-polyfills which provide functionality of widely available
platform features can be replaced by their platform equivalents.

Similarly, features which did not exist at the time but have now existed in
the platform for many years, so no longer need a dependency.

#### Micro utility replacements

This is a more opinionated list of modules considered to be 'micro utilities' -
very small utilities which could possibly be replaced with native equivalents
or removed entirely.

#### Preferred replacements

This is a very opinionated list of modules with preferred replacements. Often
these replacements are much lighter or more modern than the modules they are
replacing.

Sometimes these may also be forks of older packages which are actively
maintained (unlike the source module).

# Contributing

If you would like to add a replacement mapping to one of the manifests, please
open an issue where this can be discussed.

Keep in mind, very newly available native features are unlikely to join the
list since they are not widely available yet.
