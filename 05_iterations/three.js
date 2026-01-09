// for of
//--------------------
//for (const element of object) {
    
//}


const arr = [5, 6, 7, 8]

for (const num of arr) {   // Here element= num and object= arr
    console.log(num);
    
}
// 5, 6, 7, 8

const sen = "Ladies and gentlemen"

for (const address of sen) {
    console.log(`Always start your speech with ${address}`);
    
}

//Always start your speech with L
//Always start your speech with a
//Always start your speech with d
//Always start your speech with i
//Always start your speech with e
//Always start your speech with s
//Always start your speech with
//Always start your speech with a
//Always start your speech with n
//Always start your speech with d
//Always start your speech with
//Always start your speech with g
//Always start your speech with e
//Always start your speech with n
//Always start your speech with t
//Always start your speech with l
//Always start your speech with e
//Always start your speech with m
//Always start your speech with e
//Always start your speech with n

//--------------------------------------------------------------------------------

// Maps

const map = new Map()
map.set('234','NTR')
map.set('235','RC')
map.set('456','PK')

//console.log(map);
// Map(3) { '234' => 'NTR', '235' => 'RC', '456' => 'PK' }


for(const key of map){
    console.log(key);
    
}
// [ '234', 'NTR' ]
// [ '235', 'RC' ]
// [ '456', 'PK' ]

for(const [key, value] of map){
    console.log(key,'=>', value);
    
}
//234 => NTR
//235 => RC
//456 => PK

const myObj={
    game1: "TLOU",
    game2: "COD",
    game3: "BGMI"
}

for(const [key , value] of myObj){
    console.log(key, '=>', value);
    
}
// Error: for(const [key , value] of myObj){
//                           ^
//TypeError: myObj is not iterable


//Reason:
//for...of only works on iterable objects, like:
//Arrays
//Strings
//Maps
///Sets
//👉 Plain JavaScript objects ({}) are NOT iterable by default.







