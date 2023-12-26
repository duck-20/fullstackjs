// //JSON->Javascript object notation that is lightwieght data store so it is easy to compile ana understand for human and computer

// const person = {
//   "name": "John Doe",
//   "age": 20,
//   "email": "js@gmail.com",
//   "isProgrammer": true,
//   "hobbies": ["Reading", "Running", "Coding"],
//   "address": {
//     "city": "New York",
//     "idk": true
//   }
// }
// // console.log(person.name);
// //JSON.stringfy
// const jsonString = JSON.stringify(person)
// console.log(jsonString);

// const parsedObject = JSON.parse(jsonString);
// console.log(parsedObject)

//Date and time in js

//year,month,day,hours,minutes,seconds,miliseconds
// const date = new Date(2024, 2, 24, 12, 30, 0, 0);
// console.log(date)

const date = new Date();
// const year = date.getFullYear();
// const month = date.getMonth();
// const day = date.getDay();
// const hours = date.getHours()
// const minutes = date.getMinutes();
// const milliseconds = date.getMilliseconds();
// console.log(year)
// console.log(month)
// console.log(day)
// console.log(hours)
// console.log(minutes)

console.log(date.toDateString());
console.log(date.toISOString());
console.log(date.toLocaleDateString());
date.setDate(date.getDate() + 1);
console.log(date)
