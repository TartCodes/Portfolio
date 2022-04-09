//Create and array of numbers. Sum all of the numbers. Alert the sum.

let myArr = [15,20,30,50]
    let value = 0
    let sum = myArr.reduce( (a,b) => a + b, 0)
    console.log(sum)
