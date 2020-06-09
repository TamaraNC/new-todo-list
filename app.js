//Selectors
const addTodo = document.querySelector(".add");
const input = document.querySelector(".input");
const list = document.querySelector(".list");

function add() {
    addTodo.addEventListener("click", e => {
        //Todo DIV
        const todoDiv = document.createElement("div");
        todoDiv.classList.add("todo");
        //Li
        const todo = document.createElement("li");
        todo.classList.add("todo-item");
        todo.innerText = input.value;
        todoDiv.appendChild(todo);
        //Check button
        const checkBtn = document.createElement("button");
        checkBtn.innerHTML = '<i class="fas fa-check"></i>';
        checkBtn.classList.add("check");
        todoDiv.appendChild(checkBtn);
        //Delete button
        const deleteBtn = document.createElement("button");
        deleteBtn.innerHTML = '<i class="fas fa-trash"></i>';
        deleteBtn.classList.add("delete");
        todoDiv.appendChild(deleteBtn);
        list.appendChild(todoDiv);
        //Clear input
        input.value = "";
    })
}

add();

list.addEventListener("click", deleteTodo);

function deleteTodo(e) {
    const item = e.target;
    if (item.classList[0] === "delete") {
        const todo = item.parentElement;
        todo.remove();
    }
    if (item.classList[0] === "check") {
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }
}

   
