const coding = ["js", "java", "c", "c++", "python", "ruby"]

const value = coding.forEach((item) => {
    console.log(item);// js, java, c, c++, python, ruby
    return item
})
console.log(value);// undefined
//❌ Why value is undefined
//🚨 Key Rule:

//forEach() ALWAYS returns undefined

//Even if you:

//return something inside the callback

//return values multiple times

//👉 JavaScript ignores the return value of the callback in forEach.

//🧠 What return item actually does
//return item;

//This:
//returns item only to the internal forEach engine
//does NOT collect or store it
//does NOT affect the outer variable value

//So effectively:

//const value = undefined;
//📌 Internal working (simplified)
//forEach(() => {
   // run function
   // ignore return
//});
//That’s it. No collection. No return.

//const theNum = [1,2,3,4,5,6,7,8,9,10]
// const fill = theNum.filter((num) => num > 3)
// console.log(fill);// [4,5,6,7,8,9,10]
 
// filter() is an array method used to select elements that satisfy a condition and return them in a new array.

const theNum = [1,2,3,4,5,6,7,8,9,10]
// const fill = theNum.filter((num) => {
//   return num > 3
//})
// console.log(fill);// [] (num > 3)
// console.log(fill);// [4,5,6,7,8,9,10] (return num > 3)

//When you use curly braces {} in an arrow function, you must explicitly return a value.

//What your callback actually returns:
//(num) => {
//    num > 3   // NO return
//}

//➡️ JavaScript treats this as:
//(num) => {
//    return undefined;
//}
//And since undefined is falsy, filter() removes every element.

// For correct output, put return inside {}

// By forEach() method

const fill = []
theNum.forEach((num) => {
    if(num <5){
        fill.push(num)
    }
})

console.log(fill);// [ 1, 2, 3, 4 ]

// Take theNum.forEach((num)) instead of fill.forEach((num)) which gives [] (empty array)

const films = [
    {name: "Dangal", boxoffice: 2024, imdb: 8.3, year:2016},
     {name: "Bahubali 2: The Conclusion", boxoffice: 1810.60, imdb: 8.2, year:2017},
      {name: "Pushpa 2: The Rule", boxoffice: 1800, imdb:6.1 , year:2024},
       {name: "RRR", boxoffice: 1387, imdb: 7.8, year:2022},
        {name: "Dhurandhar", boxoffice: 1265, imdb: 8.6, year:2025},
         {name: "KGF Chapter 2", boxoffice: 1250, imdb: 8.2, year:2022},
          {name: "Jawan", boxoffice: 1148.32, imdb: 6.9, year:2023},
];


//console.log(highBoxOffice);

//films.filter((movies) => movies.year >= 2024)
//console.log(films);// gives all the elements in the array

//const highBoxOffice = films.filter((movies) => movies.imdb > 8.0)
//highBoxOffice = films.filter((movies) => movies.year >= 2024)
//console.log(highBoxOffice); // error because The error occurs because a variable declared with const cannot be reassigned to a new value.


//[
//  { name: 'Dangal', boxoffice: 2024, imdb: 8.3, year: 2016 },
//  {
//    name: 'Bahubali 2: The Conclusion',
//    boxoffice: 1810.6,
//    imdb: 8.2,
//    year: 2017
//  },
//  { name: 'Dhurandhar', boxoffice: 1265, imdb: 8.6, year: 2025 },
//  { name: 'KGF Chapter 2', boxoffice: 1250, imdb: 8.2, year: 2022 }
//]


let highBoxOffice = films.filter((movies) => movies.imdb > 8.0)
highBoxOffice = films.filter((movies) => movies.year >= 2024)
console.log(highBoxOffice);

//[
//  {
//    name: 'Pushpa 2: The Rule',
//    boxoffice: 1800,
//    imdb: 6.1,
//    year: 2024
//  },
//  { name: 'Dhurandhar', boxoffice: 1265, imdb: 8.6, year: 2025 }
//]


