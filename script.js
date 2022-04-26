let container = document.querySelector(".container");

for (let i = 1; i <= 256; i++){
  let squareDiv = document.createElement("div");
  container.appendChild(squareDiv);
  squareDiv.addEventListener("mouseover", () => squareDiv.style.backgroundColor = "black");
}

document.getElementsByClassName("div").addEv