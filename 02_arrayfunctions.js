const paksing = ["nusrat fateh ali khan", "atif aslam", "afsar hussein"]
const indsing = ["kishore kumar", "arjit singh", "shankar mahadevan"]

//paksing.push(indsing)

//console.log(paksing);// [ 'nusrat fateh ali khan', 'atif aslam', 'afsar hussein',  [ 'kishore kumar', 'arjit singh', 'shankar mahadevan' ]]

// push() adds one element at the end. It doesn't unpack arrays. It adds whatever you give it as a single element. Here it treats "indsing" as a single element to be added in the array of "paksing".
// Resulted Array becomes nested array i.e.(array inside array).

//console.log(paksing[3][1]); // arjit singh  

//In array "paksing", the third index element is all of "indsing" array. In the "indsing" array, the [1] index contains "arjit singh". So the output is "arjit singh".

//paksing.concat(indsing)
//console.log(paksing);// [ 'nusrat fateh ali khan',  'atif aslam',  'afsar hussein',  [ 'kishore kumar', 'arjit singh''shankar mahadevan' ]]

// concat combines two or more arrays.
// concat returns a new array without modifying the existing array. 

const newpaksongs = [...paksing,...indsing]

console.log(newpaksongs); // [  'nusrat fateh ali khan',  'atif aslam',  'afsar hussein',  'kishore kumar',  'arjit singh',  'shankar mahadevan']

// Here we used the spread operator ([...]) which “spreads” or “unpacks” an iterable into individual elements.

const another_arr = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_arr= another_arr.flat(Infinity)

console.log(real_arr); // [  1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5 ]

// flat method removes nesting in the original array.

console.log(Array.isArray("Pratyush")) // false --> asks if "Pratyush" is an array

console.log(Array.from("Dhanush")); // [ 'D', 'h', 'a', 'n', 'u', 's', 'h'] --> from method creates an array from an itrable object

console.log(Array.from({name: "bapu"})); //[] it gives an empty array
// Because: { name: "bapu" } is:

// ❌ NOT iterable

// ❌ NOT array-like (no length property)

// So JavaScript has nothing to convert into an array.

let score1 = 100
let score2 = 200
let score3 = 300


console.log(Array.of(score1, score2, score3)); // [ 100, 200, 300]

// Array.of() creates a new array from the arguments you pass to it.
// It does not care whether the arguments are numbers, strings, variables, etc.





