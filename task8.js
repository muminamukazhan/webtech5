const input = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const list = document.getElementById("taskList");
const error = document.getElementById("error");

let tasks = [];

function render() {
  list.innerHTML = "";

  tasks.forEach(function (task, index) {
    const li = document.createElement("li");
    if (task.done) {
      li.classList.add("done");
    }

    const span = document.createElement("span");
    span.textContent = task.text;
    span.addEventListener("click", function () {
      tasks[index].done = !tasks[index].done;
      render();
    });

    const deleteBtn = document.createElement("button");
    deleteBtn.className = "btn";
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", function () {
      tasks.splice(index, 1);
      render();
    });

    li.appendChild(span);
    li.appendChild(deleteBtn);
    list.appendChild(li);
  });
}

function addTask() {
  const text = input.value.trim();

  if (text === "") {
    error.textContent = "Please enter a task.";
    return;
  }

  error.textContent = "";
  tasks.push({ text: text, done: false });
  input.value = "";
  input.focus();
  render();
}

addBtn.addEventListener("click", addTask);

input.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    addTask();
  }
});