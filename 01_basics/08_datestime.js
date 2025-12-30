// Dates

let myDate  = new Date()
console.log(myDate); // 2025-12-30T08:04:00.231Z
//console.log(myDate.toString()); // Tue Dec 30 2025 13:35:02 GMT+0530 (India Standard Time)
//console.log(myDate.toISOString());// 2025-12-30T08:07:36.812Z
//console.log(myDate.getTime());// 1767082056812
//console.log(myDate.toJSON());// 2025-12-30T08:07:36.812Z
//console.log(myDate.getUTCFullYear());// 2025
//console.log(myDate.getUTCMonth());// 11
console.log(myDate.toDateString());// Tue Dec 30 2025
console.log(myDate.toLocaleDateString());// 30/12/2025
console.log(typeof myDate);// object


//let createdDate = new Date(2004, 2, 9);
//console.log(createdDate);// 2004-03-08T18:30:00.000Z
//console.log(createdDate.toDateString());// Tue Mar 09 2004
// OR
let createdDate = new Date(2004, 2, 9, 4, 57, 55)// (yy, month, date, hour, min, sec)
console.log(createdDate.toLocaleString());// 9/3/2004, 4:57:55 am
// OR
let createDate = new Date("2004-03-09")
console.log(createDate.toLocaleString());// 1/1/1970, 5:30:01 am ("without double quotations")
//This is NOT a date.

//JS evaluates this as a math expression:

// 2004-3-9 = 1992

// new Date(1992)

// When Date gets a number, it treats it as:

// milliseconds since 1 Jan 1970 (UTC)

// 1992 milliseconds ≈ 1.992 seconds after epoch

// So the output: 1/1/1970, 5:30:01 am

console.log(createDate.toLocaleString());// 9/3/2004, 5:30:00 am ("with double quotations")

// What JavaScript sees

// "2004-03-09" → string

// JS recognizes this as an ISO date format

// How JS processes it

// Interprets it as: 9 March 2004 (UTC)

// Converts to your local time (IST)

let mycreateDate = new Date("05-26-2008")
console.log(mycreateDate.toLocaleString());// Invalid Date (dd/mm/yy)
console.log(mycreateDate.toLocaleString());// 26/5/2008, 12:00:00 am (mm/dd/yy)

let mytimeStamp = Date.now()
//console.log(mytimeStamp);// 1767084472669 (in milliseconds)
//console.log(createdDate.getTime());// 1078788475000 (good for comparing in polls to know exactly who voted first)
console.log(Math.floor(Date.now())); //(in milliseconds): 1767084769880
console.log(Math.floor(Date.now()/1000));// 1767084833


let newDate = new Date()
console.log(newDate);
console.log(newDate.getDay());// 2
console.log(newDate.getMonth());// 11
console.log(newDate.getFullYear());// 2025

// ` ${newDate.getFullYear()} and the time `

newDate.toLocaleString('default',{
    weekday: "long",

})