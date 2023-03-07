const toDos = [];
const toDosUl = document.querySelector(".todos");
const addToDoForm = document.querySelector(".add-todo-form");

function addTodo() {
  const addToDo = document.querySelector("[name= 'add-todo']");
  const newToDo = { value: addToDo.value, done: false };
  toDos.push(newToDo);
  addToDo.value = "";
}

function populateList() {
  toDos.forEach((todo) => {
    let li = document.createElement("li");
    let input = document.createElement("input");
    input.type = "checkbox";
    input.id = todo.value;
    input.name = todo.value;
    let label = document.createElement("label");
    label.for = todo.value;
    label.innerText = todo.value;
    li.append(input, label);
    toDosUl.append(li);
  });
}
