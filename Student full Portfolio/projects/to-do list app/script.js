// Get the HTML element with id="add-btn" and store it in the variable 'addBtn'
const addBtn = document.getElementById("add-btn");

// Get the input field where the user types their task (id="task-input")
const taskInput = document.getElementById("task-input");

// Get the list element (e.g., <ul> or <ol>) where tasks will appear (id="task-list")
const taskList = document.getElementById("task-list");


// Add a "click" event listener to the Add button
// When the button is clicked, the function addTask() will be called
addBtn.addEventListener("click", addTask);


// Define the function that adds a new task to the list
function addTask() {

  // Get the text entered by the user and remove extra spaces using trim()
  const taskText = taskInput.value.trim();

  // Check if the input field is empty
  // If it is, show an alert and stop running the function (return)
  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  // Create a new <li> (list item) element to hold the task text
  const li = document.createElement("li");

  // Set the text of the <li> element to the task entered by the user
  li.textContent = taskText;

  // Add a click event to the <li> item
  // When clicked, it toggles (adds/removes) the CSS class "completed"
  // This can be used to mark tasks as done (e.g., with a strikethrough)
  li.addEventListener("click", () => {
    li.classList.toggle("completed");
  });

  // Create a delete button for each task
  const deleteBtn = document.createElement("button");

  // Set the button text to a cross emoji
  deleteBtn.textContent = "❌";

  // Style the delete button: remove background and border, set color and cursor
  deleteBtn.style.background = "none";
  deleteBtn.style.border = "none";
  deleteBtn.style.color = "white";
  deleteBtn.style.cursor = "pointer";

  // Add a click event to the delete button
  // When clicked, it removes the entire <li> (task) from the list
  deleteBtn.addEventListener("click", () => {
    li.remove();
  });

  // Attach the delete button to the <li> item
  li.appendChild(deleteBtn);

  // Add the <li> (with its text and delete button) to the task list on the page
  taskList.appendChild(li);

  // Clear the input field after adding a task
  taskInput.value = "";
}
