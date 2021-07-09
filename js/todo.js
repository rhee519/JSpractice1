const todoForm = document.getElementById("todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.getElementById("todo-list");
const TODOS_KEY = "todos";

let todos = [];
const savedTodos = localStorage.getItem(TODOS_KEY);

// load saved To-Do's
if(savedTodos) {
    const parsedTodos = JSON.parse(savedTodos);
    todos = parsedTodos;
    parsedTodos.forEach(paintTodo);
}

// event listen (click)
todoForm.addEventListener("submit", handleTodoSubmit);

// save To-Do's
function saveTodo() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
}

// delete To-do's
function deleteTodo(event) {
    const li = event.target.parentElement;
    todos = todos.filter(todo => todo.id !== parseInt(li.id));
    li.remove();
    saveTodo();
}

// filetering
function sexyFilter(item) {
    return item !== 3;
}

// print To-Do's
function paintTodo(newTodoObj) {
    const li = document.createElement("li");
    li.id = newTodoObj.id;
    const span = document.createElement("span");
    const button = document.createElement("button");

    span.innerText = newTodoObj.text;
    button.innerText = ":)";
    button.addEventListener("click", deleteTodo);

    li.appendChild(span);
    li.appendChild(button);
    todoList.appendChild(li);
}

// Event handler (submit form)
function handleTodoSubmit(event) {
    event.preventDefault();
    const newTodo = todoInput.value;
    todoInput.value = "";
    const newTodoObj = {
        id: Date.now(), 
        text: newTodo
    };
    todos.push(newTodoObj);
    paintTodo(newTodoObj);
    saveTodo();
}