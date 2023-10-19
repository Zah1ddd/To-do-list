const inputTask = document.querySelector(".task-input");
const addTaskButton = document.querySelector(".add-task");
const updateTaskButton = document.querySelector(".update-task");
const listOfItem = document.querySelector(".list");

// btnOfAddTask.addEventListener("click",function(e){
//     e.preventDefault();

//     const toDoListItmHtml = `<li class="delete-list" >
//     ${taskInput.value}
//     <button class="delete-icon"><img src="./img/Group 728.png" alt=""></button>
//     </li>`;
//     toDoList.insertAdjacentHTML("beforeend",toDoListItmHtml)
// });
// toDoList.addEventListener("click",function(e){
//     console.log(e.target);
//     if (e.target.classList.contains("delete-icon")) {
//         e.target.parentElement.remove();
//     }
// });

// toDoList.addEventListener("click",function(event){
//     console.log(e.target);
//     if(e.target.classList.contains("edit-icon")){
//         e.target.parentElement.add("edit-icon");
//     }
// })
// editButton.addEventListener("click",()=>{
// let input = prompt("Change",text.value);
// if(newText){
//     span.textContent = newText;
// }else{
//     alert("Input cannot be empty!");
// }
// });



updateTaskButton.setAttribute("style", "display:none");

addTaskButton.addEventListener("click", function (e) {
  const liForTasks = document.createElement("li");
  liForTasks.classList.add("li");
  listOfItem.appendChild(liForTasks);

  const span = document.createElement("span");
  span.classList.add("span");
  liForTasks.appendChild(span);
  span.textContent = inputTask.value;

  const deleteButton = document.createElement("button");
  deleteButton.classList.add("delete-button");
  deleteButton.textContent = "Del";
  liForTasks.appendChild(deleteButton);
  deleteButton.addEventListener("click", function (e) {
    e.preventDefault();
    liForTasks.remove();
  });
  const editButton = document.createElement("button");
  editButton.classList.add("edit-button");
  editButton.textContent = "Edit";
  liForTasks.appendChild(editButton);

  const spanValue = span.textContent;

  let isEditing = false;

  editButton.addEventListener("click", function () {
    if (!isEditing) {
      isEditing = true;
      inputTask.value = spanValue;
      addTaskButton.setAttribute("style", "display:none");
      updateTaskButton.removeAttribute("style", "display:none");
      span.textContent = "";
    } else {
      inputTask.value = span.textContent;
      addTaskButton.setAttribute("style", "display:none");
      updateTaskButton.removeAttribute("style", "display:none");
      span.textContent = "";
    }
  });

  updateTaskButton.addEventListener("click", function () {
    if (isEditing && inputTask.value.trim()) {
      span.textContent = inputTask.value;
      inputTask.value = "";
      addTaskButton.removeAttribute("style");
      updateTaskButton.setAttribute("style", "display:none");
    }
  });

  inputTask.value = "";
});


