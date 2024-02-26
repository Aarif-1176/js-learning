const userEmail = "aarif@gmail.com"
if(userEmail){
    console.log("got your email");
}
else{
    console.log("sorry didn't receive your mail");
}

/*
falsy values

fasle
0
-0
BigInt
0n
""
null
undefined
NaN
*/


/*
truty values
true
"0"
'false'
" "
[]
function(){}
*/


const address = []
if(address.length === 0){
    console.log("address found");
}
else{
    console.log("sorry didn't receive your address");
}

const emptyObj ={}

if(Object.keys(emptyObj).length === 0){
    console.log("object is empty");
}


// Nullish coalescing operator (??): null undefined
let val1,val2
val1 = 5 ?? 10
val1 = null ?? 16
val2 = undefined?? null
console.log(val1);
console.log(val2);



// ternary operator

// condition ? true : false

const iceTeaPrice =100
iceTeaPrice<80 ? console.log("cheap"): console.log("expensive")