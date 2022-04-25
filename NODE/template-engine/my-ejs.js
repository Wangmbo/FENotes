const util = require('util');
const fs = require('fs');
const readFileAsync = util.promisify(fs.readFile);

const ejs = {
  async renderFile(filename, options) {
    let content = await readFileAsync(filename, 'utf-8');

    content = content.replace(/<%=(.+?)%>/g, function() {
      return '${' + arguments[1] + '}'
    })
    // console.log(content)
    let head = 'let str = ""; \n with(obj){\n str+=`';
    let body = content = content.replace(/<%(.+?)%>/g, function() {
      // console.log(arguments[1])
      return '`\n'+ arguments[1] + '\nstr+=`'
    });
    let tail = '`\n return str; \n}';
    // return head + body + tail
    return new Function('obj', head + body + tail)(options)
  }
};

(async function() {
  let r = await ejs.renderFile('index.html', { name: 'wave', age: 18, arr: [1, 2, 3] });
  console.log(r);
})();

// 拼接出我想要的  纯静态的凭借成字符串， 动态模板拼接成js代码执行