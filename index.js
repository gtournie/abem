'use strict'

module.exports = function (opts) {
  opts = opts || {}
  const separators = opts.separators || {}
  const elementSeparator = separators.element || '__'
  const modifierSeparator = ' ' + (separators.modifier || '-')
  const mixinSeparator = ' '

  function addClassNames (className, entries, separator) {
    if (entries == null) return className
    if ('string boolean numeric'.indexOf(typeof entries) >= 0) return className + separator + entries
    if (Array.isArray(entries)) {
      for (let i = 0, len = entries.length; i < len; ++i) className += separator + entries[i]
    } else {
      Object.keys(entries).forEach(prop => {
        if (entries[prop]) className += separator + prop
      })
    }
    return className
  }

  return function (block, element, modifiers, mixins) {
    const className = element ? block + elementSeparator + element : block
    return addClassNames(addClassNames(className, modifiers, modifierSeparator), mixins, mixinSeparator)
  }
}
