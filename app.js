var boxes = document.getElementsByClassName("box");
var playerOne = [];
var playerTow = [];
var attemptes = [];
var player = true;

let winner;
for (let i = 0; i < boxes.length; i++) {
  boxes[i].addEventListener("click", function (e) {
    attemptes.push(e.target.id);
    if (player) {
      // console.log("children", e.target.children.length);
      if (e.target.children.length === 0) {
        var xSymbol = document.createElement("img");
        xSymbol.setAttribute(
          "src",
          "https://image.flaticon.com/icons/svg/1828/1828665.svg"
        );
        xSymbol.style = "width: 100%;  height: 100px";
        e.target.appendChild(xSymbol);
      }
      player = !player;
      playerOne.push(e.target.id);
      if (playerOne.length === 3) {
        if (playerOne[0] - playerOne[1] === playerOne[1] - playerOne[2]) {
          winner = "X Player Wins !";
          playerOne = [];
        }
        playerOne = [];
      }
    } else {
      if (e.target.children.length === 0) {
        var oSymbol = document.createElement("img");
        oSymbol.setAttribute(
          "src",
          "https://image.flaticon.com/icons/svg/808/808569.svg"
        );
        oSymbol.style = "width: 100%;  height: 100px";
        e.target.appendChild(oSymbol);
      }
      playerTow.push(e.target.id);
      player = !player;
      if (playerTow.length === 3) {
        if (playerTow[0] - playerTow[1] === playerTow[1] - playerTow[2]) {
          winner = "O Player Wins !";
          playerTow = [];
        }
        playerTow = [];
      }
    }
    if (attemptes.length === 9) {
      for (let i = 0; i < boxes.length; i++) {
        boxes[i].innerHTML = "";
        attemptes = [];
        player = true;
      }
      alert(winner);
    }
  });
}
