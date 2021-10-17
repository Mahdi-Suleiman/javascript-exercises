/*
## Exercise (8): Color picker

  - Make a color picker that displays a color palette; display colored tiles (rectangles) in the "colors" div.
  - When a colored tile is clicked:
    * write the code of that color inside the "selected" div;
    * set the background of the "selected" div to that color.
*/
let paletteContainer = document.querySelector("#paletteContainer");

//generate color palettes div containers
for (let i = 0; i < 54; i++) {
  let divElement = document.createElement("div");
  divElement.setAttribute("class", "color");
  divElement.setAttribute("onclick", "getColor(this)")
  paletteContainer.appendChild(divElement);
}

//generate color palettes
let colorPalette = document.querySelectorAll(".color");
for (let i = 0; i < colorPalette.length; i++) {
  let randomColor = Math.ceil(Math.random() * (16500000)).toString(16);
  // colorPalette[i].style.backgroundColor = `#fffff0`;
  colorPalette[i].innerHTML = `${randomColor}`;
  // colorPalette[i].style.backgroundColor = `#${randomColor}`;
  colorPalette[i].style.backgroundColor = '#' + (Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0');
  ;
}

function getColor(obj) {
  let colorViewer = document.querySelector("#colorViewer");
  colorViewer.style.backgroundColor = obj.style.backgroundColor;
  let myColor = colorViewer.style.backgroundColor;
  colorViewer.innerHTML = `${myColor}`;
}

// color.style.backgroundColor = `#${randomColor}`;
// color.innerHTML = `#${randomColor}`
