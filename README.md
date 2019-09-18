# abem

[![Build Status](https://travis-ci.org/gtournie/abem.svg?branch=master)](https://travis-ci.org/gtournie/abem)
[![Coverage Status](https://coveralls.io/repos/github/gtournie/abem/badge.svg?branch=master)](https://coveralls.io/github/gtournie/abem?branch=master)
[![Standard - JavaScript Style Guide](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)
[![npm downloads](https://img.shields.io/npm/dm/abem.svg?style=flat-square)](https://www.npmjs.com/package/abem)

Extremely simple and small (~0.25Kb minified) ABEM class name generator. Developed for using with
[babel-plugin-transform-jsx-abem](https://github.com/gtournie/babel-plugin-transform-jsx-abem).

> Note: This plugin doesn't apply any string transformation. camelCase should be applied earlier on.

## Installation

`npm install abem`

# Syntax

```js
const _abem = abem([options])
_abem(block[, element, modifiers, mixins])
```

| arg       | type                                                                 |
| :-------- | :------------------------------------------------------------------- |
| options   | object (default: `{ separators: { element: '__', modifier: '-' } }`) |
| block     | string                                                               |
| element   | string \| null                                                       |
| modifiers | string \| array \| object \| null                                    |
| mixins    | string \| array \| object \| null                                    |

## Examples

```js
let _abem = abem()
_abem('o-animal', 'elephant')
// "o-animal__elephant"

_abem('o-animal', 'elephant', ['mod1', 'mod2'])
// "o-animal__elephant -mod1 -mod2"

_abem('o-animal', 'elephant', { mod1: true, mod2: false }, ['mix'])
// "o-animal__elephant -mod1 mix"

_abem('o-animal', null, null, { mix: true })
// "o-animal mix"

_abem = abem({ separators: { element: '___', modifier: '--' } })
_abem('o-animal', 'elephant', 'mod')
// "o-animal___elephant --mod"
```

## Send some love

You like this package?

[![Buy me a coffee](https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png)](https://www.buymeacoffee.com/jCk0aHycU)
