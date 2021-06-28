// function factorial(number) {
//     var fact = 1;
//     for (let i = 1; i <= number; i++) {
//         fact = fact * i
//         // console.log(i, fact)
//     }
//     return fact;
// }

function factorialRecursive(number) {
    if (number == 0) {
        return 1;
    } else {
        factorial = number * factorialRecursive(number - 1);
    }
    return factorial;
}

var result = factorialRecursive(10);
console.log(result)