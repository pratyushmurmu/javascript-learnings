// if statement

//if ( 3 !== "3") {
//    console.log("executed");
    
//} else{
//    console.log("cannot execute");
    
//}

//const budget = 3000;

//if (budget > 3000) {
  //  console.log("there are a lot of options for you");
    
//}else{
  //  console.log("you have to be careful with your budget");
//}

const age = 21;
if (age > 18) {
    const sex = "male";
    console.log(`you are ${age} and your sex is ${sex}`);// you are 21 and your sex is male
    
}
//console.log(`you are ${age} and your sex is ${sex}`);// error

const balance = 120000
let ward = "ramesh";
//if(balance > 100000) console.log(`sorry your ward ${ward} is not eligible for the scholarship`);
//sorry your ward ramesh is not eligible for the scholarship
if(balance < 100000){
    console.log("You are eligible for the loan");
} else if(balance >= 5000){
    console.log("You are eligible for the credit card");
} else{
    console.log("You are eligible for the scholarship");
}

// You are eligible for the credit card
 const boards = "pass"
 const jee = 77.0
 const isLoggedIn = true
 if(boards === "pass" && jee >= 75 && isLoggedIn){
    console.log("You are eligible for the admission");//You are eligible for the admission
}
if(boards === "pass" || jee <= 75){
    console.log("Get the f**k out of here"); // Get the f**k out of here
    
}
// Both console.log statements are executed