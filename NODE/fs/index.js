
const fs = require('fs')
const path = require('path')

// input/output 读文件(以内存为参照物)写操作
// 读取，默认不写编码是buffer类型，如果文件不存在则报错
// 如果采用嵌套的写法，就只能读取完之后再次写入
// 是否能变读取，边写入

// 大文件用此方法会导致淹没可用内存(例如内存8个G， 文件3个G， 淹没了3个G)

// fs.readFile(path.resolve(__dirname, 'index.md'), (err, data) => {
//   console.log(data)

//   fs.writeFile(path.resolve(__dirname, './test.js'), data, (err, data) => {
//     console.log(data)
//   })
// })

// 写入的时候默认会将内容以utf-8的形式写入，如果文件不存在会创建
// fs.writeFile
// fs.copyFile

// r读 a追加 w写

let buf = Buffer.alloc(3)
fs.open(path.resolve(__dirname, './index.md'), 'r', (err, fd) => {
  // fd file description 是一个 number 类型
  console.log(fd)
  // 读取index.md 将读取的内容写入到buffer的第0个位置写3个，从文件索引为1的位置开始写入
  fs.read(fd, buf, 0, 3, 0, (err, data) => {
    fs.open(path.resolve(__dirname, 'b.txt'), 'w', (err, wfd) => {
      // 将buffer的数据写入文件
      fs.write(wfd, buf, (err , written) => {
        console.log(written, 'written')

        // fs.close
        // 不关闭文件描述符会被占用
      })
    })
  })
})
// 每次读取三个 实现读取一点写一点
// 如何将读写操作进行分离 => 流