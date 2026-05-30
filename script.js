// Select Elements

const addTaskBtn = document.getElementById("addTaskBtn");

const taskContainer = document.querySelector(".task-container");

const totalTasks = document.getElementById("totalTasks");
const completedTasks = document.getElementById("completedTasks");
const remainingTasks = document.getElementById("remainingTasks");

// Update Stats Function

function updateStats() {

    const tasks = document.querySelectorAll(".task");

    const completed = document.querySelectorAll(".task.completed");

    totalTasks.textContent = tasks.length;

    completedTasks.textContent = completed.length;

    remainingTasks.textContent = tasks.length - completed.length;
}

// Add Delete Function

function addDeleteFunction(button) {

    button.addEventListener("click", function () {

        button.parentElement.parentElement.remove();

        updateStats();
    });
}

// Add Checkbox Function

function addCheckboxFunction(checkbox) {

    checkbox.addEventListener("change", function () {

        const task = checkbox.closest(".task");

        if (checkbox.checked) {

            task.classList.add("completed");

        } else {

            task.classList.remove("completed");
        }

        updateStats();
    });
}

// Existing Delete Buttons

const deleteButtons = document.querySelectorAll(".delete-btn");

deleteButtons.forEach(function (button) {

    addDeleteFunction(button);
});

// Existing Checkboxes

const checkboxes = document.querySelectorAll('input[type="checkbox"]');

checkboxes.forEach(function (checkbox) {

    addCheckboxFunction(checkbox);
});

// Add New Task

addTaskBtn.addEventListener("click", function () {

    // Task Text

    const taskText = prompt("Enter your task:");

    if (!taskText || taskText.trim() === "") {
        return;
    }

    // Task Category

    let category = prompt(
        "Enter category: WORK, SHOPPING, or PERSONAL"
    );

    if (!category) {
        category = "PERSONAL";
    }

    category = category.toUpperCase();

    // Tag Class

    let tagClass = "personal";

    if (category === "WORK") {
        tagClass = "work";
    }

    else if (category === "SHOPPING") {
        tagClass = "shopping";
    }

    // Create Task Div

    const task = document.createElement("div");

    task.classList.add("task");

    task.innerHTML = `
    
        <div class="left">

            <input type="checkbox">

            <span class="task-text">
                ${taskText}
            </span>

        </div>

        <div class="right">

            <span class="tag ${tagClass}">
                ${category}
            </span>

            <button class="delete-btn">
                Delete
            </button>

        </div>
    `;

    // Add To Container

    taskContainer.appendChild(task);

    // Add Functions To New Elements

    const newDeleteBtn = task.querySelector(".delete-btn");

    const newCheckbox = task.querySelector('input[type="checkbox"]');

    addDeleteFunction(newDeleteBtn);

    addCheckboxFunction(newCheckbox);

    // Update Numbers

    updateStats();
});

// Initial Stats Update

updateStats();