function sayMyName(){
    console.log("a")
    console.log("a")
    console.log("r")
    console.log("i")
    console.log("f")
}
sayMyName()

// function addTwoNumbers(number1 , number2){  // parameters
//     console.log(number1 + number2)
// }
// addTwoNumbers(5, 7) // arguments

function addTwoNumbers(number1 , number2){  // parameters
    // let result =number1+number2
    // return result;   // return a value
    return number1+ number2
}
const result = addTwoNumbers(5,7)
console.log(`the sum is ${result}`)



function loginUserMessage(username){
    if (username === undefined){
        console.log("please enter a username")
        return
    }
    return `${username} just logged in`
}
const ans = loginUserMessage("Aarif")
console.log(ans)



function calculateCardPrice(num1){
    return num1
}

console.log(calculateCardPrice(200))


function calculateCardPrice1(...num1){  // spread operator
    return num1
}
console.log(calculateCardPrice1(200, 400, 756))


const user ={
    username: "aarif",
    price: 100
}
function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}

handleObject(user)

handleObject({
    username: "Aarif khan",
    price:220000000
})


const myNewArray = [200 ,300,400,599,345]
function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray))

