const box = document.getElementById("box");
const colorBtn = document.getElementById("colorBtn");
const sizeBtn = document.getElementById("sizeBtn");

const colors = ["#ffffff", "#ffe0e0", "#e0f0ff", "#e3ffe0", "#fff6cc", "#ead9ff"];
const sizes = [18, 24, 32, 40];

let colorIndex = 0;
let sizeIndex = 0;

colorBtn.addEventListener("click", function () {
  colorIndex = (colorIndex + 1) % colors.length;
  box.style.backgroundColor = colors[colorIndex];
});

sizeBtn.addEventListener("click", function () {
  sizeIndex = (sizeIndex + 1) % sizes.length;
  box.style.fontSize = sizes[sizeIndex] + "px";
});