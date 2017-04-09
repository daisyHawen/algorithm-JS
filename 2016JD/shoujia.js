function main(arr1, arr2) {
    var n = arr1[0];
    var m = arr1[1];
    var vm = arr2.sort();
    var maxPrice = 0;
    var maxN = 0;
    //考虑商品数量大于购买人的数量
    if (n >= m) {
        for (var i = 0; i < arr2.length; i++) {
            var count = Count(arr2[i], arr2);
            var curPrice = count * arr2[i];
            if (curPrice > maxPrice) {
                maxPrice = curPrice;
                maxN = arr2[i];
            }
        }
    } else {
        //商品数小于购买人的数量
        for (var i = 0; i < arr2.length; i++) {

        }
    }
    console.log(count);
    console.log(maxN);

}

function order(arr) {
    var order_arr = [];
    for (var i = 0; i < arr.length; i++) {
        var temp = 0;
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[i]) {
                break;
            } else {
                temp++;
            }
        }
    }
}

function Count(n, arr) {
    var count = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] >= n) {
            count++;
        }
    }
    return count;
}
var arr1 = [5, 4]
var arr2 = [2, 8, 7, 10]
main(arr1, arr2)
