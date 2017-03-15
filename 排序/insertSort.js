var arr = [2, 4, 1, 5, 3];

function insertSort(arr) {
	//遍历arr中每个元素（i从1开始）
	for (var i = 1; i < arr.length; i++) {
		//将当前元素保存在变量t中
		var t = arr[i];
		var p = i - 1; //声明变量p=i-1
		//循环
		while (arr[p] > t && p >= 0) {
			arr[p + 1] = arr[p];
			p--;
		} //循环结束
		arr[p + 1] = t;
	}
}
insertSort(arr);
console.log(arr);
//直接插入排序的时间复杂度是O(n^2)