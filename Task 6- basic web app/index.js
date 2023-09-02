const newTaskInput = document.getElementById('newTask');
const pendingTasksList = document.getElementById('pendingTasks');
const completedTasksList = document.getElementById('completedTasks');

function addTask() {
    const taskText = newTaskInput.value.trim();
    if (taskText !== '') {
        const taskItem = document.createElement('li');
        taskItem.innerHTML = `
            <span>${taskText}</span>
            <button class="delete-btn" onclick="deleteTask(this)">Delete</button>
        `;
        pendingTasksList.appendChild(taskItem);
        newTaskInput.value = '';
    }
}

function deleteTask(button) {
    const taskItem = button.parentElement;
    taskItem.remove();
}

pendingTasksList.addEventListener('click', function(event) {
    const taskItem = event.target.closest('li');
    if (taskItem) {
        taskItem.classList.toggle('completed');
        completedTasksList.appendChild(taskItem);
    }
});
