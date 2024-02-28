// const tinderUser = new object()  

const tinderUser ={}
tinderUser.id = "100"
tinderUser.name ="sam"
tinderUser.isLoggedIn = false

console.log(tinderUser)

const regularUser = {
    email:"regular@gmail.com", 
    fullname:{
        userFullname:{
            firstname: "John",
            lastname : "Doe"
        }
    }
}

console.log(regularUser.fullname.userFullname.lastname)


const obj1 ={1: 'one', 2:'two'}
const obj2 ={3:'three', 4:'four'}

// const obj3 = {obj1,obj2}

// const obj3 = Object.assign({} ,obj1 , obj2);

const obj3 = {...obj1, ...obj2}  // this is the most use method
console.log(obj3)

const users = [
{
    id:1,
    email: "john@doe.com",
},
{
    id:1,
    email: "john@doe.com",
},{
    id:1,
    email: "john@doe.com",
},{
    id:1,
    email: "john@doe.com",
}
]

users[1].email
console.log(tinderUser)

console.log(Object.keys(tinderUser))
console.log(Object.entries(tinderUser))

console.log(tinderUser.hasOwnProperty('isLoggedIn'))

const course ={
    coursename:"js in hindi",
    price: "999",
    courseIstructor: "aarif"
}

// course.courseInstructor

const {courseIstructor: instructor} = course
console.log(instructor)

// {                  // json
//     name: 'John',  
//     price: "free"
// }

