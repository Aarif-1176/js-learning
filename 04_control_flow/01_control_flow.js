// if 
// if (condition){
//     // statement 

// }else{
//     // another statement
// }

// operator ==, !=, > , <, >=, <=   

const temperature = 30
if(temperature ===30 ){
    console.log(true);
}else{
    console.log(false);
}

const score = 200
if(score > 100){
    const power ="fly"
    console.log(`user power:${power}`);

}
// console.log((`user power: ${power}`));  // out of scope so this will give an error

// short hand method

const balance =1000
if(balance>500) console.log("test"),    // this is not good practice as it makes code not readable
console.log("test1");




const userLoggedIn =true
const debitCard =true
const loggedInFromGoogle =false
const loggedInFromEmail =true

if(userLoggedIn && debitCard){
    console.log("allow to buy course")
}
if(loggedInFromEmail || loggedInFromGoogle){
    console.log("allow user to buy course");
}