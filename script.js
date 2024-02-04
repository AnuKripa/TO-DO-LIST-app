document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("taskInput");
    const addBtn = document.getElementById("addBtn");
    const taskList = document.getElementById("taskList");

    addBtn.addEventListener("click", addTask);

    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText !== "") {
            const taskElement = document.createElement("div");
            taskElement.classList.add("task");
            taskElement.innerHTML = `
                <span>${taskText}</span>
                <button class="delete-btn">X</button>
            `;
            taskList.appendChild(taskElement);

            taskInput.value = "";

            // Add event listener for task deletion
            const deleteBtn = taskElement.querySelector(".delete-btn");
            deleteBtn.addEventListener("click", function () {
                taskList.removeChild(taskElement);
            });

            // Add event listener for double-click to remove task
            taskElement.addEventListener("dblclick", function () {
                taskList.removeChild(taskElement);
            });
        }
    }
});
