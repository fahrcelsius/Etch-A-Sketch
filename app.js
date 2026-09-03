const container = document.querySelector(".container");

let gridInput = 15;
let gridResult = gridInput ** 2;

let containerHeight = 600;
let containerWidth = 600;

let calcWidth = containerWidth / gridInput;
let calcHeight = containerHeight / gridInput;

let root = document.querySelector(":root");
root.style.setProperty("--containerHeight", `${containerHeight}px`);
root.style.setProperty("--containerWidth", `${containerWidth}px`);

function number(number) {
  gridInput = number;
  gridResult = gridInput ** 2;
  calcWidth = containerWidth / gridInput;
  calcHeight = containerHeight / gridInput;
  gridSize();
}

// change the button into input feature instead to give flexibility

let buttonEight = document.querySelector(".eight");
let buttonSixteen = document.querySelector(".sixteen");
let buttonThirtyTwo = document.querySelector(".thirtyTwo");
let buttonSixtyFour = document.querySelector(".sixtyFour");

buttonEight.addEventListener("click", () => number(8));
buttonSixteen.addEventListener("click", () => number(16));
buttonThirtyTwo.addEventListener("click", () => number(32));
buttonSixtyFour.addEventListener("click", () => number(64));

function gridAmount() {
  container.innerHTML = "";
  for (let i = 1; i <= gridResult; i++) {
    let grids = document.createElement("div");
    grids.classList.add("mainGrids");
    container.appendChild(grids);
  }
}

function gridSize() {
  gridAmount();
  let mainGrids = document.querySelectorAll(".mainGrids");
  let index = 0, length = mainGrids.length;
  for ( ; index < length; index++) {
    mainGrids[index].style.width = `${calcWidth}px`;
    mainGrids[index].style.height = `${calcHeight}px`;
  }
}

gridSize();

let mainGrids = document.querySelectorAll(".mainGrids");

  // mainGrids.addEventListener("mousedown", () => {
  //   mainGrids.style.backgroundColor = "black";
  // });

for (let i = 0; i < mainGrids.length; i++) {
  mainGrids[i].addEventListener("mouseover", () => {
    mainGrids[i].style.backgroundColor = "black";
  });
}



