var china = {
    nation: '中国',
    birthplaces: ['北京', '上海', '广州'],
    skincolr: 'yellow',
    friends: ['sk', 'ls']
  }
  //深复制，要想达到深复制就需要用递归
function deepCopy(o, c) {
  var c = c || {}
  for (var i in o) {
    if (typeof o[i] === 'object') {
      //要考虑深复制问题了
      if (o[i].constructor === Array) {
        //这是数组
        c[i] = []
      } else {
        //这是对象
        c[i] = {}
      }
      deepCopy(o[i], c[i])
    } else {
      //如果不是对象，则递归停止
      c[i] = o[i]
    }
  }
  return c
}
var result = {
  name: 'result'
}
result = deepCopy(china, result)
console.dir(result)