## 1.What are the types of Error in Javascript
>**Generally 4 types the are**
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

//aso decleare
let person = Object.freeze({
    name: 'John',
    age: 30,
  });
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
7. **Array.from()**
``` javascript
// Example 1: Convert a string into an array
const str = 'Hello';
const strArray = Array.from(str);

console.log(strArray);
```
>**Here is a list of JavaScript array methods that can modify the original array:**
1. copyWithin()
2. fill()
3. pop()
4. push()
5. reverse()
6. shift()
7. sort()
8. splice()
9. unshift()
```javascript
const numbers = [10, 5, 80, 4];

numbers.sort((a, b) => a - b);

console.log(numbers); // Output: [4, 5, 10, 80]

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


## 8.This keyWord
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

## 8 Date and time

```javascript
// current data in milisecond
let currentDate=new Date().getTime()
console.log(currentDate)

let currentDate2= Date.now()
console.log(currentDate2)
```

>**point to know**
1. Both methods essentially provide the same result: the current timestamp. However, Date.now() is generally preferred in modern JavaScript code due to its simplicity and efficiency. It eliminates the need to create a new Date object, resulting in slightly better performance. Therefore, if you only need the current timestamp, it is recommended to use Date.now().

>**simple digital clock**
```HTMl

<!DOCTYPE html>
<html>
  <head>
    <title>Digital Clock</title>
    <style>
      body {
        text-align: center;
        font-family: "Arial", sans-serif;
      }
      
      #clock {
        font-size: 48px;
        font-weight: bold;
      }
    </style>
  </head>
  <body>
    <h1>Digital Clock</h1>
    <div id="clock"></div>

    <script>
      function updateClock() {
        var now = new Date();
        var hours = now.getHours();
        var minutes = now.getMinutes();
        var seconds = now.getSeconds();

        var time = hours + ":" + minutes + ":" + seconds;
        document.getElementById("clock").textContent = time;
      }

      // Update the clock every second
      setInterval(updateClock, 1000);
    </script>
  </body>
</html>

```
## 9.Scope
There  are 4 types of scope **Block scope,Global Scope,function Scope,Module Scope**

1. **Block scope**
Varible declared with let and const is a block scope(means only accessable only inside a block) but not with var

```javascript
{
    const z=90
    let a=40;
    console.log(a);
    var c=90
}
console.log(c);
console.log(a) // not working
console.log(z) // not working
```
2. **function scope**
```javascript
function show(){
    let a=90;
    var b=56;
    const x=90
}
console.log(a)
console.log(b)
console.log(x)
```

3. **global scope**
Any Variable/expression which is Written outSide i.e not inside the function,blocks etc. this is shared across the file

4. **module Scope**
In modern js,a file can be considered as module,where we use export and import syntax to use variable file.

```javascript

<script src="index.js" type="module"></script>

export{someVar,someFunc}

import {someVar } from './app.js'
```

## 10. Variable
>**Variables** are buckets in the memory which store values.
1. **Let**
- this is create a block scope
- re-declarationn is Not allowed (in same scope)
- re-assignment is allwoed
2. **const**
- this create a block scope
- re-declaration is Not allowed
- re-assignment is Not allowed
- must be assigned at declaration time
3. **var**
- it cannot have block scope and can be re-declared.
- it only had function scope
- var are hosited, so they can be used before the declaration

>**Question combination **closure,scope,and Event loop**
1. Explain how output become 4 4 4 4
``` javascript
function show(){
    for(var i=0;i<4;i++){
        setTimeout(()=>{
           console.log(i)
        },2000)
    }
}
show() // output 4 4 4 4
```
> **Explain**
1. The show() function is called.
2. The for loop initializes i to 0.
3. Inside the loop, the setTimeout function is called for each iteration.
4. The callbacks are scheduled to execute after a 2-second delay.
5. The loop continues, incrementing i to 1, 2, and 3.
6. The loop ends when i becomes 4.
7. After 2 seconds, the first callback is executed and prints 4 to the console.
8. Similarly, after 2 seconds, the remaining callbacks are executed and also print 4 to the console.

``` javascript
// solution
function show() {
  for (var i = 0; i < 4; i++) {
    (function (num) {
      setTimeout(function () {
        console.log(num);
      }, 2000);
    })(i);
  }
}

show(); 
``` 
2. Explain how output become 0,1,2,3
```javascript
function show(){
    for(let i=0;i<4;i++){
        setTimeout(()=>{
           console.log(i)
        },2000)
    }
}
show(); //output 0,1,2,3
```
> **Explain**
1. The show() function is called.
2. The for loop initializes i to 0 and checks the condition i < 4.
3. Inside the loop, the setTimeout function is called for each iteration.
4. The callbacks are scheduled to execute after a 2-second delay.
5. The loop continues, incrementing i to 1, 2, and 3.
6. For each iteration, the callback captures the value of i at that specific iteration because let creates a new block scope.
7. After 2 seconds, the first callback is executed and prints 0 to the console.
8. Similarly, after 2 seconds, the remaining callbacks are executed and print 1, 2, and 3 to the console, respectively.

## 11.DataTypes
>**Primitive data Types**
1. **Number:** Represents numeric values. It includes integers, floating-point numbers, and special numeric values like **NaN (Not a Number)** and Infinity.
2. **String:** Represents textual data enclosed in single quotes ('') or double quotes ("").
3. Boolean: Represents logical values, either true or false.
4. **null:** Represents the intentional absence of any object value. It is a primitive value.
5. **undefined:** Represents a variable that has been declared but has not been assigned a value.
6. **Symbol:** Represents a unique and immutable value that can be used as an identifier for object properties.

> **Reference Data Types:**
1. **Object:** Represents complex data structures. Objects are collections of key-value pairs and can include properties and methods. Objects can be created using object literals ({}) or by using constructors like new Object().
2. **Array:** Represents ordered collections of values. Arrays are a special type of object that have numbered indices starting from 0. They can be created using square brackets ([]) or with the Array constructor.

3. **RegExp:** Represents regular expressions, which are used for pattern matching and searching within strings.

>**Difference btw primitive and Reference Data Types**
1. Primitive data types are immutable, which means their values cannot be changed. where Reference data types are mutable, which means their values can be modified.
```javascript
// Primitive data types
let str = 'Hello';

