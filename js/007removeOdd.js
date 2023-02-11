const removeOdd = (array) => {
  for(let i = array.length - 1; i >= 0; i--){ // 配列から要素を取り除くときはバックループを使用すると楽
    if( array[i] % 2 !== 0) array.splice(i, 1);
  }
  return array
}

const result1 = removeOdd([1, 2, 3, 4, 5])
const result2 = removeOdd([10, 25, 37, 42, 54])
const result3 = removeOdd([3, 5, 7])

console.log(result1) // -> [2, 4]
console.log(result2) // -> [10, 42, 54]
console.log(result3) // -> []