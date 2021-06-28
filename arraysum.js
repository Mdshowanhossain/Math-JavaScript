var unique = [1, 2, 3, 4, 5, 6, 7, 8];
var sum = 0;
for (let i = 0; i < unique.length; i++) {
    const element = unique[i];
    var sum = sum + element;
    if (element > sum) {
        sum = element;
    }

}
console.log(sum)