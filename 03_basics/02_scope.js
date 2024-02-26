let a = 100
if (true){
    let a =  10
    const b = 20
    console.log(a)
    // var c = 30
}

// console.log(a)
// console.log(b)
console.log(a)

function one(){
    const username ="aarif"

    function two(){
        const website ="youtube"
        console.log(`${username}`)
    }
    // console.log(`${website}`)
    two()
}
one()


if(true){
    const username ="mohd aarif"
    if(username ==="mohd aarif"){
        const website = "youtube"
        console.log(`${username} ${website}`)
    }
    // console.log(website);
}
// console.log(username);



//*******************interesting ***********/

function addone(num){
    return num +1
}
console.log(addone(6))

const addTwo = function(num){
    return num +2
}