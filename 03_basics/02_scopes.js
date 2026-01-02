//let a = 300

// {}  --> scope
if(true){
let a = 10
const b = 20
var c = 30
} 
// console.log(a);// shows error; 300 if it is global scope
// console.log(b);// shows error
// console.log(c);// 30

// let and const are block scopes because they work and exist only inside {}
// While var is a function/global scope. It rejects {}

// ----------------------------------------------------------------------------------------------------------------------
let a= 300
if(true){
let a = 10
const b = 20
console.log("INNER: ", a); // INNER: 10
} 
 console.log(a); // 300

 //------------------------------------NESTED SCOPES----------------------------------------------------------------------

// function one(){
//    const username = "pratyush"
//    function two(){
//        const website = "github"
//        console.log(username);// lexical scoping (closure). // pratyush
//    }
    // console.log(website);// error
//    two() // agar yahaan inner function two() execute nahi hoga toh one() bhi execute nahi hoga
    
// }
// one()

// Yahaan agar function two() ko called out kare to koyi result nahi aayegi kyunki function one () call hone ke baad function two() sirf define hi hui hai call nahin. Similarly agar function one() ko called out kare to function two() call hogi par function one() ke bina call ke ye output nahi degi.


// Rule:

// Inner functions can access variables of their outer functions.
// " Parent functions CANNOT access child function variables."
// Scope only flows inward, never outward.
// Like agar  bachche parents se ice-cream chori karenge to no problem but agar parents bachche se ice-cream chori karenge toh problem hai

// The error occurs because variables declared inside an inner function are not accessible in the outer function, while inner functions can access variables of their outer functions due to lexical scoping.

// Lexical Scoping:
// Lexical scoping means a function can access variables from its outer scope based on where it is defined in the code.

// Closure:
// A closure is a function that remembers variables from its lexical scope even after the outer function has finished executing.

 function one(){
    const username = "pratyush"
    function two(){
        const website = "github"
        console.log(username);// lexical scoping (closure). // pratyush
    }
    // console.log(website);// error
    two() // agar yahaan inner function two() execute nahi hoga toh one() bhi execute nahi hoga
    
 }

 if (true) {
    const username = "pratyush"
    if(username === "pratyush"){
        const website = "github"
        console.log(username + website);// pratyushgithub
        
    }
    //console.log(website);// error
    
 }
 //console.log(username);// error
 
 // Outer if :  if (true) {
   //        const username = "pratyush"
 //    }

 // Inner if: 
    // if(username === "pratyush"){
       // const website = "github"
        // console.log(username + website);
        
    // }

// In the end of the inner loop, console.log(website) is called. Since const is block scope, it will not run outside the loop. So it doesn't print website.

// After cutting out console.log(website), the error will remain since after the outer loop ends console.log(username) comes. Here since username is declared using const and since const is a block scope, so it cannot be accessed outside the loop.

// Access allowed:

// Inner → outer ✅

// Outer → inner ❌

// Global → block ❌

// -------------------------------------------interesting-------------------------------------------------------------------


//addone(5)// no result
console.log(addone(5)); // 6

function addone (num){
    return num + 1
}

//addone(5)// no result

addTwo(5) // error
const addTwo = function(num) {
    return num + 2
}

//console.log(addone(5)); // 6

//function addone (num){
  //  return num + 1
//}
// In this first case, this is a function declaration.
//function addone (num){
//    return num + 1
//}

//What JS does behind the scenes (hoisting):

//JavaScript hoists function declarations completely to the top of their scope.

//Internally, JS sees it like this:

//function addone(num){
//    return num + 1
//}

//console.log(addone(5));

//✅ So when addone(5) is called, the function already exists in memory.

//---------------------------------------------------------------------------------------------------
// Here error comes

// But in second case, this is a function expression.
//const addTwo = function(num) {
//    return num + 2
//}

//Here:

//addTwo is a variable declared with const

//The function is assigned later

//Hoisting behavior:

//const variables are hoisted, but:

//They stay in the Temporal Dead Zone (TDZ)

//They cannot be accessed before initialization

//So JS sees this internally:

// addTwo exists but is uninitialized (TDZ)

//addTwo(5); // ❌ ReferenceError

//const addTwo = function(num) {
//    return num + 2
//}

//At the moment addTwo(5) runs:

//addTwo is not yet assigned

//❌ Error: Cannot access 'addTwo' before initialization

//addone works because function declarations are fully hoisted.
//addTwo fails because it’s a function expression assigned to a const, and const variables cannot be accessed before initialization due to the Temporal Dead Zone.




