import { getActiveProject, projectList } from "./todo";

export function displayToDo() {
  let active = getActiveProject();
  const display = document.querySelector(".display");
  const header = document.querySelector(".header");
  header.textContent = projectList.activeProject;

  display.textContent = "";

  for (let i = 0; i < active.length; i++) {
    const toDoCard = document.createElement("div");
    const checkBoxDiv = document.createElement("button");

    if (active[i].toDoCheck) {
      toDoCard.classList.add("card-done");
      checkBoxDiv.classList.add("checkbox-active");
    } else {
      toDoCard.classList.add("card");
      checkBoxDiv.classList.add("checkbox");
    }

    const titleDiv = document.createElement("div");
    titleDiv.classList.add("title");

    const dateDiv = document.createElement("div");
    dateDiv.classList.add("date");

    const detailDiv = document.createElement("button");
    detailDiv.classList.add("detail");
    detailDiv.textContent = "Details";

    detailDiv.addEventListener("click", () =>
      displayDetails(
        active[i].toDoTitle,
        active[i].toDoDueDate,
        active[i].toDoDesc,
        active[i].toDoPriority
      )
    );

    const priorityDiv = document.createElement("div");

    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete-btn");
    deleteBtn.textContent = "🗑️";

    deleteBtn.addEventListener("click", () => {
      let index = active.indexOf(active[i]);
      active.splice(index, 1);
      displayToDo();
    });

    const editBtn = document.createElement("button");
    editBtn.classList.add("edit-btn");
    editBtn.textContent = "📄";

    checkBoxDiv.addEventListener("click", () => {
      active[i].toggleCheck();

      if (active[i].toDoCheck) {
        toDoCard.classList.remove("card");
        toDoCard.classList.add("card-done");
        checkBoxDiv.classList.remove("checkbox");
        checkBoxDiv.classList.add("checkbox-active");
      } else {
        toDoCard.classList.remove("card-done");
        toDoCard.classList.add("card");
        checkBoxDiv.classList.remove("checkbox-active");
        checkBoxDiv.classList.add("checkbox");
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
    toDoCard.appendChild(detailDiv);
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

function displayDetails(title, dueDate, desc, priority) {
  const display = document.querySelector(".display");
  const dialog = document.createElement("dialog");
  const titleDiv = document.createElement("div");
  const dueDateDiv = document.createElement("div");
  const descDiv = document.createElement("div");
  const priorityDiv = document.createElement("div");

  titleDiv.textContent = `Title: ${title}`;
  dueDateDiv.textContent = `Time until: ${dueDate}`;
  descDiv.textContent = `More details: ${desc}`;
  priorityDiv.textContent = `Priority: ${priority}`;

  dialog.appendChild(titleDiv);
  dialog.appendChild(dueDateDiv);
  dialog.appendChild(descDiv);
  dialog.appendChild(priorityDiv);

  display.appendChild(dialog);

  dialog.showModal();
}
