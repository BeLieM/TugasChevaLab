let tasks = [];

const taskList = document.getElementById("taskList");
const taskTitleInput = document.getElementById("taskTitle");
const taskDescriptionInput = document.getElementById("taskDescription");
const taskDeadlineInput = document.getElementById("taskDeadline");
const addTaskBtn = document.getElementById("addTaskBtn");

function renderTasks() {
  taskList.innerHTML = "";

  tasks.forEach((task, index) => {
    const taskElement = document.createElement("div");
    taskElement.className = "cardTask";
    taskElement.innerHTML = `
      <h3>${task.title}</h3>
      <p>${task.description}</p>
      <div class="footerTask">
        <span>Deadline: ${task.deadline}</span>
        <button class="delete-button" data-index="${index}">Hapus</button>
      </div>
    `;
    taskList.appendChild(taskElement);
  });

  document.querySelectorAll(".delete-button").forEach((button) => {
    button.addEventListener("click", function () {
      const index = parseInt(this.getAttribute("data-index"));
      deleteTask(index);
    });
  });
}

function addTask() {
  const title = taskTitleInput.value;
  const description = taskDescriptionInput.value;
  const deadline = taskDeadlineInput.value;

  // Validate inputs
  if (title && description && deadline) {
    // Add new task to tasks array
    tasks.push({
      title: title,
      description: description,
      deadline: deadline,
    });

    // Clear input fields
    taskTitleInput.value = "";
    taskDescriptionInput.value = "";
    taskDeadlineInput.value = "";

    renderTasks();
  } else {
    alert("Silakan isi semua field dengan benar!");
  }
}

function deleteTask(index) {
  // Remove task at the specified index
  tasks.splice(index, 1);

  // Re-render tasks
  renderTasks();
}

addTaskBtn.addEventListener("click", addTask);

renderTasks();
