//const user = {
    //username: "surabhee",
    //userid: 9875,

    //welcomeMessage: function(){
    //    console.log(`Hi ${this.username} , welcome to website`);
    //    console.log(this);// no output
        
  //  }
//}

//user.welcomeMessage() // Hi surabhee , welcome to website

//user.username= "shree"
//user.welcomeMessage() // Hi shree , welcome to website since it's a function expression
//-----------------------------------------------------------------------------------------------------------------------
// Output of using console.log(this) before the scope

//Hi surabhee , welcome to website
//{
//  username: 'surabhee',
//  userid: 9875,
//  welcomeMessage: [Function: welcomeMessage]
//}
//Hi shree , welcome to website
//{
//  username: 'shree',
//  userid: 9875,
//  welcomeMessage: [Function: welcomeMessage]
//}

//-----------------------------------------------------------------------------------------------------------------------
const user = {
  //  username: "surabhee",
  //  userid: 9875,

    welcomeMessage: function(){
  //      console.log(`Hi ${this.username} , welcome to website`);
        
    }
}

user.welcomeMessage() 

//user.username= "shree"
user.welcomeMessage() 
//console.log(this);

// Output for using the console.log(this) after the scope:
// Hi surabhee , welcome to website
// Hi shree , welcome to website
// {}

//function chai(){
//    console.log(this);
    
//}
//chai()

//
//<ref *1> Object [global] {
//  global: [Circular *1],
//  clearImmediate: [Function: clearImmediate],
//  setImmediate: [Function: setImmediate] {
//    Symbol(nodejs.util.promisify.custom): [Getter]
//  },
//  clearInterval: [Function: clearInterval],
//  clearTimeout: [Function: clearTimeout],
//  setInterval: [Function: setInterval],
//  setTimeout: [Function: setTimeout] {
//    Symbol(nodejs.util.promisify.custom): [Getter]
//  },
//  queueMicrotask: [Function: queueMicrotask],
//  structuredClone: [Function: structuredClone],
//  atob: [Function: atob],
//  btoa: [Function: btoa],
//  performance: [Getter/Setter],
//  fetch: [Function: fetch],
//  crypto: [Getter],
//  navigator: [Getter]
//}

//-------------------------------------------------------------------------------------------------------------------------
//function chai(){
//   let username= "mohan"
//    console.log(this.username);
    
//}
//chai()
// The output of it is undefined

//-------------------------------------------------------------------------------------------------------------------------

//const chai = function(){
//    let username = "sheetal"
//    console.log(this.username);
    
//}
//chai()

// The output of it is undefined
//-------------------------------------------------------------------------------------------------------------------------

//const chai = () => {
//    let username = "sheetal"
//    console.log(this.username);
//}
//chai()
// The output of it is undefined
//-----------------------------------------------------------------------------------------------------------------------
const chai = () => {      // Here => is arrow function
    let username = "sheetal"
    console.log(this);
}
chai()
// The output of it is {}

// Syntax of arrow function: () => {}

//const addTwo = (no1 , no2) => {         // (basic arrow function)
//    return no1 + no2
//}

// OR

//const addTwo = (no1 , no2) => (no1 + no2)  //(implicit return) used heavily in React
//console.log(addTwo(56,44)); // 100


// In both cases. the output is 100.
//-----------------------------------------------------------------------------------------------------------------------
// Object return karna hai

const addTwo = (no1 , no2) => ({username: "sulisha"})

console.log(addTwo(4,96)); // { username: 'sulisha' }

//Explanation:

//Important arrow function rule (VERY IMPORTANT 🔥)
//{} after => is confusing
//❌ Without parentheses → treated as a function body
//() => { username: "sulisha" }  // returns undefined

//✅ With parentheses → treated as an object
//() => ({ username: "sulisha" }) // returns object


//That’s why you used parentheses — correctly.

//const myArray = [4,67,2,6]

//myArray.forEach()   (uesd in loops extensively)




