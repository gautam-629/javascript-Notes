## 1.What are the types of Error in Javascript
=> Generally 4 types the are
  1. syntax Error
  ``` javascript
 let java is fun=true;
console.log(java is fun)
  ```
  2. Reference Error
   ```javascript
     console.log(value) // output: ReferenceError: value is not defined
   ```
  3. Type Error
   ```javascript
let javaIsFun=true;
     console.log(javaIsFun.toUpperCase()); //output: TypeError: javaIsFun.toUpperCase is not a function
   ```
  4.Rage Error
  ``` javascript
let myArray = [1, 2, 3];
   console.log(myArray[3]); // RangeError: Index out of range
   ```

## 2. Error Handile using throw and try and catch
```javascript
// about throw
function div(a,b){
    if(b===0)
   // throw "Second parameter cannot be Zero";
   // throw new Error("Second parameter cannot be Zero")
    throw new SyntaxError("Second parameter cannot be Zero")

    return a/b;
}
console.log(div(1,0));

// try and catch
function div(a,b){
    if(b===0)
    throw new SyntaxError("Second parameter cannot be Zero");
    return a/b;
}
// calling a function
try {
    div(4,0)
} catch (error) {
    console.log(error.message);
    console.log(error.name);
}
```
# 3. sessionStorage vs localStorage
Method are same but difference is if you close the browser sessionStorage clear
the data but not with localStorage
```javascript
//1. localStorage(api)->both key abd value be set string
//set
localStorage.setItem('name','Binod');
localStorage.setItem('a','45');
localStorage.setItem('b','5');

// // get
let a1=localStorage.getItem('a');
let b1=localStorage.getItem('b');
// console.log(+a + +b);
console.log(parseInt(a)+parseInt(b));
// //update->not directly update but change key
localStorage.setItem('a','90');
// //remove item
localStorage.removeItem('a');
// //clear
localStorage.clear();
// SessionStorage(api)->both key abd value be set string
//set
sessionStorage.setItem('name','Binod');
sessionStorage.setItem('a','45');
sessionStorage.setItem('b','5');
// get
let a=sessionStorage.getItem('a');
let b=sessionStorage.getItem('b');
// console.log(+a + +b);
console.log(parseInt(a)+parseInt(b));
//update->not directly update but change key
sessionStorage.setItem('a','90');
//remove item
sessionStorage.removeItem('a');
//clear
sessionStorage.clear();
```
## 2.Object method
```javascript
//Object method
const foodMap={
    Burger:200,
    pizza:500,
    joice:300
}
delete foodMap.Burger;
const newFoodMap=Object.assign({id:1},foodMap);// This method is used to copy the values of all enumerable properties from one or more source objects to a target object
Object.seal(foodMap);//preventing new properties from being added to it but still allowing existing properties to be changed.
Object.freeze(foodMap);//preventing new properties from being added to it and existing properties from being removed or changed.
const keys= Object.keys(foodMap); // Convert the Object to an array of key
const values= Object.values(foodMap);
let entries=Object.entries(foodMap); // Convert the object to an array of key-value pairs
for(let [key,value] of entries){
   console.log(`${key}: ${value}`);
}
```
## Array Method
1. forEach vs map
> In summary, forEach is used when you want to execute a function for each element in an array, and you don't need to return anything. map is used when you want to transform each element in an array and create a new array with the transformed values.
``` javascript
//forEach
const numbers = [1, 2, 3, 4];
numbers.forEach((num, index) => {
  console.log(`Number ${num} at index ${index}`);
});
// map
const numberss = [1, 2, 3, 4];
const doubledNumbers = numberss.map((num) => num * 2);
console.log(doubledNumbers); // Output: [2, 4, 6, 8]

```
2. filter
>In JavaScript, the filter() method is used to create a new array with all elements that pass the test implemented by the provided function. The filter() method does not modify the original array.
```javascript
const names=["Binod","ganod","gautam"];
let nameWithod=names.filter((value)=>value.endsWith("nod"))
console.log(nameWithod)
```
3. reduce
>In JavaScript, the reduce() method is used to reduce an array to a single value by executing a provided function for each element of the array.
```javascript
//reduce
const cartBill=[20,40,32]
const sumofCartBills=cartBill.reduce((pre,curr)=>pre+curr,0)
console.log(sumofCartBills)
```
4. every
>The "every" method returns "true" if all elements of the array pass the condition specified by the callback function. Otherwise, it returns "false".
``` javascript
//check if all values are number
const gameScoreCheck=gameScore.every((v)=> typeof v==='number')
console.log(gameScoreCheck)
```
5. find
>The "find" method returns the first element in the array that satisfies the condition specified by the callback function. If no element satisfies the condition, it returns "undefined".
```javascript
const numbers = [1, 2, 3, 4, 5];
const evenNumber = numbers.find(function(number) {
  return number % 2 === 0;
});

console.log(evenNumber); // Output: 2

```
6. some
>The "some" method returns "true" if at least one element of the array satisfies the condition specified by the callback function. Otherwise, it returns "false".

``` javascript
const numbers = [1, 2, 3, 4, 5];
const hasEvenNumber = numbers.some(function(number) {
  return number % 2 === 0;
});

console.log(hasEvenNumber); // Output: true

```
