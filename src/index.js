"use strict";
// const buttons = {
//   draw: document.querySelector("#draw"),
//   fill: document.querySelector("#fill"),
//   sample: document.querySelector("#sample"),
//   eraser: document.querySelector("#eraser"),
//   ligthen: document.querySelector("#ligthen"),
//   darken: document.querySelector("#darken"),
// };

// function restoreButtons() {
//   for (const buttonKey in buttons) {
//     buttons[buttonKey].style.background = "rgb(108, 108, 108)";
//     buttons[buttonKey].style.color = "rgb(230, 214, 187)";
//   }
//   paint = false;
// }

function updateFooter() {
  const footer = document.querySelector("footer");
  const paragraph = document.createElement("p");
  paragraph.textContent = `Copyright © ${new Date().getFullYear()} cramirez`;

  const anchor = document.createElement("a");
  anchor.setAttribute("href", "https://github.com/cramirez16");
  anchor.setAttribute("target", "_blank");

  const githubIcon = document.createElement("i");
  githubIcon.setAttribute("class", "fab fa-github");

  anchor.appendChild(githubIcon);
  footer.appendChild(paragraph);
  footer.appendChild(anchor);
}

function createCell(cellSize) {
  const cell = document.createElement("div");
  cell.style.width = `${cellSize}px`;
  cell.style.height = `${cellSize}px`;
  cell.style.border = "1px solid white";
}

function createBoard(numOfCells, cellSize) {
  const main = document.querySelector("main");

  for (let row = 0; row < numOfCells; row++) {
    const row = document.createElement("p");
    row.style.display = "flex";
    for (let col = 0; col < numOfCells; col++) {
      const cell = document.createElement("div");
      cell.style.width = `${cellSize}px`;
      cell.style.height = `${cellSize}px`;
      cell.style.border = "1px solid white";
      cell.setAttribute("class", `cell`);
      row.appendChild(cell);
    }
    main.appendChild(row);
  }
}

// function buttonActiveStyle(buttonName) {
//   buttons[buttonName].style.background = "rgb(140, 140, 140)";
//   buttons[buttonName].style.color = "rgb(99, 226, 103)";
// }

// function buttonListen() {
//   const boardCells = document.querySelectorAll("main>p>div");
//   const menuButtons = {
//     draw: () => {
//       restoreButtons();
//       buttonActiveStyle("draw");
//       drawListen(boardCells);
//     },
//     fill: () => {
//       restoreButtons();
//       filling(boardCells);
//     },
//     sample: () => {
//       restoreButtons();
//       buttonActiveStyle("sample");
//       sampleListen(boardCells);
//     },
//     eraser: () => {
//       restoreButtons();
//       buttonActiveStyle("eraser");
//       eraserListen(boardCells);
//     },
//     ligthen: () => {
//       restoreButtons();
//       buttonActiveStyle("ligthen");
//       lightenListen(boardCells);
//     },
//     darken: () => {
//       restoreButtons();
//       buttonActiveStyle("darken");
//       darkenListen(boardCells);
//     },
//   };

//   const butt = document.querySelector(".container");
//   butt.addEventListener("click", (e) => {
//     const action = e.target.getAttribute("id");
//     if (!action) return;
//     menuButtons[action]();
//   });
// }

// function mainListen() {
//   const main = document.querySelector("main");
//   main.addEventListener("mouseup", () => {
//     paint = false;
//   });
//   main.addEventListener("mousedown", () => {
//     paint = true;
//   });
// }

let paint = false;

function main() {
  updateFooter();
  // createBoard(16, 25);
  // mainListen();
  // buttonListen();
}

main();
