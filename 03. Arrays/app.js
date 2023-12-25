//Arrays->0 index based used to store multiple data and objects.It is a data structure.

// let fruits = ['Mango', 'Banana', 'Apple'];
// console.log(fruits);

//empty array;
// const myList = [];//syntax for array
// console.log(myList);

// const numbersArray = [1, 2, 3, 4, 5];
// console.log(numbersArray);
// const stringArr = ['eat', 'sleep', 'code', 'repeat'];
// console.log(stringArr);

// //accessing items from array
// console.log(stringArr[0]);
// console.log(stringArr[1]);
// console.log(stringArr[2]);
// console.log(stringArr[3]);

//2D array ||  nested array

// const nestArr = ['one', ['two', 'three'], 1, true, false];
// console.log(nestArr)
// console.log(nestArr[1]);
// console.log(nestArr[1][1]);

// const myLetter = ["h", "e", "l", "l", "0"];
// console.log(myLetter)

//challenges
let favSingers = ['Ayush', 'Taylor', '2pac'];
console.log(favSingers[0]);
let favNumbers = [5, 6, 7, 8];
let mixedArr = ["Ayush", ["Duck", "Genos"], 123, true];
mixedArr.forEach(el => {
  console.log(el);
});