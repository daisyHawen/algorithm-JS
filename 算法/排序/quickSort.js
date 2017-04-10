//快速排序方式
var arr = [2, 4, 1, 5, 3];

function quickSort(arr) {
	if (arr.length <= 1) {
		return arr;
	}
	var p = Math.floor(arr.length / 2);
	var left = [];
	var right = [];
	//删除p的位置
	var center = arr.splice(p, 1)[0];
	//遍历arr中每个元素
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] >= center) {
			right.push(arr[i])
		} else {
			left.push(arr[i])
		}
	}
	return quickSort(left).concat(center, quickSort(right));
}
var sortedArr = quickSort(arr)
console.log(sortedArr);

//快排，采用了一种递归的方式,时间复杂度knlog(n)