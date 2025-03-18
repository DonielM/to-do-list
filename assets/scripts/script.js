const todoList = [];

// this functions adds tasks typed in the input to the todoList array
function addTask() {
  const input = document.querySelector(".js-task-input");
  const taskInput = input.value;
  todoList.push(taskInput);
  console.log(todoList);

  input.value = "";
}

document.querySelector(".js-add-task-button").addEventListener("click", () => {
  addTask();
});
