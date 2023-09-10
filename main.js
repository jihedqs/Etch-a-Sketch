let color = "black";
let click = true;
let grid = true;
let gridButton = document.querySelector(".gridLine");

function board(size) {
  let board = document.querySelector(".board");
  //remove old elements
  let squares = board.querySelectorAll("div");
  squares.forEach((div) => {
    div.remove();
  });

  //create grid
  board.style.gridTemplateColumns = `repeat(${size},1fr)`;
  board.style.gridTemplateRows = `repeat(${size},1fr)`;

  let pow = size * size;
  for (let i = 0; i < pow; i++) {
    let square = document.createElement("div");
    square.count = 0;
    square.addEventListener("mouseover", (e) => {
      if (click) {
        if (color === "black") {
          e.target.style.backgroundColor = "#707070";
          e.target.style.opacity = 1;
        } else if (color === "modern") {
          e.target.style.backgroundColor = "#707070";
          e.target.count += 1;
          e.target.style.opacity = 0.4 * e.target.count;
        } else if (color === "random") {
          const psychedelicPallete = [
            "#EF476F",
            "#FFD166",
            "#06D6A0",
            "#118AB2",
            "#073B4C",
          ];
          const randomColor = Math.floor(
            Math.random() * psychedelicPallete.length
          );
          e.target.style.opacity = 1;
          e.target.style.backgroundColor = psychedelicPallete[randomColor];
        } else {
          e.target.style.backgroundColor = "#D8D8D8";
          e.target.style.opacity = "1";
        }
      }
    });
    square.style.backgroundColor = "#D8D8D8";
    square.style.borderTop = "1px solid rgba(0, 0, 0, 0.16)";
    square.style.borderRight = "1px solid rgba(0, 0, 0, 0.16)";
    gridButton.addEventListener("click", toggleGridLines);
    board.insertAdjacentElement("beforeend", square);
  }
}
board(16);
//take color from user
function changeColor(choice) {
  color = choice;
}
//show grid lines

function changeSize(input) {
  board(input);
  document.querySelector("label").textContent = input + "x" +input;
}

//reset button
function reset() {
  let board = document.querySelector(".board");
  let squares = board.querySelectorAll("div");
  squares.forEach((div) => {
    div.style.backgroundColor = "#D8D8D8";
  });
}
//when click stop and when click again color
document.querySelector("body").addEventListener("click", (e) => {
  if (e.target.tagName != "BUTTON" && e.target.tagName != "INPUT") {
    click = !click;
    if (click) {
      document.querySelector("h2").textContent = "Mode: click";
    } else {
      document.querySelector("h2").textContent = "Mode: off";
    }
  }
});

function toggleGridLines() {
  grid = !grid;
  let squares = document.querySelectorAll(".board div");
  squares.forEach((square) => {
    if (grid) {
      square.style.borderTop = "1px solid rgba(0, 0, 0, 0.16)";
      square.style.borderRight = "1px solid rgba(0, 0, 0, 0.16)";
    } else {
      square.style.borderTop = "1px solid transparent";
      square.style.borderRight = "1px solid transparent";
    }
  });
}
