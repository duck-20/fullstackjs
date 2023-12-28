// 1. Select element h4 which holds text of "Red" by using getElementsByTagName
let h4 = document.getElementsByTagName('h4');
console.log(h4);
// 2. Select div with the class of "green" which holds text (Green) by using getElementsByTagName
let green = document.getElementsByClassName("green");
console.log(green);
// 3. Select div with the ID of blue which holds the text "Blue" by using getElementsByClassName
let blue = document.getElementById('blue');
console.log(blue)
// 4. Select div which has the class & Id of "yello" by using querySelector()
let yellow = document.querySelector(".yellow");
console.log(yellow)
// 5. Select all the elements which has the class of "teal" by using querySelectorAll
let teal = document.querySelectorAll(".teal");
console.log(teal);
