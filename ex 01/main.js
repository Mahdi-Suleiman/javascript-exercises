/*
## Exercise (1): Changing text

  - Create a similar html page such that on moving the mouse over the yellow box the text changes to "Can I help you?". Then, when the mouse is moved outside the box the text changes back to "Hello world!". 
  */
function mOver(obj) {
    obj.innerHTML = "Can I help you?";

}
function mOut(obj) {
    obj.innerHTML = "Hello World!";
}

function toggleFunction() {
    let myText = document.getElementById("text2");
    if (myText.innerHTML === "Hello World!")
        myText.innerHTML = "Can I help you?";
    else
        myText.innerHTML = "Hello World!";
}










function myFunction() {
    var x = document.getElementById("text2");
    if (x.innerHTML === "Hello World!") {
        x.innerHTML = "Can I help you?";
    } else {
        x.innerHTML = "Hello World!";
    }
}

//toggle text js