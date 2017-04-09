/*输入中有多组测试数据。
每组测试数据的第一行为两个整数n和m（1=＜n, m=＜1000），
分别表示价签的数量以及小B的购买清单中所列的物品数。
第二行为空格分隔的n个正整数，表示货架上各类物品的价格，
每个数的大小不超过100000。
随后的m行为购买清单中物品的名称，
所有物品名称为非空的不超过32个拉丁字母构成的字符串，
保证清单中不同的物品种类数不超过n，
且商店有小B想要购买的所有物品。*/
function read_line() {

}
var arr = [5, 3]
var biaoqian = [3, 5, 1, 6, 8, 1]
var sp = ["peach", "grapefruit", "banana", "orange", "orange"]

//将sp转化为数组
function count(arr) {
    var obj = new Object;
    for (var i = 0; i < arr.length; i++) {
        if (!obj.hasOwnProperty(arr[i])) {
            obj[arr[i]] = 1;
        } else {
            obj[arr[i]]++;
        }
    }
    var obj_arr = []
    for (i in obj) {
        obj_arr.push(obj[i]);
    }
    return obj_arr.sort(function(a, b) {
        return b - a
    });
}

function price(arr1, arr2) {
    var price = 0;
    for (var i = 0; i < arr1.length; i++) {
        price += arr1[i] * arr2[i];
    }
    return price;
}

function computer(bqarr, sp) {
    var sp_arr = count(sp);
    console.log(sp_arr);
    bqarr.sort(function(a, b) {
        return a - b
    });
    var maxPrice = price(sp_arr, bqarr)
    var minPrice = price(sp_arr, bqarr.reverse());
    console.log(maxPrice);
    console.log(minPrice);
}
computer(biaoqian, sp)
