function getName(first, second) {
    // console.log(arguments)
    let fullName = ''
    for (let i = 0; i < arguments.length; i++) {
        let namePart = arguments[i]
        // console.log(namePart)
        fullName = namePart + ' ' + fullName;
    }
    // console.log(fullName)
    return fullName

}
const result = getName('abdul hay', 'rashida', 'sohan', 'osman');
console.log(result)