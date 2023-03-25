// Arguments Object are Not Available in Arrow function
function display1(){
    console.log(arguments)
 }
//  display1(1,2,3,4,5)
 
 let display2=()=>{
     console.log(arguments)
 }
//  display2(2,4,5,3,7)

// arrow function do not have this keyword
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


