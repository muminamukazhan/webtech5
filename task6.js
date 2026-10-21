const input = document.getElementById("textInput");
const output = document.getElementById("output");

input.addEventListener("keyup", function () {
  output.textContent = "You typed: " + input.value;
});