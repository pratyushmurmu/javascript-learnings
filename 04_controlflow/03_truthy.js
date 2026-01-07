const userEmail = []

if (userEmail) {
    console.log("User email is valid");
}else{
    console.log("User email is invalid. Please provide a valid email.");
}
// User email is valid

// User email is valid // (because an empty array is truthy in JavaScript)


// falsy values in JavaScript:
// false, 0, -0, "" (empty strings), BigInt 0n, null, undefined, NaN

// The rest are truthy values in JavaScript.ie., "0" (string with zero), 'false', " " (empty string with space inside), function(){} (empty function), {}

if (userEmail.length === 0) {
    console.log("Array is empty"); // Array is empty
    
}
const emptyObj = {}

if(Object.keys(emptyObj).length === 0){
    console.log("Object is empty"); // Object is empty
}

// --------------------------------------------------------------------------------------------------------------------------

// Nullish Coalescing Operator (??): null undefined

let val1;
// val1= 4 ?? 56
//val1 = null ?? 88
// val1 = undefined ?? 23
val1 = null ?? 23 ?? 87
// console.log(val1); // 4
// console.log(val1); // 88
// console.log(val1); // 23
console.log(val1);// 23

// ---------------------------------------------------------------------------------------------------------------------------

// Ternary Operator

// condition ? true : false

const seats = 344
seats >=225 ? console.log("less than 344") : console.log("more than 344"); // less than 344





