function isPalin(str) {
    return str == str.split('').reverse().join('')
}
console.log(isPalin('poop'))


// OR

// const isPalindrome = s => s === s.split('').reverse().join('') ? alert ('Yes') : alert ('No')

// // OR

// function isPalin(str) {
//     let reverseStr = str.split('').reverse().join('')
//     if (str === reverseStr) {
//         alert ('Yes')
//     } else {
//         alert ('No')
//     }
// }