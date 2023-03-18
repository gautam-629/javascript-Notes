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