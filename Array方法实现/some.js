if (Array.prototype.some === undefined) {
	Array.prototype.some = function(fun) {
		for (var i = 0; i < this.length; i++) {
			if (this[i] !== undefined) {
				var r = fun(this[i], i, this);
				if (r == true) {
					return true
				} //这个和every刚好相反，
				//every是只要有false就返回false，
				//some是只要有true就返回true
			}
		}

	}
}
var numbers = [1, 2, 3, 4, 5, 6, 7, 8]
var someResult = numbers.some(function(item, index, array) {
	return (item > 2)
})
console.log(someResult); //false