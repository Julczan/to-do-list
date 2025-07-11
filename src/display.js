import { getActiveProject, projectList } from "./todo";

export function displayToDo() {
  let active = getActiveProject();
  const display = document.querySelector(".display");
  const header = document.querySelector(".header");
  header.textContent = projectList.activeProject;

  display.textContent = "";

  for (let i = 0; i < active.length; i++) {
    const toDoCard = document.createElement("div");

    if (active[i].toDoCheck) {
      toDoCard.classList.add("card-done");
    } else {
      toDoCard.classList.add("card");
    }

    const titleDiv = document.createElement("div");
    titleDiv.classList.add("title");

    const dateDiv = document.createElement("div");
    dateDiv.classList.add("date");

    const priorityDiv = document.createElement("div");

    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete-btn");
    deleteBtn.textContent = "🗑️";

    const editBtn = document.createElement("button");
    editBtn.classList.add("edit-btn");
    editBtn.textContent = "📄";

    const checkBoxDiv = document.createElement("button");
    checkBoxDiv.classList.add("checkbox");

    checkBoxDiv.addEventListener("click", () => {
      active[i].toggleCheck();
      if (active[i].toDoCheck) {
        toDoCard.classList.remove("card");
        toDoCard.classList.add("card-done");
      } else {
        toDoCard.classList.remove("card-done");
        toDoCard.classList.add("card");
      }
    });

    dateDiv.textContent = active[i].toDoDueDate;
    titleDiv.textContent = active[i].toDoTitle;
    priorityDiv.value = active[i].toDoPriority;

    changePriorityColor(priorityDiv);

    toDoCard.appendChild(checkBoxDiv);
    toDoCard.appendChild(titleDiv);
    toDoCard.appendChild(dateDiv);
    toDoCard.appendChild(priorityDiv);
    toDoCard.appendChild(deleteBtn);
    toDoCard.appendChild(editBtn);
    display.appendChild(toDoCard);
  }
}

function changePriorityColor(priorityDiv) {
  switch (priorityDiv.value) {
    case "low":
      priorityDiv.classList.add("priority-low");
      break;
    case "medium":
      priorityDiv.classList.add("priority-medium");
      break;
    case "high":
      priorityDiv.classList.add("priority-high");
      break;
  }
  return priorityDiv;
}
