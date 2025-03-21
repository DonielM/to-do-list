const todoList = [];

displayTodo(todoList);
// this functions adds tasks typed in the input to the todoList array
function addTask() {
  const input = document.querySelector(".js-task-input");
  const taskInput = input.value.trim();
  const dateInput = document.querySelector(".js-date-input").value;

  if (taskInput === "") {
    alert("Please enter a task");
    return;
  }

  if (dateInput === "") {
    alert("Please enter a date");
    return;
  }

  todoList.push({ taskName: taskInput, taskDate: dateInput });
  console.log(todoList);

  input.value = "";
  displayTodo(todoList);
}

document.querySelector(".js-add-task-button").addEventListener("click", () => {
  addTask();
});

function displayTodo(array) {
  let todoListHTML = ``;
  for (let i = 0; i < array.length; i++) {
    const todoObject = array[i];
    // const taskName = todoObject.taskName;
    const { taskName, taskDate } = todoObject;
    // const taskDate = todoObject.taskDate;
    const html = `
    <div class="task-name">${taskName}</div>
    <div class="task-date">${taskDate}</div>
      <button class="js-delete-button delete-button" data-index="${i}">
        Delete
      </button> 
    `;

    todoListHTML += html;
  }
  document.querySelector(".js-display-todo").innerHTML = todoListHTML;
  // selecting all the delete buttons, then getting index from the
  //  data attribute and use it to remove the task fom the array
  const deleteButtons = document.querySelectorAll(".js-delete-button");
  deleteButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const index = button.dataset.index;
      todoList.splice(index, 1);
      displayTodo(todoList);
    });
  });
}

displayTodo(todoList);

document.body.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    addTask();
  }
});
