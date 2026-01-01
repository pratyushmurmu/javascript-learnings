const tinder = new Object() // singleton object

console.log(tinder);//{}

const tinderUser = {} // non-singleton object
console.log(tinderUser);// {}

tinderUser.id = "479syt"
tinderUser.username = "lovely56"
tinderUser.isLoggedIn = false

const regularUser ={
    email: "sammytobe23@microsoft",
    fullname:{
        firstname: "Sammy",
        lastname: "Tobe"
    }
}

console.log(regularUser.fullname);// { firstname: 'Sammy', lastname: 'Tobe' }
console.log(regularUser.fullname.firstname);// Sammy
const obj1 ={1:"a", 2:"b"}
const obj2 ={3:"a", 2:"b"}
// const obj3 ={ obj1, obj2}

// console.log(obj3);// { obj1: { '1': 'a', '2': 'b' }, obj2: { '2': 'b', '3': 'a' } }

// Or

//const obj3 = Object.assign({},obj1, obj2)
//console.log(obj3);// { '1': 'a', '2': 'b', '3': 'a' }

// Or

// Using spread operator (...)

const obj3 = {...obj1,...obj2}
console.log(obj3);// { '1': 'a', '2': 'b', '3': 'a' }

const users =[
    {
        id: 1,
        email: "sammytobe23@microsoft"
    },{
        id: 1,
        email: "sammytobe23@microsoft"
    },{
        id: 1,
        email: "sammytobe23@microsoft"
    },
]

users[1].email
console.log(tinderUser);// { id: '479syt', username: 'lovely56', isLoggedIn: false }

console.log(Object.keys(tinderUser));// [ 'id', 'username', 'isLoggedIn' ]
console.log(Object.values(tinderUser));// [ '479syt', 'lovely56', false ]
console.log(Object.entries(tinderUser));// [
//  [ 'id', '479syt' ],
//  [ 'username', 'lovely56' ],
//  [ 'isLoggedIn', false ]
//]

console.log(tinderUser.hasOwnProperty('isLoggedIn'));// true (determines whether an object has a property with the specified name)


const course = {
    coursename: "js in hindi",
    price: "999",
    courseinstructor: "hitesh choudhary"
}

// course.courseinstructor

const {courseinstructor: sir} = course  // destructuring of objects: it makes code clean; readable and more efficient in large files, functions and APIs.

// console.log(courseinstructor); // hitesh choudhary

console.log(sir); // hitesh choudhary


// De-structuring concept used in React 
// const navbar = ({company}) => {

// }

// navbar(company = "hitesh")

// APIs
 // Learned a brief about APIs with an example of "randomuserapi" copying it's link and opening it at another tab. Then copying it to pasting it at the website "json formatter" to see it's Code.

 //JSON APIs can be objects or arrays. 












