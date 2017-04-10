var str = "adsfjjbkk";
// \1匹配第一个子串  
// 只去除连续重复  
console.log(str.replace(/(.)(\1)+/g, function($1, $2, $3) {
	return $2;
}));