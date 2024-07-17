// script.js

document.addEventListener("DOMContentLoaded", () => {
    const button = document.querySelector(".buttoninput");
    const textarea = document.querySelector(".textarea");
    const timeinput = document.querySelector(".timeinput");
    const todolist = document.querySelector(".todolist");

    button.addEventListener("click", () => {
        const taskText = textarea.value.trim();
        const taskTime = timeinput.value.trim();

        if (taskText !== "" && taskTime !== "") {
            addTask(taskText, taskTime);
            textarea.value = "";
            timeinput.value = "";
        }
    });

    function addTask(text, time) {
        const task = document.createElement("div");
        task.classList.add("task");

        const taskText = document.createElement("span");
        taskText.textContent = `${text} - ${time}`;

        const buttonContainer = document.createElement("div");
        buttonContainer.classList.add("buttons");

        const doneButton = document.createElement("button");
        doneButton.textContent = "Done";
        doneButton.classList.add("done");
        doneButton.addEventListener("click", () => {
            task.classList.toggle("completed");
        });

        const pauseButton = document.createElement("button");
        pauseButton.textContent = "Pause";
        pauseButton.classList.add("pause");
        pauseButton.addEventListener("click", () => {
            taskText.classList.toggle("paused");
            if (taskText.classList.contains("paused")) {
                pauseButton.textContent = "Resume";
            } else {
                pauseButton.textContent = "Pause";
            }
        });

        const deleteButton = document.createElement("button");
        deleteButton.innerHTML = '<i class="fa-solid fa-trash"></i>';
        deleteButton.classList.add("delete");
        deleteButton.addEventListener("click", () => {
            todolist.removeChild(task);
        });

        buttonContainer.appendChild(doneButton);
        buttonContainer.appendChild(pauseButton);
        buttonContainer.appendChild(deleteButton);

        task.appendChild(taskText);
        task.appendChild(buttonContainer);

        todolist.appendChild(task);
    }
});
