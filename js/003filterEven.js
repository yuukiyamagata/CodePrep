

const filterEven = (array) => array.filter(number => number % 2 === 0);







const result1 =filterEven([1, 2, 3, 4, 5])
const result2 = filterEven([10, 25, 37, 42, 54])
const result3 = filterEven([3, 5, 7])

console.log(result1) //  -> [2, 4]
console.log(result2) // -> [10, 42, 54]
console.log(result3) // -> []
