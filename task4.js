const list = document.getElementById("list");
const addBtn = document.getElementById("addBtn");
const removeBtn = document.getElementById("removeBtn");

let count = 0;

addBtn.addEventListener("click", function () {
  count++;
  const li = document.createElement("li");
  li.textContent = "Item " + count;
  list.appendChild(li);
});

removeBtn.addEventListener("click", function () {
  if (list.lastElementChild) {
    list.removeChild(list.lastElementChild);
    count--;
  }
});