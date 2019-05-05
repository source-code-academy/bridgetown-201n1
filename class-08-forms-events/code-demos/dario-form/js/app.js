"use strict";

function handleSubmit(e) {
  e.preventDefault();

  var taskName = document.getElementById("task");
  var deadline = document.getElementById("deadline");

  //draw row with data
  renderRow(taskName.value, deadline.value);

  //reset form
  taskName.value = null;
  deadline.value = null;
}
//Method 2
function handleSubmit2(event) {
  event.preventDefault();

  //assign reference to a shorter name
  var taskEls = event.target.elements;
  //draw row with data
  renderRow(taskEls["task-field"].value, taskEls["deadline-field"].value);

  //reset form
  taskEls["task-field"].value = null;
  taskEls["deadline-field"].value = null;
}

var taskForm = document.getElementById("task-form");

taskForm.addEventListener("submit", handleSubmit2);

function renderRow(task, deadline) {
  //Get a reference to our table
  var tasksTable = document.getElementById("tasks");

  //create a row
  var taskRow = document.createElement("tr");

  //Add row to table
  tasksTable.appendChild(taskRow);

  //Add task name to row
  var taskName = document.createElement("td");
  taskRow.appendChild(taskName);
  taskName.textContent = task;

  //Add deadline to row
  var taskDeadline = document.createElement("td");
  taskRow.appendChild(taskDeadline);
  taskDeadline.textContent = deadline;
}
