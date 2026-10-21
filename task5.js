const box = document.getElementById("box");

box.addEventListener("mouseover", function () {
  box.style.backgroundColor = "#111";
  box.style.color = "#fff";
  box.textContent = "Mouse is over";
});

box.addEventListener("mouseout", function () {
  box.style.backgroundColor = "";
  box.style.color = "";
  box.textContent = "Hover over me";
});