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
function. Although it's (currently) experimental, it works as a zero-dependency solution.

## tinyglobby

`tinyglobby` can be used as an alternative to `globby` and `fast-glob`. It uses `fdir` and `picomatch`
under the hood.

`fast-glob` is a library that presents a custom behavior of negated patterns no other glob libraries have.

`globby` wraps around it to add even more [default behaviors](https://github.com/sindresorhus/globby#features)
that are not straightforward to replace.

`tinyglobby` should only be needed if you rely on these default behaviors.
It does not have all options but it often can be a drop-in replacement.

[Project Page](https://github.com/SuperchupuDev/tinyglobby)

[npm](https://npmjs.com/package/tinyglobby)
