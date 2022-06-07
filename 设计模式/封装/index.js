const obj = function() {
  const _name = 'sven'

  return {
    getName() {
      return _name
    }
  }
}()

console.log(obj.getName())
console.log(obj._name)