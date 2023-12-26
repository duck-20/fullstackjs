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
// const person = {
//   name: "John Doe",
//   age: 30,
//   gender: "Male",
//   country:"USA"
// }
// const { country, age, name } = person;
// console.log(name,age,country)

//renaming in object
// const num = { x: 100, y: 200 };
// const { x:newx, y:newy } = num;
// console.log(newx,newy);

//object destructing and rest operator
// let { a, b, c, ...rest } = { a: 100, b: 200, c: 300, d: 400, e: 500 };
// let { e, d, g } = rest;
// console.log(rest);
// console.log(d);


// const person = {
//   name: "John Doe",
//   age: 30,
//   gender: "Male",
//   country: "USA"
// }
// const { name: personName, age: personAge, country: personCountry } = person;
// console.log(personName, personAge, personCountry)

//function destructing
// const person = {
//   name: "John Doe",
//   age: 30,
//   country: "USA"
// }

// const printPersonInfo = ({ name, age, country }) => {
//   console.log(`name:${name}`);
//   console.log(`age:${age}`);
//   console.log(`country:${country}`);
// }
// printPersonInfo(person);


// let options = {
//   title: "My Menu",
//   items: ['items1', 'items2'],
// }
// let showMenu = ({ title, items: [item1, item2] }) => {
//   console.log(`${title}`);
//   console.log(item1);
//   console.log(item2);
// }
// showMenu(options);

//nested destructing
// const songs = [
//   {
//     name: "Lucky you", singer: "Joyner", duration: 4.34
//   },
//   {
//     name: "Just like you", singer: "NF", duration: 3.32
//   },
//   {
//     name: "Cold Sholder", singer: "Central Cee", duration: 5.23
//   },
// ]
// const [, { singer:s }, { singer }] = songs;
// console.log(singer)

//crazines destructing
// const data = {
//   user: {
//     id: 123,
//     name: "John Doe",
//     age: 30,
//     email: "john.doe@example.com",
//     address: {
//       city: "New York",
//       country: "USA",
//     },
//     hobbies: ["Reading", "Painting", "Cooking"],
//     scores: {
//       math: 95,
//       science: 88,
//       history: 75,
//     },
//   },
//   products: [
//     { id: 1, name: "Laptop", price: 1000 },
//     { id: 2, name: "Phone", price: 800 },
//     { id: 3, name: "Tablet", price: 500 },
//   ],
//   settings: {
//     darkMode: true,
//     notifications: {
//       email: true,
//       sms: false,
//       push: true,
//     },
//     language: "English",
//   },
// };

// //destructing
// const {
//   user: {
//     name, age, address: { city, country },
//     hobbies,
//     scores: { math, science, history },
//     email,
//   },
//   products: [product1, product2, product3],
//   settings: {
//     darkMode,
//     notifications: {
//       email: emailNotification,
//       sms: smsNotification,
//       push: pushNotification
//     },
//     language,
//   } } = data;
// console.log(`Name: ${name}`);
// console.log(`Age: ${age}`);
// console.log(`Address: ${city}, ${country}`);
// console.log(`Hobbies: ${hobbies.join(", ")}`);
// console.log(`Math Score: ${math}`);
// console.log(`Science Score: ${science}`);
// console.log(`History Score: ${history}`);
// console.log(`Product 1: ${product1.name} - $${product1.price}`);
// console.log(`Product 2: ${product2.name} - $${product2.price}`);
// console.log(`Product 3: ${product3.name} - $${product3.price}`);
// console.log(`Dark Mode: ${darkMode}`);
// console.log(`Email Notifications: ${emailNotifications}`);
// console.log(`SMS Notifications: ${smsNotifications}`);
// console.log(`Push Notifications: ${pushNotifications}`);
// console.log(`Language: ${language}`);


// const user = {
//   "userId": 1,
//   "id": 1,
//   "title": "delectus aut autem",
//   "completed": false
// }
// const { userId, id, title, completed } = user;
// console.log(userId)


// const product = {
//   id: 1,
//   title: 'iPhone 9',
//   description: 'An apple mobile which is nothing like apple',
//   price: 549,
//   discountPercentage: 12.96,
//   rating: 4.69,
//   stock: 94,
//   brand: 'Apple',
//   category: 'smartphones',
//   thumbnail: 'https://i.dummyjson.com/data/products/1/thumbnail.jpg',
//   images: [
//     'https://i.dummyjson.com/data/products/1/1.jpg',
//     'https://i.dummyjson.com/data/products/1/2.jpg',
//     'https://i.dummyjson.com/data/products/1/3.jpg',
//     'https://i.dummyjson.com/data/products/1/4.jpg',
//     'https://i.dummyjson.com/data/products/1/thumbnail.jpg'
//   ]
// }
// const { id, title, description, price, discountPercentage, rating, stock, images: [a, b, c, d, e] } = product;
// console.log(a)

























