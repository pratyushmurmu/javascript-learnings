const name = "bapu"
const repoCount = 7

//console.log(name + repoCount +"Value"); //Pretty outdated method

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); // Use `` (backtracks) not  ''(single quotes). Single quotes are used for strings 

// Output: Hello my name is bapu and my repo count is 7

const gameName = new String('ghost oftshushima')

console.log(gameName[0]);//g
console.log(gameName.__proto__); // use double underscore on both sides of proto
//Used to access prototype Output: {}

console.log(gameName.length);
console.log(gameName.toUpperCase);//[Function: toUpperCase]
console.log(gameName.toLowerCase);//[Function: toLowerCase]
// These are function references not call. For calling use "()"

console.log(gameName.toUpperCase());//GHOSTOFTSHUSHIMA
console.log(gameName.toLowerCase());//ghostoftshushima

console.log(gameName.charAt(8));//s .charAt(index number/position)
console.log(gameName.indexOf('t'));//4  .indexOf('String')
console.log(gameName.lastIndexOf('t')); // 7  .lastIndexOf('string) in case of more than 1 same alphabet

const newString = gameName.substring(0,5)
console.log(newString);//ghost

//const anotherString = gameName.slice(-2,6)
//console.log(anotherString);// empty string
// Key rule of slice():

//It extracts characters from start index up to (but not including) end index
//❗ If start ≥ end → result is an empty string ""
//Here starting index: -2
// length - 2 = 14
// 14 > end index: 6
// Thus empty string

// Let's take another example:
const anotherString = gameName.slice(-2,15)
console.log(anotherString);//m since length-2: 14 < end index: 15

const diffString = " jatin "
console.log(diffString);
console.log(diffString.trim());

const url = "https://-atyushmurmu.com"

console.log(url.replace('-','pr')); // https://pratyushmurmu.com

console.log(url.includes('murmu')); // true

const str = gameName.split(" ");
console.log(str[0]);// ghost

