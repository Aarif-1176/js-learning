let myDate =  new Date()
console.log(myDate)
console.log(myDate.toString())
console.log(myDate.toLocaleString())
console.log(myDate.toDateString())
console.log(typeof myDate)

let myCreatedDate = new Date(2024, 0, 23)
let myCreatedDate1 = new Date("01-06-2024")
console.log(myCreatedDate.toLocaleDateString())
console.log(myCreatedDate1.toLocaleDateString())


let myTimeStamp = Date.now()
console.log(myTimeStamp)
console.log(myCreatedDate.getTime())
console.log(Math.floor(Date.now()/1000))

let newDate = new Date()
console.log(newDate.getMonth())


newDate.toLocaleDateString('default', {
    weekday:"long",
    
})
