// for each loop 

const coding = ["js", "python", "java", "javascript"];
coding.forEach( function(item){
    console.log(item);
})


coding.forEach((item) =>{
    console.log(item);
}) 

function printMe(item){
    console.log(item);
}
coding.forEach(printMe)


coding.forEach( (item ,index,arr) =>{
    console.log(item,index,arr);
})

const myCoding =[
    {
        languageName:'javascript',
        languageFileName:'js'
    },
    {
        languageName:'java',
        languageFileName:'java'
    },
    {
        languageName:'python',
        languageFileName:'py'
    },
    {
        languageName:'nodejs',
        languageFileName:'nodejs'
    }
]

myCoding.forEach((item) =>{

    console.log(item.languageFileName);
})

// in for each loop it cannot retrun values

const number = ['one', 'two','three', 'four','five','six'];
const values = coding.forEach((item) => {
    console.log(item)
})
console.log(values)
