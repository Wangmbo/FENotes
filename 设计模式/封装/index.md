+ 封装数据
  + 通过创建作用域实现
  ```javascript
  const obj = function() {
    const _name = 'sven'

    return {
      getName() {
        return _name
      }
    }
  }()
  ```
  + TODO 通过 symbol 实现
+ 封装实现
+ 封装变化
> 通过封装变化的方式，把系统中稳定不变的部分和容易变化的部分隔离开来，在系统的演变过程中，我们只需要替换哪些容易变化的部分，如果这些部分已经封装好的，替换起来也相对容易。这可以最大程度的保证程序的稳定性和可拓展性。