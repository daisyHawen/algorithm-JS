 var test = {
 		name: {
 			xing: {
 				first: '张',
 				second: '李'
 			},
 			ming: '老头'
 		},
 		age: 40,
 		friend: ['隔壁老王', '宋经纪', '同事']
 	}
 	//一个最简单的方法
 var result = JSON.parse(JSON.stringify(test))


 result.age = 30
 result.name.xing.first = '往'
 result.friend.push('fdagldf;ghad')
 console.dir(test)
 console.dir(result)