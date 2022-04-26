let grid = document.querySelector(".grid");
let slider = document.getElementById("myRange");
let button = document.querySelector(".clear-button");
let sliderLabel = document.querySelector(".slider-label");
let numSquares = slider.innerHTML.value;

let mouseDown = false;
document.body.onmousedown = () => mouseDown = true;
document.body.onmouseup = () => mouseDown = false;
slider.addEventListener("change", changeGridSize);
button.addEventListener("click", resetGrid);


setGrid(numSquares);

function setGrid(numSquares = 256) {
  for (let i = 1; i <= numSquares; i++){
    let squareDiv = document.createElement("div");
    squareDiv.classList.add("gridSquare");
    grid.appendChild(squareDiv);
    squareDiv.addEventListener("mouseover", setColor);
  }
}

function setColor(e){
  if (e.type === "mouseover" && !mouseDown) return
  e.target.style.backgroundColor = "#FF10F0";
}

function resetGrid() {
  let allSquares = document.querySelectorAll(".gridSquare");
  for (let i = 1; i <= allSquares.length; i++){
    if (allSquares[i]){
      allSquares[i].style.backgroundColor = "black";
    }
  }
}

function changeGridSize(){
  sliderLabel.textContent = `${slider.value} x ${slider.value}`;
  setGrid(slider.value * slider.value);
  grid.style.gridTemplateRows = `repeat(${slider.value}, 1fr)`;
  grid.style.gridTemplateColumns = `repeat(${slider.value}, 1fr)`;
  resetGrid();
}