//1. localStorage(api)->both key abd value be set string
//set
// localStorage.setItem('name','Binod');
// localStorage.setItem('a','45');
// localStorage.setItem('b','5');

// // get
// let a=localStorage.getItem('a');
// let b=localStorage.getItem('b');
// // console.log(+a + +b);
// console.log(parseInt(a)+parseInt(b));

// //update->not directly update but change key
// localStorage.setItem('a','90');

// //remove item
// localStorage.removeItem('a');

// //clear
// localStorage.clear();


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