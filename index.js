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
      toDoShell.addEventListener("click", deleteTodo, false);

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

function createTodo() {
  document.querySelector("h3").style.display = "none";
  var indexStorage = Number(localStorage[0]);
  indexStorage++;
  var toDoShell = document.createElement("div");
  toDoShell.classList.add("toDoShell");
  toDoShell.id = indexStorage;
  toDoContainer.appendChild(toDoShell);
  toDoShell.addEventListener("click", deleteTodo, false);

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
// prueba.addEventListener("click", () => {
//   console.log(`${this.id}`);
// });
////////////////////////////
// function sabe() {
//   if (localStorage.length > 1) {
//     document.querySelector("h3").style.display = "none";
//   }
//   var indexStorage = Number(localStorage[0]);
//   var toDoContainer = document.getElementById("toDoContainer");

//   for (i = 1; i < localStorage.length; i++) {
//     if (localStorage.getItem(indexStorage)) {
//       var toDoShell = document.createElement("div");
//       toDoShell.classList.add("toDoShell");

//       toDoContainer.appendChild(toDoShell);

//       var toDoText = document.createElement("span");

//       toDoShell.appendChild(toDoText);
//       toDoText.innerHTML = localStorage.getItem(indexStorage);
//       toDoText.id = indexStorage;
//       indexStorage--;
//     } else {
//       indexStorage--;
//       i--;
//     }
//   }
// }
// window.onload = function () {
//   sabe();
// };

// ///////
// var toDoItems = [];

// function ToDo(description) {
//   this.description = description;
//   this.complete = false;
// }

// var indexStorage = 0;
// ToDo.prototype.completeToDo = function () {
//   this.complete = true;
// };

// function buildToDo(todo, index) {
//   var toDoShell = document.createElement("div");
//   toDoShell.classList.add("toDoShell");
//   var toDoText = document.createElement("span");
//   indexStorage = Number(localStorage[0]);
//   indexStorage++;
//   toDoText.innerHTML = todo.description;
//   toDoText.id = indexStorage;
//   localStorage.setItem(indexStorage, todo.description);
//   localStorage.setItem("0", indexStorage);
//   if (todo.complete) {
//     toDoText.classList.add("completeText");
//   }
//   toDoShell.appendChild(toDoText);
//   toDoText.addEventListener("click", completeToDo);
//   return toDoShell;
// }

// function buildToDos(toDos) {
//   var array = [];
//   array = toDos.map((el, index) => buildToDo(el, index));
//   return array;
// }

// function displayToDos() {
//   var toDoContainer = document.querySelector("#toDoContainer");
//   toDoContainer.innerHTML = "";
//   var cosa = buildToDos(toDoItems);
//   // for (var i = 0; i < cosa.length; i++) {
//   //   toDoContainer.appendChild(cosa[i]);
//   // }
// }

// function addToDo() {
//   var input = document.querySelector("#toDoInput");
//   var todo = new ToDo(input.value);

//   toDoItems.unshift(todo);
//   input.value = "";
//   document.querySelector("h3").style.display = "none";

//   displayToDos();
// }

// var button = document.querySelector("#addButton");
// var input = document.querySelector("#toDoInput");

// button.addEventListener("click", () => {
//   if (input.value !== "") {
//     addToDo();
//     sabe();
//     // location.reload();
//   }
// });

// input.addEventListener("keyup", function (event) {
//   if (event.keyCode === 13 && input.value !== "") {
//     addToDo();
//     sabe();
//     // location.reload();
//   }
// });

// function completeToDo(event) {
//   const index = event.target.id;
//   toDoItems[index].completeToDo();
//   displayToDos();
// }

// displayToDos();
