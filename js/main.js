function addTask() {
    var taskInput = document.getElementById('taskInput');
    var taskList = document.getElementById('taskList');

    if (taskInput.value.trim() !== "") {
        var taskItem = document.createElement('li');
        taskItem.className = 'taskItem';

        var taskText = document.createElement('input');
        taskText.type = 'text';
        taskText.value = taskInput.value;
        taskItem.appendChild(taskText);

        var updateBtn = document.createElement('button');
        updateBtn.className = 'updateBtn';
        updateBtn.innerHTML = 'Update';
        updateBtn.onclick = function () {
            taskText.readOnly = !taskText.readOnly;
            updateBtn.innerHTML = taskText.readOnly ? 'Update' : 'Save';
        };

        var deleteBtn = document.createElement('button');
        deleteBtn.className = 'deleteBtn';
        deleteBtn.innerHTML = 'Delete';
        deleteBtn.onclick = function () {
            taskList.removeChild(taskItem);
        };

        taskItem.appendChild(updateBtn);
        taskItem.appendChild(deleteBtn);
        taskList.appendChild(taskItem);

        taskInput.value = "";
    }
}