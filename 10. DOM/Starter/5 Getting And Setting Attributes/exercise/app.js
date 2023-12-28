// 1. Select the anchor tag
// 2. Use getAttribute(attrName) to check the attribute.
// 3. Select a-two & set "href" attribute
// setAttribute(attrName, value)
const a = document.querySelector("a");
// console.log(a)
console.log(a.getAttribute("href"));
const a1 = document.querySelector(".a-two");
a1.setAttribute("href", "https://www.udemy.com/");
console.log(a1.getAttribute("href"));
