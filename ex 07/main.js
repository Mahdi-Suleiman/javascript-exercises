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
  let liNode = document.createElement("li");
  let textNode = document.createTextNode(songName.value);
  liNode.appendChild(textNode);
  document.getElementById("myList").appendChild(liNode);
  songName.value = "";
}

function removeAll() {
  let lis = document.querySelectorAll('#myList li');
  for (let i = 0; li = lis[i]; i++) {
    li.parentNode.removeChild(li);
  }
}
