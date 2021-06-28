// var depth = 19;
// var animal = 0;
// if (depth <= 10) {
//     var sum = depth * 50;
//     var animal = sum;
// } else if (depth <= 20) {
//     var sum2 = depth * 100;
//     var animal = sum2;
//     console.log()
// }


// var depth = 22;
// var animal = 0;

// if (depth <= 10) {
//     animal = depth * 50;
// }
// else if (depth <= 20) {
//     var firstPart = 10 * 50;
//     var remaining = depth - 10;
//     var secondPart = remaining * 100;
//     animal = firstPart + secondPart;
// } else {
//     var firstPart = 10 * 50;
//     var secondPart = 10 * 100;
//     var remaining = depth - 20;
//     var third = remaining * 300;
//     animal = firstPart + secondPart + third;
// }
// console.log(animal)


function animalCount(depth) {
    var animal = 0;

    if (depth <= 10) {
        animal = depth * 50;
    }
    else if (depth <= 20) {
        var firstPart = 10 * 50;
        var remaining = depth - 10;
        var secondPart = remaining * 100;
        animal = firstPart + secondPart;
    } else {
        var firstPart = 10 * 50;
        var secondPart = 10 * 100;
        var remaining = depth - 20;
        var third = remaining * 300;
        animal = firstPart + secondPart + third;
    }
    return animal;
}
var result = animalCount(22);
console.log(result)