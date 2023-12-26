// // //template strings also known as template literals
// // const firstName = "Ayush"
// // const lastName = "Pakhrin"
// // // const greet = setInterval(function () {
// // //   console.log(`Welcome ${firstName}!`);
// // // }, 2000);
// // // setTimeout(function () {
// // //   clearInterval(greet);
// // //   console.log("Stopped Greeting")
// // // }, 10000);
// // // console.log(`My name is ${firstName} ${lastName}.`);
// // // console.log(`${['one', 'two', 'three']}`)
// // // console.log(`${2 + 2}`)
// // function info() {
// //   return `My name is Ayush Pakhrin`;
// // }
// // console.log(`${info()}`)


// //challenges
// console.log(`
// The quick
// brown fox
// jumps over
// the lazy dog
// `)

// const firstName = "Ayush";
// const lastName = "Pakhrin";
// console.log(`My name is ${firstName} ${lastName}.`);

//Arrow function
// function greet(name) {
//   return `Hello ${name}!`;
// }
// console.log(greet("Ayush"));

// let greet = (name) => {
//   console.log(`Hello ${name}!`);
// }
// greet("Ayush")

// hello = name => `Hello ${name}!`;
// console.log(hello("Ayush"));

// function double(num) {
//   return num * 2;
// }
// console.log(double(5));
// const double = num => num * 2;
// console.log(double(8))

// setTimeout(() => {
//   console.log("Hello");
//   setTimeout(() => {
//     console.log("Hey");
//     setTimeout(() => {
//       console.log("Namaste");
//       setTimeout(() => {
//         console.log("Hi");
//         setTimeout(() => {
//           console.log("Bonjour")
//         }, 2000)
//       }, 2000)
//     }, 2000)
//   }, 2000)
// }, 2000)

//enchanced object literals
// function user(name, age, work) {
//   return {
//     name,
//     age,
//     work,
//     greet: () => {
//       console.log(`Welcome ${name}!`);
//     }
//   }
// }
// let Ayush = user("Ayush", 21, "Programmer")
// let Alex = user("Alex", 22, "Designer")
// console.log(Ayush);
// Ayush.greet();
// console.log(Alex)

//challenges

// let a = 1;
// let b = 2;
// let c = 3;

// let obj = {
//   a, b, c
// }
// console.log(obj)

// const lib = {
//   sum: (a, b) => a + b,
//   mult: (a, b) => a * b,
// }
// console.log(lib.sum(5, 5));
// console.log(lib.mult(5, 5));

// const getPersionES6 = (name, age, height) => {
//   return {
//     name, age, height
//   }
// }
// let Ayush = getPersionES6("Ayush", 21, 189)
// console.log(Ayush)

//Default Parameters
// let greet = (name = "Strangers") => {
//   return `Welcome ${name}`
// }
// console.log(greet("Ayush"));//with arguement
// console.log(greet());//without arguement

// const rating = (rate = 0) => {
//   if (rate === 5) {
//     console.log("High Rating :)");
//   }
//   else if (rate === 0) {
//     console.log("Low Rating :(");
//   }
//   else {
//     console.log("Average Rating :|");
//   }
// }
// rating()

//challenges

// let multiply = (a = 1, b = 1) => {
//   return a * b
// };
// console.log(multiply(5, 5));
// console.log(multiply(5));
// console.log(multiply());

// const student = {

// }
// const studentData = (id, name, age, address, major) => {
//   return {
//     id,
//     name,
//     age,
//     address,
//     major
//   }
// }
// const Ayush = studentData(1, "Ayush", 21, { "city": "Kathmandu", "Ward no.": 6 }, "BCA");
// console.log(Ayush)

//spread operator->Allows to convert array into each individual elements. Also used to convert a shallow copies of objects
// function giveMe4(a, b, c, d) {
//   console.log("a:", a);
//   console.log("b:", b);
//   console.log("c:", c);
//   console.log("d:", d);
// }
// const colors = ['red', 'green', 'blue', 'teal'];
// giveMe4(...colors);

// const strNums = ['one', 'two', 'three'];
// const moreStrNums = ['four', 'five', 'six'];
// const concat = [...strNums, ...moreStrNums]
// console.log(concat)
// let people = ['Ayush', 'Jeff', 'Duck'];
// const add = ['kumar', 'hero', ...people];
// console.log(add);

// let names = ['Ayush', 'Duck', 'What '];
// let addNames = ['Ajay', 'mat'];
// let concat = [...addNames, ...names];
// console.log(concat)

//spread operator in objects
// const obj1 = { x: 1, y: 2 };
// const obj2 = { z: 3 };
// const totalObj = { ...obj1, ...obj2 };
// console.log(totalObj);

// let person = {
//   name: "Ayush",
//   age: 21,
//   gender: "Male"
// }
// const clone = {
//   ...person, work: "Programmer", location: "idk"
// }
// console.log(clone)

//challenges

// let arr = [1, 2, 3];
// let arr2 = [4, 5];

// const user = {
//   name: "Jen",
//   age: 22,
// }

// const clone = [...arr, ...arr2];
// console.log(clone);
// const clone2 = { ...user };
// console.log(clone2)


//Rest operator->allows to create variadic functionn so it can accepet indefinite number of parameters
//it simply converts the parameters value into arrays
// const user = (name,...userData) => {
//   console.log(name,userData)
// }
// user("Ayush", 21, "Programming", "Football");

// const person = (firstName, Lastname, ...hobbies) => {
//   console.log("First Name:", firstName);
//   console.log("Last Name:", Lastname);
//   console.log("Hobbies:", hobbies);
// }
// person("Ayush", "Pakhrin", "Programming", "Learning", "Games")

//challenges
// let unlimited = (...wow) => {
//   console.log(wow)
// }
// unlimited("What the hell!", "How is this even possible ", "My man woaahhhhh!");

// let add = (...num) => {
//   let total = 0;
//   num.forEach(el => { total += el });
//   return total;
// }
// console.log(add(1, 2, 3, 4, 5, 5))

//











