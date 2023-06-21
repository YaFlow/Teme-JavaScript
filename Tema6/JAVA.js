
const table = [
  0, 1, 0, 1, 0, 1, 0, 1,
  1, 0, 1, 0, 1, 0, 1, 0,
  0, 1, 0, 1, 0, 1, 0, 1,
  1, 0, 1, 0, 1, 0, 1, 0,
  0, 1, 0, 1, 0, 1, 0, 1,
  1, 0, 1, 0, 1, 0, 1, 0,
  0, 1, 0, 1, 0, 1, 0, 1,
  1, 0, 1, 0, 1, 0, 1, 0,
];
const element = document.getElementById("chessboard");

for (let i = 0; i < table.length; i++) {

  const box = document.createElement("div");
  
  element.appendChild(box);
  if (table[i] == 0) {
    box.classList = "square-white";
  }
  else {
    box.classList = "square-black";
  }
}


































