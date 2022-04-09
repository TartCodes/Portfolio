
// Declare a variable, assign it a string of multiple words, and check to see if one of the words is "apple".

let str = 'Bob duck apple Dog'
if (str.search('apple') !== -1) { //search returns a value of -1 thats why !== -1
    console.log('yes')
} else {
    console.log('no')
}