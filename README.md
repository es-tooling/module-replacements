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
- Native replacements (modules which can be replaced by native equivalents)
- Optimisation replacements (modules which can be replaced by leaner or
closer-to-the-platform equivalents)

#### Native replacements

These are modules which can now be replaced by native functionality.

For example, pseudo-polyfills which provide functionality of widely available
platform features can be replaced by their platform equivalents.

Similarly, features which did not exist at the time but have now existed in
the platform for many years, so no longer need a dependency.

#### Optimisation replacements

These are modules which have more optimal replacements.

For example, some modules have arguably unnecessarily deep dependencies trees,
or rely on functionality themselves which fit into the "Native replacements"
category. These should likely be replaced by leaner alternatives.

Another example - modules which are too granularly modularised, leading to
unnecessarily large amounts of small dependencies (aka "micro dependencies").

Due to this being a one-to-many mapping (there are often many possible
replacements), this list can contain multiple replacements per module.

# Contributing

If you would like to add a replacement mapping to one of the manifests, please
open an issue where this can be discussed.

Keep in mind, very newly available native features are unlikely to join the
list since they are not widely available yet.
