let index =0
while (index <= 5) {
    console.log(`Value of index is ${index}`); // Value of index is 0.....(infinite loop) if no increment or decrement of index is provided
    index= index + 2;
}

//Value of index is 0
//Value of index is 2
//Value of index is 4

// for arrays

let myArr = ['superman','batman','catwoman', 'daredevil']

let arr = 0
console.log(myArr.length);// 4

while(arr < myArr.length){
    console.log(`In index ${arr} we have ${myArr[arr]}`);
    arr++
}

// for console.log(`In index ${arr} we have ${myArr}`)
//In index 0 we have superman,batman,catwoman,daredevil
//In index 1 we have superman,batman,catwoman,daredevil
//In index 2 we have superman,batman,catwoman,daredevil
//In index 3 we have superman,batman,catwoman,daredevil

// console.log(`In index ${arr} we have ${myArr[arr]}`)
//In index 0 we have superman
//In index 1 we have batman
//In index 2 we have catwoman
//In index 3 we have daredevil


// do while loop

let marks = 0

do{
    console.log(`Marks secured is ${marks}`);
    marks++
}while(marks <= 20)

//Marks secured is 0
//Marks secured is 1
//Marks secured is 2
//Marks secured is 3
//Marks secured is 4
//Marks secured is 5
//Marks secured is 6
//Marks secured is 7
//Marks secured is 8
//Marks secured is 9
//Marks secured is 10
//Marks secured is 11
//Marks secured is 12
//Marks secured is 13
//Marks secured is 14
//Marks secured is 15
//Marks secured is 16
//Marks secured is 17
//Marks secured is 18
//Marks secured is 19
//Marks secured is 20
