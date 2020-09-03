const RESOLVED_LOADER_PATTERN = /^.*\/([a-z-]+-loader.*)$/

exports.loaderSerializer = {
  print(val, serialize) {
    return serialize(val.replace(RESOLVED_LOADER_PATTERN, '$1'))
  },

  test(val) {
    return typeof val === 'string' && val.match(RESOLVED_LOADER_PATTERN)
  },
}
