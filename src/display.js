import { displayProjects } from "./sidebar";
import { getActiveProject, projectList, updateLocalStorage } from "./todo";

export function displayToDo() {
  let active = getActiveProject();

  const display = document.querySelector(".display");
  const header = document.querySelector(".header");

  header.textContent = projectList.activeProject;

  display.textContent = "";

  if (active.length === 0 && projectList.activeProject !== "Home") {
    const delProject = document.createElement("button");
    delProject.classList.add("del-project");
    display.appendChild(delProject);
    delProject.textContent = "Delete Project";

    delProject.addEventListener("click", () => {
      deleteProject();
    });
  }

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
      updateLocalStorage();
      displayToDo();
    });

    const editBtn = document.createElement("button");
    editBtn.classList.add("edit-btn");
    editBtn.textContent = "📄";

    editBtn.addEventListener("click", () => {
      edit(active[i]);
    });

    checkBoxDiv.addEventListener("click", () => {
      if (active[i].toDoCheck) {
        active[i].toDoCheck = false;
        toDoCard.classList.remove("card-done");
        toDoCard.classList.add("card");
        checkBoxDiv.classList.remove("checkbox-active");
        checkBoxDiv.classList.add("checkbox");
        updateLocalStorage();
      } else {
        active[i].toDoCheck = true;
        toDoCard.classList.remove("card");
        toDoCard.classList.add("card-done");
        checkBoxDiv.classList.remove("checkbox");
        checkBoxDiv.classList.add("checkbox-active");
        updateLocalStorage();
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

function edit(active) {
  const display = document.querySelector(".display");
  const editForm = document.createElement("form");
  const editDialog = document.createElement("dialog");
  const editTitle = document.createElement("input");
  const editDueDate = document.createElement("input");
  const editPriority = document.createElement("select");
  const lowPriority = document.createElement("option");
  const mediumPriority = document.createElement("option");
  const highPriority = document.createElement("option");
  const editDesc = document.createElement("textarea");
  const saveBtn = document.createElement("button");

  editForm.method = "post";
  editForm.id = "editForm";

  editTitle.id = "editTitle";
  editTitle.placeholder = "Title";
  editTitle.required = true;
  editTitle.value = active.toDoTitle;

  editDueDate.id = "editDate";
  editDueDate.value = active.toDoDueDate;

  editPriority.id = "editPriority";
  editPriority.value = active.toDoPriority;
  lowPriority.textContent = "Not Important";
  mediumPriority.textContent = "Medium";
  highPriority.textContent = "Very Important";
  lowPriority.value = "low";
  mediumPriority.value = "medium";
  highPriority.value = "high";

  editPriority.appendChild(lowPriority);
  editPriority.appendChild(mediumPriority);
  editPriority.appendChild(highPriority);

  editDesc.id = "editDesc";
  editDesc.value = active.toDoDesc;

  saveBtn.textContent = "Save";
  saveBtn.type = "submit";

  editDueDate.type = "date";

  editForm.appendChild(editTitle);
  editForm.appendChild(editDesc);
  editForm.appendChild(editDueDate);
  editForm.appendChild(editPriority);
  editForm.appendChild(saveBtn);

  editDialog.appendChild(editForm);

  display.appendChild(editDialog);

  document.body.appendChild(editDialog);

  editDialog.showModal();

  saveBtn.addEventListener("click", (e) => {
    if (editForm.checkValidity()) {
      e.preventDefault();
      (active.toDoTitle = editTitle.value),
        (active.toDoDesc = editDesc.value),
        (active.toDoDueDate = editDueDate.value),
        (active.toDoPriority = editPriority.value);
      active.toDoCheck = false;
    }
    updateLocalStorage();
    displayToDo();
    editDialog.close();
  });
}

function deleteProject() {
  let index = projectList.projects.indexOf(projectList.activeProject);
  projectList.projects.splice(index, 1);
  let projectName = projectList.activeProject;

  delete projectList.toDoContainer[projectName];
  projectList.activeProject = "Home";
  displayProjects();
  updateLocalStorage();
  displayToDo();
}
