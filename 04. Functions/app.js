//call, run and execute the function
//function declaration
// function greet() {
//   console.log("Hello World!");
// }
// //calling the function
// greet();

// function sayHello(name = "Stranger") {
//   console.log(`Hello ${name}!`);
// }

// sayHello("Ayush");
// sayHello();

//return

// function add(x, y) {
//   return x + y;
// }
// console.log(add(5, 6));
// const res1 = add(10, 20);
// const res2 = add(220, 20);
// console.log(res1);
// console.log(res2);

//challenges
// let myFunction = (num1, num2) => {
//   return num1 * num2;
// }
// let res = myFunction(10, 10);
// console.log(res);

//funciton declaration
// greet();//won;t give error if we use function declaration
// function greet() {
//   console.log("Hello World!");
// }

// //function expression
// greeting("Ayush")//gives error if we use function expression
// const greeting = function (user) {
//   console.log(`Hello ${user}!`);
// }


//callback function
//When we provide function as an arguement to another function is known as callback function.

// function showCallFunc(fn) {
//   const value = 10;
//   fn(value)
// }
// showCallFunc(function (value) {
//   console.log(value)
// })

// function greet(name, cb) {
//   console.log(`Hello ${name}!`);
//   cb();
// }
// function cb() {
//   console.log("I am callback function");
// }
// greet("Ayush", cb)

// function sayHello(nepali) {
//   console.log("Hello World!");
//   nepali()
// }
// function nepali() {
//   console.log("Namaste");
// }
// sayHello(nepali)

//challenges for callback function

// function showCallFunc(fn) {
//   const a = 10;
//   fn(a);
// }
// function fn(b) {
//   console.log(b);
// }
// showCallFunc(fn)

//scopes

//global  scope
// let name = "Ayu";//declared and can be accessed by any function or method
// console.log(name);
// function sayHello(name) {
//   console.log("Hello " + name);
// }
// sayHello(name);

// //local scope:declared within a block of code and can only be accessed by the function.
// function hello() {
//   let num1 = 19;//local variable
//   console.log(num1)
// }
// hello();
// console.log(num1)//gives error cause it is declared inside a function

//Methods

// function greet() {
//   return `Hello,My name is ${person.name} & I am ${person.age} years old.`
// }

// const person = {
//   name: 'Ayush',
//   age: 21,
//   greet
// }
// console.log(person.greet())
//methods in javascript
const person = {
  name: "Ayush",
  age: 21,
  greet: function () {
    return `Hello,My name is ${person.name} & I am ${person.age} years old.`;
  }
}
console.log(person.greet());