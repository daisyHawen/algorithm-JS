(function(global) {
	var id = 0,
		container = document.getElementsByTagName('head')[0];

	function jsonp(options) {
		if (!options || !options.url) return;
		var scriptNode = document.createElement("script"),
			data = options.data || {},
			url = options.url,
			callback = options.callback,
			fnName = "jsonp" + id++;
		//添加回调函数
		data["callback"] = fnName;
		//拼接URL
		var params = [];
		for (var key in data) {
			params.push(encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
		}
		url = url.indexOf('?') > 0(url + "&"): (url + "?");
		url += params.join('&');
		scriptNode.src = url;

		//传递的是一个匿名的回调函数，要执行的话，暴露为一个全局方法
		global[fnName] = function(ret) {
				callback && callback(ret); //执行函数

				//执行完毕后删除对象
				container.removeChild(scriptNode);
				delete global[fnName];
			}
			//出错处理
		scriptNode.onerror = function() {
			callback && callback({
				error: 'erroe'
			});
			//执行完毕后删除对象
			container.removeChild(scriptNode);
			global[fnName] && delete global[fnName];
		}
		scriptNode.type = "text/javascript";
		container.appendChild(scriptNode);
	}
	global.jsonp = jsonp
})(this);

//使用demo
jsonp({
	url: "www.example.com",
	data: {
		id: 1
	},
	callback: function(ret) {
		console.log(ret);
	}
});