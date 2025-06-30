import { projectList, getActiveProject } from "./todo";

export function displayToDo() {
  let active = getActiveProject();

  console.log(active);

  loopActiveToDo(active);

  const display = document.querySelector(".display");

  const toDoCard = document.createElement("div");
  toDoCard.classList.add("card");

  const titleDiv = document.createElement("div");
  titleDiv.classList.add("title");

  const dateDiv = document.createElement("div");
  dateDiv.classList.add("date");

  toDoCard.appendChild(titleDiv);
  toDoCard.appendChild(dateDiv);

  display.appendChild(toDoCard);
}

function loopActiveToDo(active) {
  let toDo = [];
  for (let i = 0; i < active.length; i++) {
    toDo = [active[i].toDoTitle, active[i].toDoDesc];
  }
  console.log(toDo);

  return toDo;
}
