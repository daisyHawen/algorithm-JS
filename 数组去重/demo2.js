//hash方式
function repeat2(arr) {
	for (var i = 0, hash = {}; i < arr.length; i++) {
		//hash中是否包含当前元素的键
		//如果不包含，就hash添加一个新元素，以当前元素值为key,val默认为1
		if (hash[arr[i]] === undefined) {
			hash[arr[i]] = 1;
		}
	} //遍历结束
	//将hash转化为索引;
	var i = 0;
	var arr2 = [];
	for (arr2[i++] in hash);
	return arr2
}

//这种情况下会改变原来的顺序，但是不需要函数的内置方法indexOf
var arr1 = [1, 2, 5, 3, 2, 3, 2];
console.log(repeat2(arr1));