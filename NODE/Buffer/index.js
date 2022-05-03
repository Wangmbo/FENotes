// console.log(0.1 + 0.2)
// console.log(0.1 + 0.1)
// console.log(0.1)
// console.log(0.1 + 0.3)
const buffer = Buffer.alloc(5)
// console.log(buffer) // 像数组（但是和数组有区别），数组可以扩展，buffer不能扩展
// 可以用索引取值
// 默认是16进制
let buffer2 = Buffer.from([0x25, 0x26, 300]) // 超过255会取余
// console.log(buffer2)

// 6个字节
let buffer3 = Buffer.from('梦波')
// console.log(buffer3, 'buffer')

// 一般情况下，我们会alloc来声明一个buffer，或者把字符串转换成buffer来使用
// console.log(buffer3.toString('base64'), 64)
// toString 方法可以转化为指定的编码

// base64的来源 就是将每个字节都转化成 小于64的值
// 0-63的取值范围是64
// 大小写字母 52 + 0123456789+/
// let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
// str += str.toLocaleLowerCase()
// str += '0123456789+/'

// console.log(parseInt(111001, 2))
// console.log(parseInt(101010, 2))
// console.log(parseInt(1010, 2))
// console.log(parseInt(100110, 2))
// console.log(parseInt(111001, 2))
// console.log(parseInt(101011, 2))
// console.log(parseInt(1110, 2))
// console.log(parseInt(100010, 2))

// console.log(str[57] + str[42]+str[10]+str[38]+str[57]+str[43]+str[14]+str[34])

// slice
// 基本类型也是存的是地址
// 存在内存中
// let buffer1 = Buffer.from([1, 2, 3, 4, 5])
// console.log(buffer1)
// let sliceBuffer = buffer1.slice(0, 1)
// console.log(sliceBuffer)
// sliceBuffer[0] = 100
// console.log(buffer1)

// copy 
// const buf1 = Buffer.from('梦')
// const buf2 = Buffer.from('波')
// let bigBuf = Buffer.alloc(6) // new Buffer(6)
// buf1.copy(bigBuf, 0)
// buf2.copy(bigBuf, 3)
// console.log(bigBuf.toString())


// concat
const buf1 = Buffer.from('梦')
const buf2 = Buffer.from('波')
console.log(Buffer.concat([buf1, buf2], 3).toString())
// 数据是分包传递的，把每段数据进行拼接

// indexOf
