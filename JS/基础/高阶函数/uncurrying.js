Function.prototype.uncurrying = function () {
  const self = this
  return function() {
    const obj = Array.prototype.shift.apply(arguments)
    return self.apply(obj, arguments)
  }
}

const push = Array.prototype.push.uncurrying()
const shift = Array.prototype.shift.uncurrying()

const arr = []

push(arr, 1)
push(arr, 1)
push(arr, 1)
shift(arr, 1)

console.log(arr)
