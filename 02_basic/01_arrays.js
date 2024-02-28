// arrays
 const myArr = [0,1,2,4]
 const myHeroes = ["aarif", "khan"]

 const myArr2 = new Array(1,3,5,6,7)
 console.log(myArr[4])

 //  Arrays methods

myArr.push(88)
console.log(myArr)
myArr.pop()
console.log(myArr)
myArr.unshift(9)
console.log(myArr)
myArr.shift()
console.log(myArr)

console.log(myArr.includes(4))
console.log(myArr.indexOf(4))

//slice, splice

console.log("A ", myArr)

const myn1 = myArr.slice(1,3)
console.log(myn1)
console.log("B ", myArr)

const myn2 = myArr.splice(1,3)
console.log("C ", myArr)
console.log(myn2)

// the difference between slice and splice is slice doesnt effect our original array whereas splice effect out original array


const test = ["Virat kholi", "kane williamson" ,"Steve Smith" , "Joe root" , "Marnus Labusane"]
const t20 = ["SKY" , "yesjasvi jeswal", "Brendon Mucullum", "ABD"]

// test.push(t20)

// console.log(test)
// console.log(test[5])

const newList = test.concat(t20)
console.log(newList)

const another_array = [1,2,[3,[4,5,6],7],8,]
const real_array = another_array.flat(Infinity)
console.log(real_array);


console.log(Array.isArray("aarif"))
console.log(Array.from({name:"aarif"})) // interesting case

let score1 =100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));