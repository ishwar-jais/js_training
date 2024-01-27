//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n


// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3

//  ******************* Stack and Heap *******************//

// primitive DataType (Stack) non-primitiveDataType (Heap)

// Stack (Primitive), heap (Non-primitive)

let myYoutubename = "hiteshchoudharydotcom"

let anothername = myYoutubename;

anothername = "ChaiPeCharcha";

console.log(anothername);
console.log(myYoutubename);

let userOne = {
    Email: "ishwaraman@google.com",
    upi: "hasim@ybl"
}

let userTwo = userOne

userTwo.Email = "aman@google.com"

console.log(userOne.Email);
console.log(userTwo.Email);

















