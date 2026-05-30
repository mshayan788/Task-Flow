const form = document.getElementById("taskForm");

const priorityOptions = document.querySelectorAll(".priority-option");

priorityOptions.forEach(option => {

  option.addEventListener("click", () => {

    priorityOptions.forEach(btn => {
      btn.classList.remove("active");
    });

    option.classList.add("active");

  });

});

form.addEventListener("submit", function(e){

  e.preventDefault();

  const title = document.getElementById("taskTitle").value;
  const description = document.getElementById("description").value;
  const dueDate = document.getElementById("dueDate").value;
  const category = document.getElementById("category").value;
  const reminder = document.getElementById("reminder").checked;

  const priority = document.querySelector(
    'input[name="priority"]:checked'
  ).value;

  if(title.trim() === ""){
    alert("Please enter task title");
    return;
  }

  alert(
`
Task Added Successfully!

Title: ${title}
Description: ${description}
Due Date: ${dueDate}
Category: ${category}
Priority: ${priority}
Reminder: ${reminder ? "Yes" : "No"}
`
  );

});

form.addEventListener("reset", () => {

  setTimeout(() => {

    priorityOptions.forEach(btn => {
      btn.classList.remove("active");
    });

    priorityOptions[1].classList.add("active");

  }, 0);

});
// Back Button
document.getElementById("backBtn").addEventListener("click", () => {
    window.location.href = "index.html";
});

// Form Submit
document.getElementById("taskForm").addEventListener("submit", (e) => {
    e.preventDefault(); // Stops page refresh

    window.location.href = "2 page.html";
});
