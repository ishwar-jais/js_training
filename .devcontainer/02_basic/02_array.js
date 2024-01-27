const marvelHeros = ["ironman", "spidernam", "hulk"]
const dc_Heros =["batman", "supernam","wonderwomen"]

//marvelHeros.push(dc_Heros)

// const new_Heros = marvelHeros.concat(dc_Heros)

// console.log(new_Heros);

// const all_New_heros = [...marvelHeros, ...dc_Heros] // Spread Operator 

// console.log(all_New_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, 8, 9]]

console.log(another_array.flat(Infinity));

console.log(Array.isArray("Hitesh")); //isArray method checks value is array or not and provides o/p in T/F
console.log(Array.from("Hitesh")); //converts string/values to array

console.log(Array.from({name : "Hitest"})) //INTERESTING 

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));

