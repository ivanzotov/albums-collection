export default saver => store => next => action => {
  const result = next(action)
  const keys = saver(action)
  keys.forEach(key => localStorage.setItem(key, JSON.stringify(store.getState()[key])))
  return result
}
