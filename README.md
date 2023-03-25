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
>Method are same but difference is if you close the browser sessionStorage clear the data but not with localStorage

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
## 4.Object method
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
## 5.Array Method
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
## 6. Spread operator vs Rest operator
>In summary, the spread operator is used to expand an iterable object(array,string) into individual elements(unpacks), while the rest operator is used to represent an indefinite number of arguments as an array(packs).
```javascript
// generally used to copy,merge,compose array and object
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = [...arr1, ...arr2]; // spread operator
console.log(combined); // Output: [1, 2, 3, 4, 5, 6]

//Rest operator
function sum(...numbers) {
  return numbers.reduce((acc, curr) => acc + curr, 0);
}

console.log(sum(1, 2, 3)); // Output: 6
console.log(sum(4, 5, 6, 7)); // Output: 22

```
## 7. Normal function vs Arrow function
1. Arguments Object are Not Available in Arrow function
``` javascript
function display1(){
   console.log(arguments)
}
display1(1,2,3,4,5)

let display2=()=>{
    console.log(arguments)
}
display2(2,4,5,3,7)
```
2. Arrow function do not have their own this
```javascript
 
let obj={
    name:"Binod",
    
    sayName(){
        console.log(this.name)
    },
    sayNameArrow:()=>{
        console.log(this.name) // arrow function do not have this keyword
    }
}
obj.sayName(); //Binod
obj.sayNameArrow() // undefined
```
3. implicity return by the arrow function


8.This keyWord
1. this keyword reference current object
``` javascript
let obj={
    name:"Binod",
    
    sayName(){
        console.log(this.name)
    },
    sayNameArrow:()=>{
        console.log(this.name) // Arrow function do not have this keyword
    }
}
obj.sayName(); //Binod
obj.sayNameArrow() // undefined
```
2. The value of this keyword depends on How you call a function
```javascript
function check(){
   console.log(this)
}
check() // global object or window
new check(); // check{} object
```