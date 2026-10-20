const firstName = "Mumina";
const age = 17;
const isStudent = true;

const a = 12;
const b = 5;

const sum = a + b;
const difference = a - b;
const product = a * b;
const quotient = a / b;
const remainder = a % b;

const greeting = "Hello, " + firstName + "!";
const info = `${firstName} is ${age} years old. Student: ${isStudent}`;

console.log("Types:", typeof firstName, typeof age, typeof isStudent);
console.log("Sum:", sum);
console.log("Difference:", difference);
console.log("Product:", product);
console.log("Quotient:", quotient);
console.log("Remainder:", remainder);
console.log(greeting);
console.log(info);

document.getElementById("output").textContent =
  "Types: " + typeof firstName + ", " + typeof age + ", " + typeof isStudent + "\n" +
  a + " + " + b + " = " + sum + "\n" +
  a + " - " + b + " = " + difference + "\n" +
  a + " * " + b + " = " + product + "\n" +
  a + " / " + b + " = " + quotient + "\n" +
  a + " % " + b + " = " + remainder + "\n" +
  greeting + "\n" +
  info;