> `isNaN`用来判断一个值是否为`NaN`

### 为什么需要这个函数？
+ NaN不能通过相等运算符来判断，`NaN == NaN` 和 `NaN === NaN` 都会返回 `false`

### `NaN`的产生
+ 一般情况下，将某些不能强制转换为数值的非数值转换为数值的时候会得到`NaN`

### 默认行为
> 如果`isNaN`函数的参数不是Number类型，它会首先尝试将这个参数转换为数值，然后对转换后的结果进行是否为`NaN`的判断
所以就会出现以下情况：
+ 布尔值和空字符串会返回`false`
```javascript
isNaN(true) // false
isNaN(false) // false
isNaN('') // false
```
+ 纯数值字符串会返回`false`
```javascript
isNaN('1') // false
```


### Number.isNaN
> 与`isNaN`相比，`Number.isNaN`不会自动将参数转换为数字，只有在参数是值为`NaN`是才会返回`true`