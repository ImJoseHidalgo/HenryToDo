var toDoItems = [];

function ToDo(description) {
  this.description = description;
  this.complete = false;
}

ToDo.prototype.completeToDo = function () {
  this.complete = true;
};

function buildToDo(todo, index) {
  var toDoShell = document.createElement("div");
  toDoShell.classList.add("toDoShell");
  var toDoText = document.createElement("span");
  toDoText.innerHTML = todo.description;
  toDoText.id = index;
  if (todo.complete) {
    // toDoText.className = "completeText";
    toDoText.classList.add("completeText");
  }
  toDoShell.appendChild(toDoText);
  toDoText.addEventListener("click", completeToDo);
  return toDoShell;
}

function buildToDos(toDos) {
  var array = [];
  array = toDos.map((el, index) => buildToDo(el, index));
  return array;
}

function displayToDos() {
  var toDoContainer = document.querySelector("#toDoContainer");
  toDoContainer.innerHTML = "";
  var cosa = buildToDos(toDoItems);
  for (var i = 0; i < cosa.length; i++) {
    toDoContainer.appendChild(cosa[i]);
  }
}

function addToDo() {
  var input = document.querySelector("#toDoInput");
  var todo = new ToDo(input.value);

  toDoItems.push(todo);
  input.value = "";
  document.querySelector("h3").style.display = "none";
  displayToDos();
}

var button = document.querySelector("#addButton");
var input = document.querySelector("#toDoInput");

button.addEventListener("click", () => {
  if (input.value !== "") addToDo();
});

input.addEventListener("keyup", function (event) {
  if (event.keyCode === 13 && input.value !== "") addToDo();
});

function completeToDo(event) {
  const index = event.target.id;
  toDoItems[index].completeToDo();
  displayToDos();
}

displayToDos();
