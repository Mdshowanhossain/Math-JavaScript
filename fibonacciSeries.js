// function fibonacci(num) {
//     var fibo = [1, 1];
//     for (var i = 2; i <= num; i++) {
//         var nextFibo = fibo[i - 1] + fibo[i - 2];
//         fibo.push(nextFibo);
//     }
//     return fibo;
// }

function recursive(num) {
    //    stopping condition
    if (num == 0) {
        return [1];
    }
    // recursive call
    else if (num == 1) {
        return [1, 1]
    }
    var fibo = recursive(num - 1)
    var nextFibo = fibo[num - 1] + fibo[num - 2]
    fibo.push(nextFibo);
    return fibo;
}

var result = recursive(10)
console.log(result)