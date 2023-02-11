const createSeqArray = (n) => {
  if(n <= 0 ) return [];

  const createdSeqArray = [];
  for(let i = 0; i < n; i++){
    createdSeqArray[i] = i + 1
  }

  return createdSeqArray;
}


const result1 = createSeqArray(1)
const result2 = createSeqArray(3)
const result3 = createSeqArray(5)

console.log(result1) // [1]
console.log(result2) // [1, 2, 3]
console.log(result3) // [1, 2, 3, 4, 5]
