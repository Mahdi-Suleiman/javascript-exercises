/*
## Exercise (3): Changing images

  - The page shows a select list and a "no image" picture by default.
  - Once the user changes the selection in the list, display the selected image.
    * Set the src of the image to the option value and the alt of the image to the name of the option.
 */
let flag = document.querySelector("#flags");
let myImg = document.querySelector("#myImg");
function imgChange() {
  switch (flag.value) {
    case 'none':
      myImg.src = "https://upload.wikimedia.org/wikipedia/commons/3/3f/Placeholder_view_vector.svg";
      myImg.alt = `flag of no country`;
      break;

    case 'jordan':
      myImg.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Flag_of_Jordan.svg/1200px-Flag_of_Jordan.svg.png";
      myImg.alt = `flag of ${flag.value}`;
      break;
    case 'norway':
      myImg.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Flag_of_Norway.svg/2560px-Flag_of_Norway.svg.png";
      myImg.alt = `flag of ${flag.value}`;
      break;
    case 'usa':
      myImg.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/2560px-Flag_of_the_United_States.svg.png";
      myImg.alt = `flag of ${flag.value}`;
      break;
    case 'germny':
      myImg.src = "https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Flag_of_Germany.svg/1200px-Flag_of_Germany.svg.png";
      myImg.alt = `flag of ${flag.value}`
      break;

    default:
      break;
  }
}