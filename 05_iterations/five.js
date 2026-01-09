const coding = ["js", "java", "c", "c++", "python", "ruby"]

//coding.forEach(function (item){        // since forEach is a callback function, we don't need to name it
//    console.log(item);
    
//} ) // js, java, c, c++, python, ruby

//coding.forEach( (item) => {
//    console.log(item);
//})
// arrow function syntax
// js, java, c, c++, python, ruby


//function printMe(item){
//    console.log(item);
    
//}
//coding.forEach(printMe); // js, java, c, c++, python, ruby (✔️ You are passing the function reference, NOT calling it.)

// ❌ This would be wrong: coding.forEach(printMe());
// Because printMe() would execute immediately and return undefined.

coding.forEach((item, index, arr) => {
    console.log(item, index, arr);
    
})

//js 0 [ 'js', 'java', 'c', 'c++', 'python', 'ruby' ]
//java 1 [ 'js', 'java', 'c', 'c++', 'python', 'ruby' ]
//c 2 [ 'js', 'java', 'c', 'c++', 'python', 'ruby' ]
//c++ 3 [ 'js', 'java', 'c', 'c++', 'python', 'ruby' ]
//python 4 [ 'js', 'java', 'c', 'c++', 'python', 'ruby' ]
//ruby 5 [ 'js', 'java', 'c', 'c++', 'python', 'ruby' ]

const myCode = [{
    langName: "javascript",
    acronym: "js"
},{
    langName: "java",
    acronym: "java"
},{
    langName: "python",
    acronym: "python"
}]

myCode.forEach((item) => {
    console.log(item.langName);// javascript, java, python
    
})

