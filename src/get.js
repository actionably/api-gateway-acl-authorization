function getNested(obj, ...args) {
  return args.reduce((obj, level) => obj && obj[level], obj)
}

module.exports = (obj, path, defaultValue) => {
  const pathArray = path.split('.')
  const result = getNested(obj, ...pathArray)
  return (result === undefined && defaultValue !== undefined) ? defaultValue : result
}