// Loop in js are sweeter than in rust

for(let index = 0; index < 10; index++){
    console.log(index);
}
for(let index = 0; index < 10; index++){
    if (index ==6){
        // console.log(index + " is best number");
        console.log(`${index} is best number`);  // more readaable and more clean than above code

    }
    console.log(index)
}

// nested loop

for(let i =1; i<=10 ; i++){
    console.log(`table for  ${i}`);
    for(let j =1 ; j<=10;j++){
        console.log(`${i} * ${j} = ${i*j}`);
    }
}


let myArray =["flash", "batman", "spiderman"]
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);
    
}

// break

for (let index = 1; index <=20; index++) {
    if(index == 5){
        break
    }
    console.log(`value of i is ${index}`);
}

// continue

for (let index = 1; index <=20; index++) {
    if(index == 5){
        continue
    }
    console.log(`value of i is ${index}`);
}

