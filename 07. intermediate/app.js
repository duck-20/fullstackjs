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

const getPersionES6 = (name, age, height) => {
  return {
    name, age, height
  }
}
let Ayush = getPersionES6("Ayush", 21, 189)
console.log(Ayush)