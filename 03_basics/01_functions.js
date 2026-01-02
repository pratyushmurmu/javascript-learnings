
function sayMyName (){
console.log("B");
console.log("A");
console.log("P");
console.log("U");
}


sayMyName() 
// B
// A
// P
// U

// function addTwonos(number1, number2){ // Here the (number1, number2) are parameters and  (4, 99) are arguments.
//    console.log(number1 + number2)
// }

// addTwonos() // NaN
// addTwonos(4,99) // 103

// addTwonos(3,"8") // 38

// addTwonos(7, null) // 7

// By declaring variables:
// -------------------------------------------------------------------------------------------------------------------
// function addTwonos(number1, number2){ 
   // let result = number1 + number2
    console.log("Bapu"); // Remember this output comes only if it comes before return result
    
    //return result
    // console.log("Bapu"); // No result
//}

// const result = addTwonos(3, 8)

// console.log("Result:", result); // Result: 11

// Without using much variables:
// ----------------------------------------------------------------------------------------------------------------------
function addTwonos(number1, number2){ 
    return number1 + number2
}
 const result = addTwonos(56, 46)
//console.log("Result:", result); // Result: 102

//function loginUsermessage(username){
    //return `${username} just logged in`
//}

//loginUsermessage("pratyush") // no result since it's returned not printed
//console.log(loginUsermessage("pratyush")); // pratyush just logged in
//console.log(loginUsermessage());// undefined just logged in

// we can use if conditionals too
// -----------------------------------------------------------------------------------------------------------------------
function loginUsermessage(username){
    if (username === undefined) {
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

console.log(loginUsermessage());
//Please enter a username
//undefined

// OR
// ------------------------------------------------------------------------------------------------------------------------

function loginUsermessage(username){
    if (!username) {
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

console.log(loginUsermessage());

// Please enter a username
// undefined

//function calculateCartPrice(no1){
  //  return no1
//}

//console.log(calculateCartPrice(88));// 88

function calculateCartPrice(...no1){ // Here (...no1) rest operator is used.
    return no1
}

console.log(calculateCartPrice(456, 455, 679));// [ 456, 455, 679 ] --> in the form of array
// Uses ... to collect all remaining arguments into an array. Very useful when you don’t know how many arguments will be passed.

// -------------------------------------------------------------------------------------------------------------------------
function calculateCartcost(value1, value2,...num1){
    return num1
}

console.log(calculateCartcost(450, 568, 980, 678, 456));// [ 980, 678, 456 ] (since value1 = 450 and value2 = 568 and it returns and prints only num1 i.e. [ 980, 678, 456 ])

// ------------------------------------------------------------------------------------------------------------------------

const user = {
    username: "dhanush",
    contribution: 1299
}

function handleObject(user) {
    console.log(`Username is ${user.username} and his/her contribution is ${user.contribution}`);  
}
// Here no output since the object and the function is stored and but the function is not called like later 

handleObject(user)

// Username is dhanush and his/her contribution is 1299

// const myNewArr = [200, 400, 600, 800, 1000]

// function returnSecondValue(getArr){
   //  return getArr[2,4]
//}

// console.log(returnSecondValue(myNewArr)); // 1000
// getArr[2,4] returns getArr[4] because JavaScript’s comma operator evaluates all expressions but returns only the last one.
// -----------------------------------------------------------------------------------------------------------------------
const myNewArr = [200, 400, 600, 800, 1000]

function returnSecondValue(getArr){
     return [getArr[2], getArr[4]]
}

console.log(returnSecondValue(myNewArr)); // [ 600, 1000 ]

