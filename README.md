# tiny-dedent

A Tiny module for stripping indentation from multi-line strings.  
150 bytes (min & gzipped)

## Usage

```js
import S from "tiny-dedent";

function usageExample() {
  const first = S(`A string that gets so long you need to break it over
                       multiple lines. Luckily tiny-dedent is here to keep it
                       readable without lots of spaces ending up in the string
                       itself.`);
```
```
A string that gets so long you need to break it over
multiple lines. Luckily tiny-dedent is here to keep it
readable without lots of spaces ending up in the string
itself.
```

```js
  const second = S(`
    Leading and trailing lines will be trimmed, so you can write something like
    this and have it work as you expect:

      * how convenient it is
      * that I can use an indented list
         - and still have it do the right thing

    That's all.
  `);
```

```
Leading and trailing lines will be trimmed, so you can write something like
this and have it work as you expect:

  * how convenient it is
  * that I can use an indented list
    - and still have it do the right thing

That's all.

Wait! I lied. Dedent can also be used as a function.
```

## Installation

```sh
npm install tiny-dedent

or

yarn add tiny-dedent
```

## Motivation

I've been writting this replace regex over and over at the end of every template literal string, then I found there's a pretty popular package called dedent, which does exactly that. But I didn't feel like adding a dependency to do something that should be a macro, so I wrote this as a simple function.

This library is meant to be kept really really simple. It does not  try to handle any edge cases, if you need something something more sophisticated take a look at the [dedent](https://www.npmjs.com/package/dedent) package, it is around ~50 lines.

## Why not a tagged function?

A tagged function has to manually make the interpolations, instead of running it natively. Passing the string it as regular function parameter leaves the hard work for the javascript engine instead of doing it in userland, in theory it should be faster, and you need ship less code.


## License

MIT