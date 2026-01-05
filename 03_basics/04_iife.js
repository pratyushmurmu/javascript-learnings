// Immediately Invoked Function Expression (IIFE)

(function chai() {
    // named IIFE
    console.log(`DB CONNECTED`);
    
})(); // DB CONNECTED


// Why do we use IIFE? (Core Reasons)
// 1️⃣ To avoid global scope pollution 🔒
// Before let and const, JS had only var, which polluted the global scope.

// var count = 10;


// Anyone could accidentally overwrite it.

// Using IIFE
// (function () {
//    var count = 10;
//    console.log(count);
// })();


// ✔ count exists only inside the IIFE
// ❌ Not accessible outside

// This protects your variables.

// 2️⃣ To create a private scope (encapsulation)
// (function () {
//    const secret = "hidden";
//    console.log(secret);
// })();

// console.log(secret); // ❌ Error

// 3️⃣ To execute code immediately (one-time setup)
// Useful for:

// Initialization code

// Config setup

// Polyfills

// Event listeners

// (() => {
//    console.log("App initialized");
// })();


// Runs once, then gone.
// 4️⃣ To avoid variable clashes in large projects
// -----------------------------------------------------------------------------------------------------------------------

( () => {
    console.log(`DB CONNECTED TO `);
    
})(); // DB CONNECTED TO
// -----------------------------------------------------------------------------------------------------------------------
( (name) => {
    console.log(`DB CONNECTED TO ${name}`);
    
})('pratyush'); // DB CONNECTED TO pratyush








