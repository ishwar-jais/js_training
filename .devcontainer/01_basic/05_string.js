const name ="aman"
const repocount = 10

console.log(name + repocount + " Value");
console.log(`Hello my name is ${name} and my reporcount is ${repocount}`);

const gameName = new String ('amanishu')

console.log(gameName [0]);

console.log(gameName.__proto__);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('n'));

const newString = gameName.substring(2, 7)
console.log(newString);

const anotherString = gameName.__proto__ .toUpperCase().slice(-7, 4)
console.log(anotherString);

const newStringOne = "     hitesh   "
console.log(newStringOne);
console.log(newStringOne.trimStart());
console.log(newStringOne.trimEnd());
console.log(newStringOne.trimLeft());
console.log(newStringOne.trimRight());

const url = "https://aman.com/%20/login"

console.log(url);
console.log(url.replace("%20", "hello"));

console.log(url.includes("aman"));
console.log(url.includes("ishu"));