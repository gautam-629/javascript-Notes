//this keyword: Depends on How you call a function.
function check(){
   console.log(this)
}
check() // global object or window
new check(); // check{} object

// let obj={
//     name:"Binod",
    
//     sayName(){
//         console.log(this.name)
//     },
//     sayNameArrow:()=>{
//         console.log(this.name) // Arrow function do not have this keyword
//     }
// }
// obj.sayName(); //Binod
// obj.sayNameArrow() // undefined
