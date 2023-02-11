const createSeqArray = (n) => {
  if(n <= 0 ) return [];

  const createSeqArray = [];
  for(let i = 0; i < n; i++){
    createSeqArray[i] = i + 1
  }

  return createSeqArray;
}


const result1 = createSeqArray(1)  // [1]
const result2 = createSeqArray(3)   //  [1, 2, 3]
const result3 = createSeqArray(5) // [1, 2, 3, 4, 5]

console.log(result1)
console.log(result2)
console.log(result3)
