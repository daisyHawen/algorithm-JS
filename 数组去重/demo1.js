var arr1 = [1, 2, 5, 3, 2, 3, 2];

//方法一：
//通过建立一个空的数组arr2，
//每次循环arr1的时候查询arr2中是否存在该值，若没有就插入。
function repeat1(arr) {
	for (var i = 0, arr2 = []; i < arr.length; i++) {
		if (arr2.indexOf(arr[i]) == -1) {
			arr2.push(arr[i])
		}
	}
	return arr2;
}
console.log(repeat1(arr1));