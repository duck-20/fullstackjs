//ternary operator
//condition?expifTrue:expifFalse;

// let isTrue = true;
// isTrue ? console.log(true):console.log(false)

// let password = 8;
// function passwordChecker(ps) {
//   return ps === 8 ? "Strong Password" : "Password should be 8 Character";
// }
// let res = passwordChecker(password);
// console.log(res)

// const age = 15

// const isAdult = age >= 18 ? "Adult" : "Not an Adult";
// console.log(isAdult)

//challenges;
// let haveMoney = false;
// let res = haveMoney ? "Buy Products" : "They should bring money";
// console.log(res)

//for-in loop in js
//for (let key in object){...}

// let person = {
//   name: "Ayush",
//   age: 21,
//   gender: "Male"
// }
// for (let keys in person) {
//   console.log(keys, person[keys])
// }

// let list = ['one', 'two', 'three', 'four'];
// for (let index in list) {
//   console.log(index, list[index])
// }

//challenges

// const object = { a: 1, b: 2, c: 3 }

// for (let keys in object) {
//   console.log(`${keys}: ${object[keys]}`);
// }

//for of loop
//for (variable of iterable){...}

// let person = ['Ayush', 'Smriti'];
// for (let a of person) {
//   console.log(a)
// }

//for..in vs for ....of->for..in loop basically get keys and index where as for...of loop directly catch the variable.;

// let name = "Ayush";
// for (let char of name) {
//   console.log(char)
// }

//challenges

// const array1 = ["a", "b", "c"];
// for (let value of array1) {
//   console.log(value);
// }

//foreach helper

// const colors = ['Teal', 'blue', 'red', 'green'];
// colors.forEach(el => {
//   console.log(el)
// });

// const words = ['Hello', 'Bird', 'Camel', 'table', 'Football'];
// words.forEach((word, index, arr) => {
//   arr[index] = word[0].toUpperCase() + word.substring(1);
// })
// console.log(words)

//challenges
// const nums = [1, 2, 3, 4, 5, 6];
// let sum = 0;
// // nums.forEach((num) => {
// //   sum += num
// //   return sum;
// // });
// // console.log(sum)
// function adder(number) {
//   sum += number
// }
// nums.forEach(adder);
// console.log(sum)

//map method
// const num = [1, 2, 3, 4, 5];
// const double = num.map(el =>el);
// console.log(double)

// let people =
//   [
//     { firstName: "John ", lastName: "Doe" },
//     { firstName: "John ", lastName: "Hardy" },
//     { firstName: "John ", lastName: "Cena" },
//   ]
// const res = people.map(name => [name.firstName]);
// console.log(res)

//challenges
// let numbers = [1, 23, 24, 242, 214, 1241, 4];
// let newNumbers = numbers.map(number => number * 10);
// console.log(newNumbers)

//filter
// const songs = [
//   { name: "Lucky You", duration: 4.32 },
//   { name: "Just like you", duration: 3.23 },
//   { name: "The search", duration: 2.32 },
//   { name: "The Box", duration: 1.32 },
// ]
// console.log(songs.filter(song => song.duration > 3));

// const computers = [
//   { ram: 4, hdd: 100 },
//   { ram: 8, hdd: 500 },
//   { ram: 16, hdd: 600 },
//   { ram: 24, hdd: 256 },
// ]
// console.log(computers.filter(computer => computer.ram > 16))

//challenges
// const ages = [32, 33, 15, 40];
// console.log(ages.filter(age => age > 18));

// const words = [
//   "spray",
//   "limit",
//   "elite",
//   "exuberant",
//   "destruction",
//   "present"
// ];
// console.log(words.filter(word => word.length > 6))










