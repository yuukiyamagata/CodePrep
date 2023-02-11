
const makePrimeArray = (n) => {
  if(n === 1) return [];
  const primeNumbers = [];
  for(let i = 2; i <= n; i++){
    for(let j = 2; j <= i; j++){
      if(j === i) primeNumbers.push(j);
      if(i % j === 0) break;
    }
  }
  return primeNumbers;
}


const result1 = makePrimeArray(1)
const result2 = makePrimeArray(2)
const result3 = makePrimeArray(8)
const result4 = makePrimeArray(20)

console.log(result1); // []
console.log(result2) // [2]
console.log(result3) // [2, 3, 5, 7]
console.log(result4) // [2, 3, 5, 7, 11, 13, 17, 19]


/** 別解
 * const makePrimeArray = (n) => {
 * if(n === 1) return [];
 *  const MAX_NUM = n;
 *  const TARGET_NUM = MAX_NUM + 1;
 *
 *  const primes = new Array(TARGET_NUM);
 *  primes.fill(true);
 *  primes[0] = false;
 *  primes[1] = false;
 *
 *  for(let i = 0; i < TARGET_NUM ** 0.5; i++){
 *    if(primes[i]){
 *    for(let j = 2 * i; j < TARGET_NUM; j = i + j){
 *      primes[j] = false;
 *      }
 *    }
 *  }
 *
 *  const result = [];
 *  for(let i = 0; i < primes.length; i++){
 *    if(primes[i]) result.push(i);
 *   }
 *  return result;
 * }
 */