
const max = array => array.length === 0 ? - 1 : array.reduce((a, b) => b - a > 0 ? b : a);

const result1 = max([3, 7, 8, 4, 2])
const result2 =max([150, 82, 93, 2042, 827, 30, 5, 222])
const result3 = max([])

console.log(result1) // -> 8
console.log(result2)// -> 2042
console.log(result3)//  -> -1