import { projectList, getActiveProject } from "./todo";

export function displayToDo() {
  let active = getActiveProject();

  const display = document.querySelector(".display");

  for (let i = 0; i < active.length; i++) {
    const toDoCard = document.createElement("div");
    toDoCard.classList.add("card");
    const titleDiv = document.createElement("div");
    titleDiv.classList.add("title");

    const dateDiv = document.createElement("div");
    dateDiv.classList.add("date");

    dateDiv.textContent = active[i].toDoDueDate;
    titleDiv.textContent = active[i].toDoTitle;

    toDoCard.appendChild(titleDiv);
    toDoCard.appendChild(dateDiv);
    display.appendChild(toDoCard);
  }
}
