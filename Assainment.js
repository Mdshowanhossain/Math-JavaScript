// function kilometerToMeter(number) {
//     var meter = number * 1000;

//     return meter;
// }
// // var result = kilometerToMeter(10);
// var result = kilometerToMeter(16);
// console.log(result);
// w - 50;
// p - 100;
// laptops - 500;

// function budgetCalculator(phone, watch, laptop) {

//     var phonePrices = 100;
//     var totalPhonePrice = phonePrices * phone;

//     var watchPrice = 50;
//     var totalWatchPrice = watchPrice * watch;

//     var laptopPrice = 500;
//     var totalLaptopPrice = laptopPrice * laptop;

//     var totalCost = totalWatchPrice + totalPhonePrice + totalLaptopPrice;

//     return totalCost;
// }

// var result = budgetCalculator(1, 2, 3);
// console.log(result)

function hotelCost(firstNight, secondNight, thirdNight) {

    if (firstNight <= 10) {
        var firstCost = firstNight * 100;

    } else if (secondNight <= 20) {
        var secondCost = secondNight * 80;
    } else {
        var thirdCost = thirdNight * 70;
    }
    var sum = firstCost + secondCost + thirdCost;
    return sum;
}
var result = hotelCost(4, 11, 21);
console.log(result)