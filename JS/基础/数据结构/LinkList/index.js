class Node {
  constructor(el, next = null) {
    this.el = el
    this.next = next
  }
}

// add remove
class LinkedList {
  constructor() {
    this.size = 0
    this.head = null
  }
  _find(targetIndex) {
    let cur = this.head
    for(let index = 0; index < targetIndex; index++) {
      cur = cur.next
    }
    return cur
  }
  // _find
  // 一个参数默认添加到最后面
  // 两个参数添加到index处
  add(index, el) {
    if(arguments.length === 1) {
      el = index
      index = this.size
    } else if(arguments.length === 0) {
      throw new Error('arguments error')
    }

    if(index === 0) {
      this.head = new Node(el, this.head)
    } else {
      const pre = this._find(index - 1)
      pre.next = new Node(el, pre.next)
    }

    this.size++
  }

  remove(index) {
    if(index === 0) {
      this.head = this.head.next
    } else {
      let pre = this._find(index - 1)
      pre.next = pre.next.next
    }

    this.size--
  }

  reverse1() {
    function handler(head) {
      if(head === null || head.next === null) return head
      let newHead = handler(head.next)
      head.next.next = head
      head.next = null
      return newHead
    }

    return handler(this.head)
  }

  reverse2() {
    let head = this.head
    if(head === null || head.next === null) return head
    let newHead = null
    while(head) {
      let tmp = head.next
      head.next = newHead
      newHead = head
      head = tmp
    }
    return newHead
  }
}

const link = new LinkedList()
link.add(1)

link.add(1, 2)
link.add(2, 3)
link.add(3, 4)
link.add(4, 5)
// link.remove(2)
// console.dir(link, { depth: 100 })

// console.dir(link.reverse1(), { depth: 100 })
console.dir(link.reverse2(), { depth: 100 })
