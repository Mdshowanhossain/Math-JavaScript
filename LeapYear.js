// LEAP YEAR

var year = 2020;

var leapYear = year / 4;

console.log(leapYear);

var isLeap = 2030;

var isLeap = 3566;
var leapYear = isLeap % 4;
if (leapYear == 0) {
    console.log('ata leap year')
} else {
    console.log('is no leap year')
}
console.log(leapYear);

function isLeap(leap) {
    var leapYear = leap % 4;
    if (leapYear == 0) {
        console.log('is leap year')
    } else {
        console.log('is not leap year')
    }
    return leapYear;
}
var result = isLeap(5900)
console.log(result)
