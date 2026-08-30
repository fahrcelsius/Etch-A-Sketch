const container = document.querySelector(".container");

for (let i = 1; i < 256; i++) {
  let mainGrids = document.createElement("div");
  container.appendChild(mainGrids);
  mainGrids.classList.add("mainGrids");
}



