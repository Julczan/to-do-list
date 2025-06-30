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

    const checkBoxDiv = document.createElement("input");
    checkBoxDiv.type = "checkbox";

    dateDiv.textContent = active[i].toDoDueDate;
    titleDiv.textContent = active[i].toDoTitle;
    priorityDiv.textContent = active[i].toDoPriority;
    checkBoxDiv.value = active[i].toDoCheck;

    toDoCard.appendChild(checkBoxDiv);
    toDoCard.appendChild(titleDiv);
    toDoCard.appendChild(dateDiv);
    toDoCard.appendChild(priorityDiv);
    display.appendChild(toDoCard);
  }
}
