const accountId =125454
let accountEmail = "aarif@gmail.com"
var accountPassword = "123456"

accountCity = "Jaiput"
let accountState = ""// in js the value of this will be undefined as no value is being initilized to it. 
// To make it work we need to assign a value to it like below:
accountState="Rajasthan"

// accountId = 2542              // this is not allowed we cannot change the value of const once initilized

accountEmail = "abc@gamil.com"
accountPassword = "11358"
accountCity = "Delhi"

/*
prefer not to use var because of issue in block scope and functional scope
*/

console.table([accountEmail,accountId,accountPassword,accountCity,accountState]);