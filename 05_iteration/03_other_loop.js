// for of loop

/*
for...of statement
The for...of statement creates a loop Iterating over iterable objects (including Array, Map, Set, arguments object and so on), invoking a custom iteration hook with statements to be executed for the value of each distinct property
*/

const arr = [1,2,3,4,5]

for (const i of arr) {
    console.log(i);
}


const greeting ="hello world"
for (const i of greeting) {
    console.log(`each char is ${i}`);
    
}

// map
/*
The Map object holds key-value pairs and remembers the original insertion order of the keys. Any value (both objects and primitive values) may be used as either a key or a value.  this holds only unique values
*/
const map = new Map()
map.set("In", "india")
map.set("usa", "united states of america")
map.set("eng", "england")

console.log(map);

for (const [key, value] of map){
    console.log(key , ':-', value);
}

// const myObject ={
//     'game1': 'nfs',
//     'game2': 'real cricket ',
//     'game3': 'spiderman'
// }
  
// this will not work
// for (const [key,values] of myObject) {
//     console.log( `${key}:-${values}` );
    
// } 

// for in loop is used for iterating objects 
// The for...in statement iterates over all enumerable string properties of an object (ignoring properties keyed by symbols), including inherited enumerable properties.


const oneObject ={
    js:'javacript',
    cpp:"c++",
    rb:'ruby',
    swift:'swift by apple'
}

for (const key in oneObject) {
    console.log(`${key} shortcut is for ${oneObject[key]}`);
}


const programming = ['js','rb',"cpp","java"]
for(const key in programming){
    console.log(`${key} is the index for ${programming[key]}`);
}