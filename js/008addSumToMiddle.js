const addSumToMiddle = (array) => {
  for(let i = 0; i < array.length - 1; i++){
    const sum = array[i] + array[i + 1];
    array.splice(i+1, 0, sum);
    i++;
  }
  return array;
}

const result1 = addSumToMiddle([1, 2, 3, 4, 5])
const result2 = addSumToMiddle([10, 25, 37, 42, 54])
const result3 = addSumToMiddle([3, 5, 7])

console.log(result1); // [1, 3, 2, 5, 3, 7, 4, 9, 5]
console.log(result2); // [10, 35, 25, 62, 37, 79, 42, 96, 54]
console.log(result3); // [3, 8, 5, 12, 7]



/**
 *
 * 解2
 * const addSumToMiddle = (array) => {
 * const sumArray = [] ①
 * for(let i = 0; i < array.length -1; i++){
 *   const sum = array[i] + array[i + 1];
 *   sumArray.push(sum);
 * }
 * for(let j = 0; j < sumArray.length; j++){
 *    array.splice(2 * j + 1, 0, sumArray[j]); ②
 *  }
 * }
 */


/**
  * ①まず元配列の中から全ての隣り合う要素をsumArrayに格納する
  * ②元配列にたいして、値が挿入される位置は1.3.5.7.9.....2n+1番目となるので、
  *  spliceメソッドの第一引数は上記のような記述となる
  */