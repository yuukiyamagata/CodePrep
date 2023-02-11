
// 与えられた配列arrayの中からstrを部分文字列として持つ最初の要素のインデックスを返します
// ただし、arrayの中に該当する要素が見つからなかった場合は-1を返します

const findIndexOfStr = (array, str) => array.findIndex(string => string.indexOf(str) > 0)
const result1 = findIndexOfStr(["abc", "def", "ghi"], "e")
const result2 = findIndexOfStr(["Alice", "Bob", "Charles"], "a")
const result3 = findIndexOfStr([], "a")

console.log(result1); // 1
console.log(result2); // 2
console.log(result3) // -1