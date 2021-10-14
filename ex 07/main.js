/*
## Exercise (7A): Simple playlist

  - Create a simple playlist application where users can add songs to a list. The song here is just a non-empty string. 
Image
## Exercise (7B): Advanced playlist

  - Extend the previous exercise such that songs can be removed too. Add a delete link or icon to each song; clicking the link/icon should remove the song from the list. 

*/

let songName = document.querySelector("#songname");
let myList = document.querySelector("#myList");

function AddSong() {
  if (songName.value !== "") {
    let liNode = document.createElement("li");
    let textNode = document.createTextNode(songName.value);
    liNode.appendChild(textNode);
    myList.appendChild(liNode);

    let buttonNode = document.createElement("button");
    buttonNode.innerHTML = "Delete Song";
    buttonNode.setAttribute("onclick", "deleteDis(this)");
    buttonNode.style.margin = "0 1em";
    liNode.appendChild(buttonNode);
  }
  else
    alert(`"Song Name" field should not be empty!`)

  songName.value = ""; // clear field
}

function removeAll() {
  let lis = document.querySelectorAll('#myList li');
  for (let i = 0; li = lis[i]; i++) {
    li.parentNode.removeChild(li);
  }
}

function deleteDis(obj) {
  obj.parentNode.remove();
}