// singleton

// object literals

const mySym = Symbol("key")

const jsUser = {        // {} --> this is  an object
    name: "Pratyush",    // key: name; value: "Pratyush"
    "full name": "pratyush murmu",
    age: 21,   
    [mySym]: "mykey",  
    location: "Paradeep",
    email: "pratyushmurmu2004@gmail.com",
    isLoggedIn: false,
    lastLoggedIn: ["Tuesday", "Wednesday","Thursday","Friday", "Sunday"] 
} 

console.log(jsUser.email);// pratyushmurmu2004@gmail.com
console.log(jsUser["email"]);// pratyushmurmu2004@gmail.com
console.log(jsUser["full name"]);// couldn't be accessed using console.log(jsUser."full name")
console.log(jsUser.mySym);// mykey (without square brackets "[]")
console.log(typeof jsUser.mySym);// string
console.log(jsUser[mySym]);

jsUser.email = "pratyush24@gmail.com"
//Object.freeze(jsUser)
jsUser.email = "pratyushmajhi@gmail.com"
console.log(jsUser);

//{ name: 'Pratyush',full name': 'pratyush murmu',age: 21,location: 'Paradeep',email: 'pratyush24@gmail.com',isLoggedIn: false,lastLoggedIn: [ 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Sunday' ],Symbol(key): 'mykey'}

// The code after freeze are not accessed.

// Here the output is Symbol(key): 'key' when the code is [mySym]: "mykey"
// But for mySym: "mykey" the output is mySym: "mykey"

jsUser.greeting = function(){
    console.log("Hello js user");// "Hello js user"
}
//console.log(jsUser.greeting());// undefined
//console.log(jsUser.greeting);// [Function (anonymous)]

jsUser.greetingTwo = function(){
    console.log(`Hello js user, I am ${this.name}`);// Hello js user, I am Pratyush
}
console.log(jsUser.greeting()); // undefined

console.log(jsUser.greetingTwo());// undefined


