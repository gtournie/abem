'use strict'

const assert = require('assert')
const abem = require('../index')

describe('abem - no options', function () {
  const _abem = abem()
  assert.strictEqual(_abem('block'), 'block')
  assert.strictEqual(_abem('block', 'elem'), 'block__elem')
  assert.strictEqual(_abem('block', 'elem', 'mod'), 'block__elem -mod')
  assert.strictEqual(_abem('block', 'elem', ['mod1', 'mod2']), 'block__elem -mod1 -mod2')
  assert.strictEqual(_abem('block', 'elem', { mod1: true, mod2: true }), 'block__elem -mod1 -mod2')
  assert.strictEqual(_abem('block', 'elem', { mod1: false, mod2: true }), 'block__elem -mod2')
  assert.strictEqual(_abem('block', 'elem', { mod1: false, mod2: false }, 'mix'), 'block__elem mix')
  assert.strictEqual(_abem('block', 'elem', { mod1: false, mod2: false }, ['mix1', 'mix2']), 'block__elem mix1 mix2')
  assert.strictEqual(
    _abem('block', 'elem', { mod1: false, mod2: false }, { mix1: true, mix2: false }),
    'block__elem mix1'
  )
  assert.strictEqual(_abem('block', null, { mod1: false, mod2: true }, ['mix1', 'mix2']), 'block -mod2 mix1 mix2')
})

describe('abem - with options', function () {
  const _abem = abem({ separators: { element: '___', modifier: '--' } })
  assert.strictEqual(_abem('block', 'element', { mod: true }), 'block___element --mod')
})
