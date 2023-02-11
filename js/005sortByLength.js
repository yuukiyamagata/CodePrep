
const sortByLength = (array) => {
  array.sort() // sort()を比較関数なしで配列に対して実行すると、配列の要素が辞書順に並び替わる
  return array.sort((a, b) => b.length - a.length);
  // 戻り値が正、負、または0によって要素の並びが変更される
  // a > b ( a - b > 0(戻り値が正)) => [a, b]になる
  // a < b ( a - b < 0 (戻り値が負)) => [b, a]になる
  // a = b (a - b = 0 (戻り値が0)) 順番は変更されない
}


const result1 = sortByLength(["ccc", "dddd", "a", "bb", "eeeee"])
const result2 =sortByLength(["apple", "banana", "chicken", "doughnut", "egg"])
const result3 = sortByLength(["Taro", "Jiro", "Saburo"])

console.log(result1); // ["eeeee", "dddd", "ccc", "bb", "a"]
console.log(result2); // -> ["doughnut", "chicken", "banana", "apple", "egg"]
console.log(result3); // -> ["Saburo", "Jiro", "Taro"]