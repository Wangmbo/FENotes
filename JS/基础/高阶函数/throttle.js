function throttle(fn, interval) {
  let timer
  let firstTime = true
  return function(...args) {
   if(timer) return

   if(firstTime) {
     fn(...args)
     firstTime = false
     return
   }
  
   timer = setTimeout(() => {
     clearTimeout(timer)
     fn(...args)
     timer = null
   }, interval)
  }
}

const show = throttle((h) => {
  console.log('hello', h)
}, 2000)

setInterval(() => {
  show(1)
}, 100)

