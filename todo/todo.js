document.addEventListener("DOMContentLoaded", function() {
    loadTasks();
  });
  
  function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");
    var taskText = taskInput.value;
    if (taskText.trim() !== "") {
      var li = document.createElement("li");
      li.innerHTML =taskText +  "<span onclick='deleteTask(this)'>❌</span>" ;
      taskList.appendChild(li);
      taskInput.value = "";
    } else {
      alert("Please enter a task."); 
    }
  }
  
  function deleteTask(element) {
    element.parentElement.remove();
  }
  
  function saveTasks() {
    var taskList = document.getElementById("taskList").innerHTML;
    localStorage.setItem("tasks", taskList);
  }
  
  function loadTasks() {
    var savedTasks = localStorage.getItem("tasks");
    if (savedTasks) {
      document.getElementById("taskList").innerHTML = savedTasks;
    }
  }
  
  function clearTasks() {
    localStorage.removeItem("tasks");
    document.getElementById("taskList").innerHTML = "";
  }