function addTask() {
  var taskInput = document.getElementById("taskInput");
  var taskList = document.getElementById("taskList");

  if (taskInput.value.trim() !== "") {
    var taskItem = document.createElement("li");
    taskItem.className = "taskItem";

    var taskText = document.createElement("input");
    taskText.type = "text";
    taskText.value = taskInput.value;
    taskItem.appendChild(taskText);

    var updateBtn = document.createElement("button");
    updateBtn.className = "updateBtn";
    updateBtn.innerHTML = "Update";
    // Thêm sự kiện onclick cho nút Update
    var isReadOnly = true;
    updateBtn.onclick = function () {
      if (taskText.value.trim() === "") {
        alert("Bạn không thể bỏ trống dữ liệu này");
        taskText.focus(); // tự động focus đến ô để nhập thông tin
      } else {
        isReadOnly = !isReadOnly;
        taskText.readOnly = isReadOnly;
        updateBtn.innerHTML = isReadOnly ? "Update" : "Save";
        alert(isReadOnly ? "Đã save" : "Đã update");
      }
    };

    var deleteBtn = document.createElement("button");
    deleteBtn.className = "deleteBtn";
    deleteBtn.innerHTML = "Delete";
    deleteBtn.onclick = function () {
      taskList.removeChild(taskItem);
      var tasks = JSON.parse(localStorage.getItem("tasks")) || [];
      var taskIndex = tasks.indexOf(taskText.value);
      if (taskIndex > -1) {
        tasks.splice(taskIndex, 1);
        localStorage.setItem("tasks", JSON.stringify(tasks));
      }
      alert("Bạn đã xóa dữ liệu này");
    };

    taskItem.appendChild(updateBtn);
    taskItem.appendChild(deleteBtn);
    taskList.appendChild(taskItem);

    taskInput.value = "";
    // Lưu dữ liệu vào local storage
    var tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.push(taskText.value);
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }
}

window.onload = function () {
  var tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  var taskList = document.getElementById("taskList");

  tasks.forEach(function (task) {
    var taskItem = document.createElement("li");
    taskItem.className = "taskItem";

    var taskText = document.createElement("input");
    taskText.type = "text";
    taskText.value = task;
    taskText.readOnly = true;
    taskItem.appendChild(taskText);

    var updateBtn = document.createElement("button");
    updateBtn.className = "updateBtn";
    updateBtn.innerHTML = "Update";
    // Thêm sự kiện onclick cho nút Update
    var isReadOnly = true;
    updateBtn.onclick = function () {
      isReadOnly = !isReadOnly;
      taskText.readOnly = isReadOnly;
      updateBtn.innerHTML = isReadOnly ? "Update" : "Save";
      alert(isReadOnly ? "Đã update" : "Đã save");
    };

    var deleteBtn = document.createElement("button");
    deleteBtn.className = "deleteBtn";
    deleteBtn.innerHTML = "Delete";
    deleteBtn.onclick = function () {
      taskList.removeChild(taskItem);
      var tasks = JSON.parse(localStorage.getItem("tasks")) || [];
      var taskIndex = tasks.indexOf(taskText.value);
      if (taskIndex > -1) {
        tasks.splice(taskIndex, 1);
        localStorage.setItem("tasks", JSON.stringify(tasks));
      }
      alert("Bạn đã xóa dữ liệu này");
    };

    taskItem.appendChild(updateBtn);
    taskItem.appendChild(deleteBtn);
    taskList.appendChild(taskItem);
  });
};
