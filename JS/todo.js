const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

//function to addTask, running when we click add button
function addTask() {
    const taskText = taskInput.value;
    taskInput.value = "";
    if (taskText) {
        //creating li and p tags
        const li = document.createElement("li");
        const taskLabel = document.createElement("p");
        //p tag's content is an input's text
        taskLabel.textContent = taskText;

        //creating input tag
        const completeCheckbox = document.createElement("input");
        //changing type of input tag to checkbox
        completeCheckbox.type = "checkbox";
        //run toggleComplete function if out checkbox is changing
        completeCheckbox.addEventListener("change", toggleComplete);

        //creating button tag
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        //deleteTask function runs if we click button
        deleteButton.addEventListener("click", deleteTask);

        //adding checkbox, label and button to li tag
        li.appendChild(completeCheckbox);
        li.appendChild(taskLabel);
        li.appendChild(deleteButton);
        //adding li tag to task list
        taskList.appendChild(li);

    }
}

function toggleComplete() {
    const taskContent = this.nextSibling;
    //adding complete class to taskContent
    taskContent.classList.toggle("complete");
}

function deleteTask() {
    //removing li tag from html
    this.parentElement.remove();
}