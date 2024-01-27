//Array 

const myArr = [0, 1, 2, 3, 4, 5]
//const myHeros = ["shaktiman", "naagraj"]

//const myArr2 = new Array(1, 2, 3, 4)
//console.log(myArr[0]);

// Array methods 

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9)
// myArr.shift(9)

// console.log(myArr.indexOf(4));
// console.log(myArr.includes(9));


//const newArr = myArr.join()  /*join method Adds all the elements of an array into a string,separated by the specified separator string* /

// console.log(myArr);
// console.log(newArr);
// console.log(typeof newArr);

// ++ slice, splice ///

console.log("A ", myArr);

const myn1 = myArr.slice(0, 5) 
console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3) //Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.

console.log(myn2);
console.log("C ", myArr);

