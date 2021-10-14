/*
## Exercise (5): Input check

  - You are given a form with two password fields and a submit button.
  - Perform input check and display an error message next to the corresponding field if there is an error.
    * Passwords must be at least 6 characters long.
    * The two passwords must match.
  - The placeholders for the error messages have already been prepared (div-s with class "err").
  - By default the submit button should be hidden. Display the button only when there are no errors.
*/

let passOne = document.getElementById("password1");
let passTwo = document.querySelector("#password2");
let label1 = document.querySelector("#passLabel1");
let label2 = document.querySelector("#passLabel2");
let label3 = document.querySelector("#label3");
let passOneCondition = false, passTwoCondition = false;
let submitButton = document.querySelector("#submitButton");
label1.style.display = "none";
label2.style.display = "none";
label3.style.display = "none";
submitButton.style.display = "none";

function passOneCheck() {
  passOneCondition = (passOne.value.length < 6) ? true : false;
  if (passOneCondition) {
    label1.style.display = "unset";
    label1.innerHTML = "Too short!"
  }
  else {
    label1.style.display = "none";
    label1.innerHTML = ""
  }
}

function passTwoCheck() {
  passOneCondition = (passTwo.value.length < 6) ? true : false;
  if (passOneCondition) {
    label2.style.display = "unset";
    label2.innerHTML = "Too short!"
  }
  else {
    label2.style.display = "none";
    label2.innerHTML = ""
  }
}

function compareBothPasswords() {
  if (passOne.value === passTwo.value) {
    {
      label3.style.display = "none";
      if (passOneCondition === passTwoCondition)
        submitButton.style.display = "unset";
      else
        submitButton.style.display = "none";
    }
  }
  else {
    submitButton.style.display = "none";
    label3.style.display = "unset";
    label3.innerHTML = "Two passwords don't match!"

  }
}