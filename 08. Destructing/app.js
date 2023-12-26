// const foo = ['one', 'two', 'three'];

// const [one, two, three] = foo;

// console.log(three)
// console.log(one);
// const colors = ['red', 'green', 'blue'];
// const [A, B, C] = colors;
// console.log(A);
// console.log(B);

// let a, b;
// [a = 5, b = 1] = ['one', 'two', 'three'];
// console.log(b);

// function f() {
//   return ["Ayush", "Pakhrin"];
// }
// let a, b;
// [a, b] = f();
// console.log(a,b)

// function f() {
//   return [1, 2, 3];
// }
// const [a, , b] = f();
// console.log();

//Assigning the rest of an array to a variable
// const [a, ...b] = ['one', 'two', 'three'];
// console.log(b)

// const colors = ['red', 'green', 'blue', 'yellow', 'orange'];
// const [color1, color2, color3, ...color4] = colors;
// console.log(color1,color2,color3,color4);


//object destructing->order doesn`t matter but name does i.e properties
// const student = { name: "Ayush", position: "First", rollno: 2 };
// // console.log(student)
// const { name, position, rollno } = student;
// console.log(name, position, rollno);

//challenges
const person = {
  name: "John Doe",
  age: 30,
  gender: "Male",
  country:"USA"
}
const { name, age, country } = person;
console.log(name,age,country)












