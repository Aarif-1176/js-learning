// Immediate Invoked Function expression (IIFE)

// To avoid polluting the global scope, all variables and functions are encapsulated within an IIFE.  

(function chai(){
    console.log(`DB CONNECETED`)
})();

// In the above code, the function is executed immediately as it is enclosed within parentheses `()`.  
// This pattern allows us to create a private namespace for our application without exposing any of its components to the global scope.  The function
// This pattern allows us to create a private namespace for our application which prevents any variable or  function from being accessed from the global scope.
// This pattern allows us to create a private namespace for our application which prevents any variable or  
// function from leaking into the global scope. It also helps in testing our code isolating it from the rest of the project. 
// function from leaking into the global scope


(() =>{
    console.log(`DB CONNECETED TWO`)
})();