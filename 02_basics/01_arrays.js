// array

const myArray = [0, 1, 2, 3, 4, 5]
console.log(myArray[2]);// 2

// In JavaScript, arrays aren't primitives but are instead Array objects with the following core characteristics:

// i) JavaScript arrays are resizable and can contain a mix of different data types. (When those characteristics are undesirable, use typed arrays instead.)
// ii) JavaScript arrays are not associative arrays and so, array elements cannot be accessed using arbitrary strings as indexes, but must be accessed using nonnegative integers (or their respective string form) as indexes.
// iii) JavaScript arrays are zero-indexed: the first element of an array is at index 0, the second is at index 1, and so on — and the last element is at the value of the array's length property minus 1.
// iv) JavaScript array-copy operations create shallow copies. (All standard built-in copy operations with any JavaScript objects create shallow copies, rather than deep copies). { shallow copy: Yaani copied  array me jo changes honge wohi changes original array me bhi honge and Deep copy: Yaani copied array ke changes original arrays me reflect nahi hogi}

const movieDir = ["stephen speiberg", "james cameron", "denis villeneuve", "christopher nolan", "ss rajamouli", "aditya dhar"]

const myArray2 = new Array(1, 2, 3, 4, 5)
console.log(myArray2[3]);// 4

// Array methods

//push

myArray.push(7)
console.log(myArray); // [0, 1, 2, 3, 4, 5, 7] modified original array

myArray.pop()
console.log(myArray); // removes the last / recently added element in the array

myArray.unshift(6)
console.log(myArray);// [6,0,1,2,3,4,5] adds the new element 6 at the beginning ot he array

myArray.shift(6)
console.log(myArray);// [0,1,2,3,4,5] removes 6

console.log(myArray.includes(8));// false (since 8 is not present in this array)
console.log(myArray.indexOf(4));// 4 (4th index me hai 4)

const newArr = myArray.join()
console.log(myArray);// [ 0, 1, 2, 3, 4, 5 ]
console.log(typeof newArr);// string
console.log(newArr);// 0,1,2,3,4,5

// slice and splice

console.log("A ", myArray);// A  [ 0, 1, 2, 3, 4, 5 ]

const myArray1 = myArray.slice(1,3)
console.log(myArray1);// [1,2] (1,3)--> start index(1) included; end index(3) excluded
// Starts at index 1 → included

// Ends at index 3 → excluded

// Creates a new array

// Original array remains unchanged

console.log("B ", myArray);// B  [ 0, 1, 2, 3, 4, 5 ]

const myn1 = myArray.splice(1,3)
console.log("C ", myArray);// C  [ 0, 4, 5 ]
// Starts at index 1

// Removes 3 elements from there

// Modifies the original array

// Returns the removed elements
console.log(myn1);// [ 1, 2, 3 ]

// myn1   → [1, 2, 3]
// myArray → [0, 4, 5]



