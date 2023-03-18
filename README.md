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