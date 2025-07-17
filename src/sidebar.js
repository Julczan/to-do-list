import { displayToDo } from "./display.js";
import { projectList, createProject } from "./todo.js";

export function createSidebar() {
  const container = document.querySelector(".sidebar");
  const dialog = document.querySelector("dialog");

  const profile = document.createElement("div");
  profile.classList.add("sidebar-element");
  profile.textContent = "Julczan";

  const addButton = document.querySelector(".add-button");

  const addProjectBtn = document.createElement("button");
  addProjectBtn.classList.add("add-project-button");
  addProjectBtn.textContent = "Add Project";

  addProjectBtn.addEventListener("click", () => addProject());
  addButton.addEventListener("click", () => dialog.showModal());

  container.appendChild(profile);
  container.appendChild(addProjectBtn);
  displayProjects();

  const getAddButton = () => addButton;

  return { getAddButton };
}

function displayProjects() {
  const projectContainer = document.querySelector(".project-container");
  projectContainer.textContent = "";

  for (let i = 0; i < projectList.projects.length; i++) {
    const projectDiv = document.createElement("div");
    projectDiv.classList.add("sidebar-element");
    projectDiv.textContent = projectList.projects[i];
    projectContainer.appendChild(projectDiv);
  }
}

function addProject() {
  const display = document.querySelector(".display");
  const dialog = document.createElement("dialog");
  const input = document.createElement("input");
  const button = document.createElement("button");
  button.classList.add("add-button");
  button.textContent = "+";
  input.type = "text";
  input.placeholder = "Project title";

  dialog.appendChild(input);
  dialog.appendChild(button);
  display.appendChild(dialog);

  dialog.showModal();

  button.addEventListener("click", () => {
    if (input.value !== "") {
      createProject(input.value);
      displayProjects();
      displayToDo();
      dialog.close();
    } else {
      alert("Project name can't be empty");
    }
  });
}
