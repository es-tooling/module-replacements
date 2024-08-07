# Globbing

Many glob libraries are bloated and have lighter and faster alternatives.

# Alternatives

## fdir

`fdir` is a very fast directory crawler that can achieve the same goals, despite having
a vastly different API. If you don't use user-provided glob patterns, you probably don't
even need to use globs with this package. It can be combined with `picomatch` if you do need them.

[Project Page](https://github.com/thecodrr/fdir)

[npm](https://npmjs.com/package/fdir)

## Node.js (since v22.x)

Node.js v22 and up supports the [`fs.glob`](https://nodejs.org/api/fs.html#fspromisesglobpattern-options)
function. It works as a zero-dependency solution.

## tinyglobby

`tinyglobby` can be used as an alternative to `globby` and `fast-glob`. It uses `fdir` and `picomatch`
under the hood.

`fast-glob` is a library that presents custom behavior of negated patterns no other glob libraries have.

`globby` wraps around it to add even more [default behaviors](https://github.com/sindresorhus/globby#features)
that are not straightforward to replace.

`tinyglobby` doesn't have all options but it's a good replacement if you rely on these behaviors,
or you want to continue using a similar API to existing libraries.

[Project Page](https://github.com/SuperchupuDev/tinyglobby)

[npm](https://npmjs.com/package/tinyglobby)
