const container = document.querySelector(".container");

let gridInput = 32;
let gridResult = gridInput ** 2;

for (let i = 1; i <= gridResult; i++) {
  let mainGrids = document.createElement("div");
  container.appendChild(mainGrids);
  mainGrids.classList.add("mainGrids");
}



