const toDouble = array => array.map(number => number * 2);

const result1 = toDouble([1, 2, 3, 4, 5])
const result2 = toDouble([10, 25, 37, 42, 54])
const result3 = toDouble([3, 5, 7])

console.log(result1)// -> [2, 4, 6, 8, 10]
console.log(result2)// -> [20, 50, 74, 84, 108]
console.log(result3)// -> [6, 10, 14]
