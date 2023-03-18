//forEach
const numbers = [1, 2, 3, 4];
numbers.forEach((num, index) => {
  console.log(`Number ${num} at index ${index}`);
});
// map
const numberss = [1, 2, 3, 4];
const doubledNumbers = numberss.map((num) => num * 2);
console.log(doubledNumbers); // Output: [2, 4, 6, 8]

//filter
const names=["Binod","ganod","gautam"];
let nameWithod=names.filter((value)=>value.endsWith("nod"))
console.log(nameWithod)

//reduce
const cartBill=[20,40,32]
const sumofCartBills=cartBill.reduce((pre,curr)=>pre+curr,0)
console.log(sumofCartBills)

//every
const gameScore=[2000,45,600,56,"string value"]

//check if all values are number
const gameScoreCheck=gameScore.every((v)=> typeof v==='number')
console.log(gameScoreCheck)

//find
const numbersss = [1, 2, 3, 4, 5];
const evenNumber = numbersss.find(function(number) {
  return number % 2 === 0;
});

console.log(evenNumber); // Output: 2

// some
const number = [1, 2, 3, 4, 5];
const hasEvenNumber = number.some(function(number) {
  return number % 2 === 0;
});

console.log(hasEvenNumber); // Output: true
