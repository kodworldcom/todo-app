document.addEventListener("DOMContentLoaded", () => {
  const taskInput = document.getElementById("task-input");
  const addTaskButton = document.getElementById("add-task");
  const taskList = document.getElementById("task-list");

  addTaskButton.addEventListener("click", () => {
    const taskText = taskInput.value.trim();
    if (taskText) {
      const li = document.createElement("li");
      li.innerHTML = `${taskText} 
      <button class="remove-task">Remove</button>`;
      taskList.appendChild(li);
      taskInput.value = "";

      li.querySelector(".remove-task").addEventListener("click", () => {
        taskList.removeChild(li);
      });
    }
  });

  taskInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      addTaskButton.click();
    }
  });
});
