var duplicate = [1, 11, 1, 1, 1, 2, 22, 3, 43, 43, 34, 45, 54, 65, 65, 77, 88, 88]
var unique = [];
for (var i = 0; i < duplicate.length; i++) {
    var element = duplicate[i]
    var index = unique.indexOf(element)
    if (index === -1) {
        unique.push(element)
    }

}
console.log(unique)