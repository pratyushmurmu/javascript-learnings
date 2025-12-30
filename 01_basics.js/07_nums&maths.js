const score = 400;
console.log(score);

const balance = new Number(1000)
console.log(balance);

console.log(balance.toString()); //1000
console.log(balance.toString().length); //4
console.log(balance.toFixed(2)); //1000.00

const otherNumber = 489.68798 
console.log(otherNumber.toPrecision(3)); //490
console.log(otherNumber.toPrecision(2)); //4.9e+2 check numbers specifically before using .toPrecision()
const hundreds = 100000000
console.log(hundreds.toLocaleString('en-IN')); // 10,00,00,000

console.log(balance.toExponential(3)); //1.000e+3

// +++++++++++++++++++++++++++ MATHS +++++++++++++++++++++++++++ //

//console.log(Math);// Object [Math] {}
//console.log(Math.abs(4));// 4
//console.log(Math.round(5.968));// 6
//console.log(Math.floor(4.5));// 4
//console.log(Math.ceil(9.76));// 10
//console.log(Math.max(22,76,897,654,986));// 986
//console.log(Math.min(8659,896785,7574,8548));// 7574

console.log(Math.random()); //0.929284146360702    In Math.random() value always ranges between 0 and 1
console.log(Math.random()*10+1);// 8.731588932021268
console.log((Math.random()*10) + 1);// 3.712048928059516
console.log(Math.floor(Math.random()*10) + 1);// 9
const min =10
const max =20

//Math.random() *((max - min)+ 1)
console.log(Math.random() *((max - min)+ 1));// 1.1374460753405644
console.log(Math.floor(Math.random() *((max - min)+ 1)));// 9
console.log(Math.floor(Math.random() *((max - min)+ 1))+ min);// 10



