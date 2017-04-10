//给定字符串 str，检查其是否包含数字，包含返回 true，否则返回 false 
function containsNumber(str) {
	var reg = /\d/;
	return reg.test(str);
}

function containsRepeatingLetter(str) {
	return /([a-zA-Z])\1/.exec(str);
}

function endsWithVowel(str) {
	return /[aeiouAEIOU]$/.test(str);
}

function captureThreeNumbers(str) {
	return /\d{3}/.exec(str) ? /\d{3}/.exec(str)[0] : false;

}

function matchesPattern(str) {
	return /^\d{3}-\d{3}-\d{4}$/.test(str)
}

function isUSD(str) {
	return /^\$\d{1,3}[,\d{3}]*[\.\d{2}]?$/.test(str)

}
var x = isUSD('$20,933,209.93')
console.log(x);
// var myRe = new RegExp("d(b+)d", "g");
// var myArray = myRe.exec("cdbbdbsbdbdz");
// var test = containsNumber('abc123')

// var re = /(\w+)\s(\w+)/;
// var str = "John Smith";
// var myArray = re.exec(str);

// var newstr = str.replace(re, "hello, $1");
// console.log(newstr);
// console.log(myArray);