console.log(str); // Output: Hello

// Performing operations or modifications
str += ' World'; // Concatenating a new string

console.log(str); // Output: Hello World (a new string is created, the original value is not modified)

//Reference data Types
function modifyArray(arr) {
    arr.push('Modified');
    console.log('Inside function:', arr);
  }
  
  let originalArray = ['Original'];
  console.log('Before function call:', originalArray);
  
  modifyArray(originalArray);
  
  console.log('After function call:', originalArray);
  
```
2. When assigning a primitive value to a variable or passing it as a function argument, a copy of the value is made.
where in **Reference data types**
When assigning a reference value to a variable or passing it as a function argument, a reference to the data is copied, not the actual data itself.

```javascript
// primitive
function modifyValue(value) {
  value = 'Modified';
  console.log('Inside function:', value);
}

let originalValue = 'Original';
console.log('Before function call:', originalValue);

modifyValue(originalValue);

console.log('After function call:', originalValue);

// Reference
function modifyObject(obj) {
  obj = { property: 'Modified' };
  console.log('Inside function:', obj);
}

let originalObject = { property: 'Original' };
console.log('Before function call:', originalObject);

modifyObject(originalObject);

console.log('After function call:', originalObject);

//output
Before function call: { property: 'Original' }
Inside function: { property: 'Modified' }
After function call: { property: 'Original' }

```
## 11.Introduction
javascript is a  multi purpose and **multi paradigm**(object-oriented, functional, and event-driven programming,Procedural Programming) language.

## 12. Asynchronous JavaScript
Asynchronous programming in JavaScript is achieved through the use of **callbacks, promises,and async/await syntax.**

1. **callbacks**
 - callbacks is a function that pass arguments as a another function
 ``` javascript
 function greet(name, callback) {
  console.log("Hello, " + name + "!");
  callback();
}

function sayGoodbye() {
  console.log("Goodbye!");
}

greet("Alice", sayGoodbye);
 ```
 2. **Promises**
 - Promises(object) greatly simplify handling asynchronous code compared to traditional callback-based approaches, making it easier to write and maintain asynchronous JavaScript code.

> **Advantage**

 1. Avoiding Callback Hell
 2. Overall, promises provide a more organized and manageable way to handle asynchronous code, offering better readability, error handling, composition, and control over the flow of operations.

 >**simple example using then and catch**
 ```javascript
 // Creating a Promise
const myPromise = new Promise((resolve, reject) => {
  // Perform an asynchronous operation
  const randomNumber = Math.random();

  if (randomNumber < 0.5) {
    // Resolve the promise if the random number is less than 0.5
    resolve(randomNumber);
  } else {
    // Reject the promise if the random number is greater than or equal to 0.5
    reject(new Error('Random number is too high!'));
  }
});
// Consuming the Promise
myPromise
  .then((result) => {
    console.log('Promise resolved with result:', result);
  })
  .catch((error) => {
    console.log('Promise rejected with error:', error.message);
  });
 ```
 >**Simple example using async,await and catch**
 ```javascript
 const myPromise = () => {
    return new Promise((resolve, reject) => {
      const randomNumber = Math.random();
  
      if (randomNumber < 0.5) {
        // Resolve the promise if the random number is less than 0.5
        resolve(randomNumber);
      } else {
        // Reject the promise if the random number is greater than or equal to 0.5
        reject(new Error('Random number is too high!'));
      }
    });
  };
  
  // Using await with Promises
  async function fetchData() {
    try {
      const result = await myPromise();
      console.log('Promise resolved with result:', result);
    } catch (error) {
      console.log('Promise rejected with error:', error.message);
    }
  }
  
  // Calling the async function
  fetchData().then(()=>{
    console.log("done")
  });
  
 ```
 >**then vs wait**
 1. Both await and then() are used to handle promises, 
but await is typically used within an async function to simplify the syntax and make asynchronous code appear more synchronous, while then() allows for more fine-grained control and chaining of asynchronous operations.

## 13.higherOrderFunction
A higher-order function is a function that takes one or more functions a
s arguments and/or returns a function as its result.

```javascript
function higherOrderFunction(callback) {
  // Perform some operations
  // Call the callback function
  callback();
}

function callbackFunction() {
  console.log("I'm the callback function!");
}

higherOrderFunction(callbackFunction);


// example number 2
function higherOrderFunction() {
  // Return a new function
  return function() {
    console.log("I'm the returned function!");
  };
}

const returnedFunction = higherOrderFunction();
returnedFunction();
/////////////
example: map, filter, reduce, and forEach,

```
## 14.String
Certainly! Here is a comprehensive list of JavaScript methods that can be used for both strings and arrays:
1. length
2. concat()
3. indexOf()
4. lastIndexOf()
5. slice()
6. toLowerCase()
7. toUpperCase()
8. split()
9. join()
10. toString()
11. reverse()
12. includes()
13. startsWith()
14. endsWith()
15. trim()