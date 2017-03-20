if (Array.prototype.map === undefined) {
	Array.prototype.map = function(fun) {
		//创建一个空的数组
		var newArr = [];
		//遍历数组
		for (var i = 0; i < this.length; i++) {
			//如果当前元素不是undefined
			if (this[i] !== undefined) {
				//判断稀疏数组
				//调用fun传入当前元素值，index，当前数组，将结果保存在r中
				//将newArr的i位置赋值为r
				var r = fun(this[i], i, this);
				newArr[i] = r;
			}
		} //end
		return newArr;
	}
}
var numbers = [1, 2, "", 4, 5, 6, 7, 8]
var mapResult = numbers.map(function(item, index, array) {
	return (item + 2)
})
console.log(mapResult); //false