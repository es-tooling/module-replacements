# globby

`globby` is a globbing library that presents [some behaviors](https://github.com/sindresorhus/globby#features)
no other libraries have, mainly the handling of negated patterns and directory expansion.

It pulls in [20+](https://npmgraph.js.org/?q=globby) transitive dependencies and can be replaced
with lighter and faster alternatives.

# Alternatives

## tinyglobby

[tinyglobby](https://www.npmjs.com/package/tinyglobby) can be used as an alternative in most cases.
It doesn't include all `globby` options though.

## fdir + picomatch

If you don't rely on `globby`'s special features, you can just use
[fdir](https://www.npmjs.com/package/fdir) combined with [picomatch](https://www.npmjs.com/package/picomatch).
Its API is nothing like `globby`'s, but it does the job if configured properly.

## Node.js (since v22.x)

Node.js v22 and up supports the [`fs.glob`](https://nodejs.org/api/fs.html#fspromisesglobpattern-options)
function. Although it's (currently) not as fast as other alternatives, it works as a zero-dependency
solution. It doesn't have `globby`'s special features though.

## fast-glob

[fast-glob](https://www.npmjs.com/package/fast-glob) does pretty much the same as `globby`
(in fact it's used by it), with the exception of directory expansion. It should work as a drop-in replacement
for most people. Just be warned that it's a bloated package too.
