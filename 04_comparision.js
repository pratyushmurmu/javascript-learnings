
///**************************************Comparision Of Datatypes in JavaScript*************************************************///

//console.log(2 > 1);
//console.log(2 >= 1);
//console.log(2 < 1);
//console.log(2 == 1);
//console.log(2 != 1);

console.log("2" > 1);//true
console.log("02" > 1);//true

console.log(null > 0);//false
console.log(null >= 0);//true
console.log(null == 0);//false
console.log(null < 0);//false

//**** The reason is that an equality check == and comparisions (>,<,>=,<=) work differently. Comparisions convert null to a number, treating it as 0. That's why null >= 0 is true and null > 0 is false. ****//

console.log(undefined > 0);//false
console.log(undefined == 0);//false
console.log(undefined < 0);//false

// We usually avoid comparisions of "undefined" and "null" in real life scenarios

// Strict Check (===) //
console.log("2" === 2); //false since both are different datatypes i.e. (string === int)










