// learning objects

/* there are two ways to create a object in js
first is with literals and  the other one is using constructors. the only difference is of singleton  pattern
*/

// object literals
const mySym = Symbol("key1")

const jsUser = {
    mySym:"key1",      // this is not use as symbol but as string 
    [mySym]:"key1",   // this is correct and now we are using it as symbol
    name:"Aarif",
    "full name":"Aarif khan",
    age:25,
    country:"India",
    email:"aarif@gmail.com",
}
console.log(jsUser.age) // this is not good practice
console.log(jsUser["age"]) // this is clean code
console.log(jsUser["full name"]) 
jsUser.email = "new_email@yahoo.com";
// Object.freeze(jsUser); // making obj immutable

jsUser.greeting = function(){
    console.log("hello js user")
}

jsUser.greeting1 = function(){
    console.log(` hello js user , ${this.name}`)
}

console.log(jsUser.greeting())
console.log(jsUser.greeting1())

