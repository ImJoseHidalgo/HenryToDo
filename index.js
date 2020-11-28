var toDoContainer = document.getElementById("toDoContainer");
function sabe() {
  if (localStorage.length === 0) {
    localStorage.setItem("0", "0");
  }
  if (localStorage.length > 1) {
    document.querySelector("h3").style.display = "none";
  }

  var indexStorage = Number(localStorage[0]);
  for (i = 1; i < localStorage.length; i++) {
    if (localStorage.getItem(indexStorage)) {
      var toDoShell = document.createElement("div");
      toDoShell.classList.add("toDoShell");
      toDoShell.id = indexStorage;
      toDoContainer.appendChild(toDoShell);
      deleteButton(indexStorage, toDoShell);

      var toDoText = document.createElement("span");
      toDoShell.appendChild(toDoText);

      toDoText.innerHTML = localStorage.getItem(indexStorage);
      toDoText.id = indexStorage;
      indexStorage--;
    } else {
      indexStorage--;
      i--;
    }
  }
}
window.onload = function () {
  sabe();
};

function deleteButton(indexStorage, toDoShell) {
  var toDoDelete = document.createElement("div");
  toDoDelete.classList.add("toDoDelete");
  toDoDelete.id = indexStorage;
  toDoDelete.innerText = "Borrar";
  toDoShell.appendChild(toDoDelete);
  toDoDelete.addEventListener("click", deleteTodo, false);
}

function createTodo() {
  document.querySelector("h3").style.display = "none";
  var indexStorage = Number(localStorage[0]);
  indexStorage++;
  var toDoShell = document.createElement("div");
  toDoShell.classList.add("toDoShell");
  toDoShell.id = indexStorage;
  toDoContainer.appendChild(toDoShell);
  deleteButton(indexStorage, toDoShell);

  var toDoText = document.createElement("span");
  toDoShell.appendChild(toDoText);

  toDoText.innerHTML = input.value;
  toDoText.id = indexStorage;

  localStorage.setItem(indexStorage, input.value);
  localStorage.setItem("0", indexStorage);
  input.value = "";
}

var button = document.querySelector("#addButton");
var input = document.querySelector("#toDoInput");

button.addEventListener("click", () => {
  if (input.value !== "") {
    createTodo();
  }
});

input.addEventListener("keyup", function (event) {
  if (event.keyCode === 13 && input.value !== "") {
    createTodo();
  }
});

function deleteTodo() {
  localStorage.removeItem(`${this.id}`);

  var d = document.getElementById("toDoContainer");
  var d_h = document.getElementById(`${this.id}`);
  d.removeChild(d_h);

  if (localStorage.length === 1) {
    document.querySelector("h3").style.display = "";
  }
}
