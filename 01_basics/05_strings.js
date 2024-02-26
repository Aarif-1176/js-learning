const fname = "Aarif khan"
const repoCount = 50
// console.log(fname + repoCount + "value")  this is not a good practice

console.log(`my name is ${fname} and my repoCount is ${repoCount}`) // this is good practice

const gameName = new String('aarif-khan')

console.log(gameName[0])
console.log(gameName.__proto__)

console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName.charAt(2))
console.log(gameName.indexOf("i"))


const newStr = gameName.substring(1,3)
console.log(newStr)
console.log(gameName.length)
const anotherString = gameName.slice(-8,4)
console.log(anotherString)


let newString = "my name is Aarif khan"
console.log(newString.includes("Aarif"))
console.log(newString.replace('Aarif','Nida'))

console.log(newString.split( " "))



