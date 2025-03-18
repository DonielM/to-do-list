const todoList = [];

function addTask() {
  const input = document.querySelector(".js-task-input");
  const taskInput = input.value;
  todoList.push(taskInput);
  console.log(todoList);
}

document.querySelector(".js-add-task-button").addEventListener("click", () => {
  addTask();
});
