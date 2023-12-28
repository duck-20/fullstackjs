// ------------------------------------
// createElement()
// const h1 = document.createElement("h1");
// const body = document.body;
// h1.textContent = "GoodBye";
// h1.classList.add("greeting");
// h1.style.color = "red";
// console.log(h1);

// // appendChild()
// body.appendChild(h1);

// append()

// prepend()
// insertBefore()
const ul = document.querySelector("ul");
const newLi = document.createElement("li");
const li = document.querySelector("li");
newLi.innerText = "I`m Li text.";
ul.insertBefore(newLi, li);




/* insertAdjacentElement(
    'beforebegin'
    'afterend'
    'beforeend'
    'afterend',
    element
) */

const firstP = document.querySelector("p");
const i = document.createElement("i");
i.innerText = "I'm Italic.";
i.style.color = "SkyBlue";
firstP.insertAdjacentElement("BeforeBegin", i);


// removeChild()
// remove()
// ------------------------------------
