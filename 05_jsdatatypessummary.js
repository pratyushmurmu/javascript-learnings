                        //***********      DATATYPES IN JAVASCRIPT     **************//



// There are two types of Dataypes in JavaScript.

// They are:  i) Primitive  :Primitive data types in JavaScript represent simple, immutable values directly stored   in memory, ensuring efficiency in both memory usage and performance.

// 7 types: Numeric Type:- Number and bigint  and
//  Non- Numeric Type:-  String, Boolean, Null, Undefined, Symbol

const score = 100
const scoreValue = 100.4  // There is no decimal or float type here

// All decimal and real numbers are treated as Number datatype.

const isLoggedIn = false;
const outsideTemp = null;
let userMail; // let used for declaring variables whose values can change.

const id = Symbol('478')
const anotherId = Symbol('478')

console.log(id === anotherId);  // false

const bigNo = BigInt(1908437598342569813425) // 1908437598342569787392n 
console.log(bigNo);





// ii) Non-Primitive:  The data types that are derived from primitive data types are known as non-primitive data types. It is also known as derived data types or reference data types.

// Types: Objects, Array, Functions, date object, regular expression

//Array:
const protagonist = ["Odesseus", "Murphy", "Oppenheimer"]
let a2 = ["Odesseus",2, {name:" Object"}];
console.log(protagonist);
console.log(a2);


//Objects:
let gfg = {
    type: "Company",
    location: "Noida"
}
console.log(gfg.type)

//Functions:
// Defining a function to greet a user
function greet(name) { return "Hello, " + name + "!"; }
// Calling the function
console.log(greet("Ajay"));


//date object:
// Creating a new Date object for the
// current date and time
let currentDate = new Date();

// Displaying the current date and time
console.log(currentDate);



//regular expression:
// Creating a regular expression to match the word "hello"
let pattern = /hello/;

// Testing the pattern against a string
// Returns false because "hello" is not present
let result = pattern.test("Hello, world!"); 

console.log(result);


//JavaScript is a dynamically typed language. ✅

//🔍 What does “dynamically typed” mean?

//In a dynamically typed language:

//You don’t declare variable types

//The type is decided at runtime

//A variable’s type can change while the program runs

//Example (JavaScript)
let x = 10;        // x is a number
x = "Hello";      // now x is a string
x = true;         // now x is a boolean


//This is allowed in JavaScript → dynamic typing.

console.log(typeof bigNo);// bigint
console.log(typeof protagonist); //object
console.log(typeof a2);// object
console.log(typeof greet); //function

//Because arrays are a special kind of object in JavaScript.


//🧠 Remember this rule

//Use typeof for primitives, Array.isArray() for arrays.

//Data type	Check
// Number:  typeof x === "number"
// String: typeof x === "string"
// Boolean:	typeof x === "boolean"
//  Function:	typeof x === "function"
//   Array:	Array.isArray(x)
//    Object: typeof x === "object" 
