// Given two integers a and b, which can be positive or negative, find the sum of all the integers between and 
// including them and return it. If the two numbers are equal return a or b.
// Note: a and b are not ordered!

function getSum( a,b )
{
   return (Math.abs( a - b ) + 1) * (a + b) / 2
}

or

const GetSum = (a, b) => {
  let min = Math.min(a, b),
      max = Math.max(a, b);
      return (max - min + 1) * (min + max) / 2;
    }