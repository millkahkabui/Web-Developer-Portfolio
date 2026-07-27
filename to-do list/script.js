function addTask() {

    let taskInput = document.getElementById("task");
    let task = taskInput.value;

    if (task === "") {
        alert("Please enter a task.");
        return;
    }

    let li = document.createElement("li");

    li.innerHTML =
        '<span onclick="completeTask(this)">' + task + '</span>' +
        '<button class="deleteBtn" onclick="deleteTask(this)">Delete</button>';

    document.getElementById("taskList").appendChild(li);

    taskInput.value = "";
}

function completeTask(element) {
    element.classList.toggle("completed");
}

function deleteTask(button) {
    button.parentElement.remove();
}