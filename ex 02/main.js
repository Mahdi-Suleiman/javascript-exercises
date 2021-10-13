/*
## Exercise (2A): Changing colors

  - This html page contains a 200x200px div. Write JS code that sets the initial color of the div to blue, then changes the color when the div is clicked. On the first click, it changes from blue to red, on the next click from red to green, then from green to blue (and once it's blue, it starts all over again).

  - In this exercise, you are only allowed to make changes inside <script>...</script> and cannot change other parts of the HTML code.
 */
let randomColor = Math.floor(Math.random() * 16777215).toString(16);
document.getElementById("color").style.backgroundColor = `#${randomColor}`;

const colorArr = ["blue", "red", "green"];
let counter = 1;
document.getElementById("color").onclick = function () { colorFunction(); }
function colorFunction() {
    document.getElementById("color").style.backgroundColor = colorArr[counter];
    counter++;
    if (counter >= colorArr.length)
        counter = 0
}
