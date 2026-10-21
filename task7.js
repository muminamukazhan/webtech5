const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const operation = document.getElementById("operation");
const calcBtn = document.getElementById("calcBtn");
const result = document.getElementById("result");
const error = document.getElementById("error");

function calculate() {
  error.textContent = "";

  if (num1.value === "" || num2.value === "") {
    error.textContent = "Please enter both numbers.";
    return;
  }

  const a = Number(num1.value);
  const b = Number(num2.value);
  let answer;

  switch (operation.value) {
    case "+":
      answer = a + b;
      break;
    case "-":
      answer = a - b;
      break;
    case "*":
      answer = a * b;
      break;
    case "/":
      if (b === 0) {
        error.textContent = "Division by zero is not allowed.";
        return;
      }
      answer = a / b;
      break;
  }

  result.textContent = "Result: " + answer;
}

calcBtn.addEventListener("click", calculate);