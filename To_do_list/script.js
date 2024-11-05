const input = document.querySelector(".inpbox input");
const addbutton = document.querySelector(".inpbox span button");
const taskbox = document.querySelector('.task-box');

addbutton.addEventListener('click', () => {
    if (input.value === "") {
        alert("Task can't be empty");
    } else {
        createTask(input.value);
        input.value = ""; 
        saveContent();
    }
});

function createTask(content) {
    const div = document.createElement('div');
    div.classList.add('task');
    div.innerHTML = `${content}<span><button>Remove</button></span>`;

    taskbox.appendChild(div);

    const rembutton = div.querySelector("span button");
    rembutton.addEventListener('click', () => {
        taskbox.removeChild(div);
        saveContent(); 
    });

    div.addEventListener('click', () => {
        div.classList.toggle('strike-through');
        const currentIcon = div.style.getPropertyValue("--task-icon");
        if (currentIcon.includes('icons8-tick')) {
            div.style.setProperty("--task-icon", "url('/To_do_list/images/icons8-circle-50.png')");
            div.style.opacity = '1';
            saveContent();
        } else {
            div.style.setProperty("--task-icon", "url('/To_do_list/images/icons8-tick-in-circle-50.png')");
            div.style.opacity = '0.5';
            saveContent();
        }
        saveContent();
    });
}

function saveContent() {
    const tasks = Array.from(document.querySelectorAll('.task')).map(task => {
        return {
            content: task.childNodes[0].nodeValue.trim(),
            isDefault: task.style.getPropertyValue("--task-icon").includes('circle'),
            isStrikethrough: task.classList.contains('strike-through')
        };
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function showContent() {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.forEach(taskData => {
        createTask(taskData.content, taskData.isDefault, taskData.isStrikethrough);
    });
}

showContent();