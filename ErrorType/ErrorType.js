// 1. syntax Error
let java is fun=true;
console.log(java is fun)

//2.Reference Error
console.log(value);  //ReferenceError: value is not defined

// 3.type Error
let javaIsFun=true;
console.log(javaIsFun.toUpperCase());

//4.Range Error
let myArray = [1, 2, 3];
console.log(myArray[3]); // RangeError: Index out of range