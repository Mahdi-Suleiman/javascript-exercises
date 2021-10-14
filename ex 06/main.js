/*
## Exercise (6): Content show/hide

  - By default, show only the article headings (this can be achieved by setting the display property of the div with the text to "none" using inline CSS).
  - Clicking the "show" link should make the article body appear and the "show" link to disappear.
  - Clicking the "hide" link should make the article body disappear and the "show" link appear.
*/

let showButton1 = document.querySelector("#showButton1");
let showButton2 = document.querySelector("#showButton2");
let showButton3 = document.querySelector("#showButton3");

let hideButton1 = document.querySelector("#hideButton1");
let hideButton2 = document.querySelector("#hideButton2");
let hideButton3 = document.querySelector("#hideButton3");

let article1 = document.querySelector("#article1");
let article2 = document.querySelector("#article2");
let article3 = document.querySelector("#article3");



function ShowFunctionOne() {
  showButton1.style.display = "none";
  article1.style.display = "unset";
}
function hideFunctionOne() {
  showButton1.style.display = "unset";
  article1.style.display = "none";
}

function ShowFunctionTwo() {
  showButton2.style.display = "none";
  article2.style.display = "unset";
}
function hideFunctionTwo() {
  showButton2.style.display = "unset";
  article2.style.display = "none";
}

function ShowFunctionThree() {
  showButton3.style.display = "none";
  article3.style.display = "unset";
}
function hideFunctionThree() {
  showButton3.style.display = "unset";
  article3.style.display = "none";
}

function onloadFunction() {
  hideFunctionOne();
  hideFunctionTwo();
  hideFunctionThree();
}




















// let showButtons = document.getElementsByClassName("show");
// let sections = document.getElementsByTagName("section");
// let articles = document.getElementsByTagName("article");
// let hideButtons = document.getElementsByClassName("hide");

// function showFunction(obj) {
// }

// function hideFunction() {

// }


/*
let wrap = document.getElementById('wrap')
wrap.addEventListener("click", event => {
  // Check if it’s the list element, we want the clicks only from them
  if (event.target.classList.contains('list--item')) {
    alert('The item ' + event.target.innerHTML + ' was just clicked')
  }
})
*/
