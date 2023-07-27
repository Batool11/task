function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskList = document.getElementById("taskList");

  if (taskInput.value.trim() === "") {
    alert("Please enter a task!");
    return;
  }

  const task = document.createElement("li");
  task.innerHTML = taskInput.value;
  taskList.appendChild(task);
  taskInput.value = "";

  task.addEventListener("click", function() {
    this.classList.toggle("completed");
  });

  task.addEventListener("dblclick", function() {
    if (confirm("Are you sure you want to remove this task?")) {
      taskList.removeChild(this);
    }
  });
}
