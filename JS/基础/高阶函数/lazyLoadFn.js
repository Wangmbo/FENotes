// 惰性加载函数

let addEvent = function(ele, type, handler) {
  if(window.addEventListener) {
    console.log('赋值')
    addEvent = (ele, type, handler) => {
      ele.addEventListener(type, handler)
    }
  } else if(window.attachEvent) {
    addEvent = (ele, type, handler) => {
      ele.attachEvent('on' + type, handler)
    }

  }

  addEvent(ele, type, handler)
}

addEvent(document, 'click', () => {
  console.log('click')
})

console.log(addEvent.toString())

function click4() {
  console.log('click4')
}

// document.addEventListener('click',click4)

addEvent(document, 'click', click4)