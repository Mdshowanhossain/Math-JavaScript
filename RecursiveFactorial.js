function facto(number) {
    if (number === 0) {
        return 1;
    }
    else {
        var number = number * (number - 1)
    }
    return number;
}
var result = facto(5);
console.log(result)
