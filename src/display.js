import { getActiveProject } from "./todo";

export function displayToDo() {
  let active = getActiveProject();
  const display = document.querySelector(".display");

  display.textContent = "";

  for (let i = 0; i < active.length; i++) {
    const toDoCard = document.createElement("div");
    toDoCard.classList.add("card");

    const titleDiv = document.createElement("div");
    titleDiv.classList.add("title");

    const dateDiv = document.createElement("div");
    dateDiv.classList.add("date");

    const priorityDiv = document.createElement("div");
    priorityDiv.classList.add("priority");

    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete-btn");
    deleteBtn.textContent = "🗑️";

    const checkBoxDiv = document.createElement("input");
    checkBoxDiv.type = "checkbox";

    dateDiv.textContent = active[i].toDoDueDate;
    titleDiv.textContent = active[i].toDoTitle;
    priorityDiv.value = active[i].toDoPriority;
    checkBoxDiv.value = active[i].toDoCheck;

    toDoCard.appendChild(checkBoxDiv);
    toDoCard.appendChild(titleDiv);
    toDoCard.appendChild(dateDiv);
    toDoCard.appendChild(priorityDiv);
    toDoCard.appendChild(deleteBtn);
    display.appendChild(toDoCard);
  }
}
