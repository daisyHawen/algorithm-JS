if (Array.prototype.every === undefined) {
	Array.prototype.every = function(fun) {
		// 遍历数组中的每个元素
		for (var i = 0; i < this.length; i++) {
			if (this[i] != undefined) {
				//调用fun，依次传入当前的元素值，位置i，当前数组作为参数，将返回值保存在变量r中。
				var r = fun(this[i], i, this)
				if (r == false) {
					return false
				}
			}
		} //end
		return true;
	}
}
var numbers = [1, 2, 3, 4, 5, 6, 7, 8]
var everyResult = numbers.every(function(item, index, array) {
	return (item > 2)
})
console.log(everyResult); //false