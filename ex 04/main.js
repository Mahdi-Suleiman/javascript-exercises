/*
## Exercise (4): Formatting text

  - Create a simple what-you-see-what-you-get text editor.
  - Change the text inside the "text" div according to the form selections.
*/

let textarea = document.querySelector("#textarea");

function changeFontFamily() {
  let myFamily = document.querySelector("#fontFamily");
  textarea.style.fontFamily = `${myFamily.value}`;
}

function changeFontSize() {
  let size = document.querySelector("#fontSize");
  textarea.style.fontSize = `${size.value}px`;
}

function changeToBold() {
  if (textarea.style.fontWeight === 'bolder')
    textarea.style.fontWeight = 'normal';
  else
    textarea.style.fontWeight = 'bolder'
}

function changeToItalic() {
  if (textarea.style.fontStyle === 'italic')
    textarea.style.fontStyle = 'normal';
  else
    textarea.style.fontStyle = 'italic'
}

function changeToUnderline() {
  if (textarea.style.textDecoration === 'underline')
    textarea.style.textDecoration = 'none';
  else
    textarea.style.textDecoration = 'underline'
}
