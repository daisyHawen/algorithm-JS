function main(arr1, arr2) {
    var n = arr1[0];
    var m = arr1[1];
    var vm = arr2.sort(function(a, b) {
        return b - a
    });
    var maxPrice = 0;
    var maxN = 0;
    var curPrice = 0
    console.log(vm);
    for (var i = 0; i < arr2.length; i++) {

        if (i + 1 < n) {
            curPrice = arr2[i] * (i + 1);
        } else {
            curPrice = arr2[i] * n;
        }
        if (curPrice > maxPrice) {
            maxN = arr2[i];
            maxPrice = curPrice;
        }
    }
    console.log(maxPrice);
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
var arr1 = [5, 4]
var arr2 = [2, 8, 7, 8, 8, 10, 10, 10]
main(arr1, arr2)
