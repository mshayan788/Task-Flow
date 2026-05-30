/* CHECKLIST WORKING */

const checklistItems = document.querySelectorAll(".check-item");

checklistItems.forEach((item)=>{

    const checkbox = item.querySelector("input");

    checkbox.addEventListener("change", ()=>{

        if(checkbox.checked){

            item.classList.add("completed");

        }

        else{

            item.classList.remove("completed");

        }

    });

});

/* MARK COMPLETE BUTTON */

const completeBtn = document.getElementById("completeBtn");

completeBtn.addEventListener("click", ()=>{

    checklistItems.forEach((item)=>{

        const checkbox = item.querySelector("input");

        checkbox.checked = true;

        item.classList.add("completed");

    });

    document.getElementById("statusText").textContent = "Completed";

    alert("Task Marked Complete!");

});

/* EDIT BUTTON */

const editBtn = document.getElementById("editBtn");

editBtn.addEventListener("click", ()=>{

    const newTitle = prompt(
        "Edit Task Title:",
        document.querySelector(".task-title").textContent
    );

    if(newTitle !== null && newTitle.trim() !== ""){

        document.querySelector(".task-title").textContent = newTitle;

    }

});

/* BACK BUTTON */

const backBtn = document.getElementById("backBtn");

backBtn.addEventListener("click", ()=>{

    alert("Going Back To Task List");

});
// Back button
document.getElementById("backBtn").addEventListener("click", () => {
    window.location.href = "index.html";
});

// Edit button
document.getElementById("editBtn").addEventListener("click", () => {
    window.location.href = "3page.html";
});