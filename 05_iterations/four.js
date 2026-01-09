// for in Loop

const myObj={
    js: 'javascript',
    cpp: 'C++',
    rb: 'ruby',
    swift: 'swift for apple'
}

for (const key in myObj) {
    console.log(key);
     
}
//js
//cpp
//rb
//swift
 for(const key in myObj){
    console.log(`${key} shortcut for ${myObj[key]}`);
    
 }
//js shortcut for javascript
//cpp shortcut for C++
//rb shortcut for ruby
//swift shortcut for swift for apple

//const programming = ["js", "java", "c", "c++", "python", "ruby"]

//for(const key in programming){
  //  console.log(key);
    
//} // 0, 1, 2, 3, 4, 5


const programming = ["js", "java", "c", "c++", "python", "ruby"]

for(const key in programming){
    console.log(programming[key]);
    
}

// console.log(programming)

//[ 'js', 'java', 'c', 'c++', 'python', 'ruby' ]
//[ 'js', 'java', 'c', 'c++', 'python', 'ruby' ]
//[ 'js', 'java', 'c', 'c++', 'python', 'ruby' ]
//[ 'js', 'java', 'c', 'c++', 'python', 'ruby' ]
//[ 'js', 'java', 'c', 'c++', 'python', 'ruby' ]
//[ 'js', 'java', 'c', 'c++', 'python', 'ruby' ]

//---------------------------------------------------------------------

//console.log(programming[key])
//js
//java
//c
//c++
//python
//ruby


const myObject={
    game1: "TLOU",
    game2: "COD",
    game3: "BGMI"
}

for(const key in myObject){
    console.log(key);
    
}
//game1
//game2
//game3

const map = new Map()
map.set('IN',"India")
map.set('PAK',"Pakistan")
map.set('USA',"United States of America")
map.set('CHN',"China")

for(const key in map){
    console.log(key);
    
}
// No output as Map is not iterable with for...in loop