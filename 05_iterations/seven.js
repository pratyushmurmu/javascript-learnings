const mynumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//const newNums = mynumbers.map((num) => num + 20)
//console.log(newNums);
//[ 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]

// Now let's look at chaining map methods
//const newNums = mynumbers.map((num) => num * 20).map((num) => num - 4)
//console.log(newNums);
//[ 16,  36,  56,  76, 96, 116, 136, 156, 176, 196]

const newNums = mynumbers.map((num) => num * 20).map((num) => num - 4).filter((num) => num >= 150)
console.log(newNums);
// [ 156, 176, 196 ]

//---------------------------------------------------------------------------------------------------------

// Reduce method:

// The reduce() method of Array instances executes a user-supplied "reducer" callback function on each element of the array, in order, passing in the return value from the calculation on the preceding element. The final result of running the reducer across all elements of the array is a single value.

const array = [1, 2, 3, 4];
//const sum = array.reduce(function(accumulator, currentValue){
//    console.log(`accumulator: ${accumulator} & currentValue: ${currentValue}`);
    // accumulator: 0 & currentValue: 1
    // accumulator: 1 & currentValue: 2
    // accumulator: 3 & currentValue: 3
    // accumulator: 6 & currentValue: 4
//    return accumulator + currentValue
//}, 0)

//console.log(sum);// 10

// In arrow function method/syntax:

const sum = array.reduce((accumulator,currentValue) => (accumulator + currentValue),0)
console.log(sum);// 10

const films = [
    {name: "Dangal", boxoffice: 2024, imdb: 8.3, year:2016},
     {name: "Bahubali 2: The Conclusion", boxoffice: 1810.60, imdb: 8.2, year:2017},
      {name: "Pushpa 2: The Rule", boxoffice: 1800, imdb:6.1 , year:2024},
       {name: "RRR", boxoffice: 1387, imdb: 7.8, year:2022},
        {name: "Dhurandhar", boxoffice: 1265, imdb: 8.6, year:2025},
         {name: "KGF Chapter 2", boxoffice: 1250, imdb: 8.2, year:2022},
          {name: "Jawan", boxoffice: 1148.32, imdb: 6.9, year:2023},
];

const highBoxOffice = films.reduce((accumulator,movies) =>{
    console.log(`Accumulator: ${accumulator} and boxoffice: ${movies.boxoffice}`);
    return accumulator + movies.boxoffice
},0)

console.log(highBoxOffice)

//Accumulator: 0 and boxoffice: 2024
//Accumulator: 2024 and boxoffice: 1810.6
//Accumulator: 3834.6 and boxoffice: 1800
//Accumulator: 5634.6 and boxoffice: 1387
//Accumulator: 7021.6 and boxoffice: 1265
//Accumulator: 8286.6 and boxoffice: 1250
//Accumulator: 9536.6 and boxoffice: 1148.32
//10684.92 ---> Total boxoffice collection of all films


//❌ Your problematic code
//const highBoxOffice = films.reduce((accumulator, movies) => 
//  (accumulator + movies.boxoffice), 
//  0
//)

console.log(`Accumulator: ${accumulator} and boxoffice: ${movies.boxoffice}`);

//🔴 Why the error occurs
//❗ accumulator and movies do not exist here

//They are:

//parameters of the callback function
//scoped only inside reduce()

//So outside reduce(), JavaScript has no idea what accumulator or movies are.
//That’s why you get an error like:

//ReferenceError: accumulator is not defined
//🧠 Scope explanation (important)
//films.reduce((accumulator, movies) => {
   // accumulator & movies EXIST here
//})
// ❌ NOT accessible here
//JavaScript uses function scope / block scope, so variables declared inside a function cannot be accessed outside.







