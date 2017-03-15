//采用正则的方式
function repeat3(arr) {
	// body...
	return arr.sort().join('').replace(/(^|,,)([^,]+)(,,\2)*/g,
		"$1$2").split(",,")
}
var arr1 = [1, 2, 5, 3, 2, 3, 2];
console.log(repeat3(arr1));
// console.log(arr.sort().join(',').replace(/(.)(\1)+/g, function($1, $2, $3) {
// 	return $2;
// }));