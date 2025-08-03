import { displayToDo } from "./display.js";
import {
  projectList,
  createProject,
  setActiveProject,
  updateLocalStorage,
} from "./todo.js";

export function createSidebar() {
  const container = document.querySelector(".sidebar");

  const profile = document.createElement("div");
  profile.classList.add("sidebar-element");
  profile.textContent = "Julczan";

  const addProjectBtn = document.createElement("button");
  addProjectBtn.classList.add("add-project-button");
  addProjectBtn.textContent = "Add Project";

  container.appendChild(profile);
  container.appendChild(addProjectBtn);
  displayProjects();

  const getAddProjectButton = () => addProjectBtn;

  return { getAddProjectButton };
}

export function displayProjects() {
  const projectContainer = document.querySelector(".project-container");
  projectContainer.textContent = "";

  for (let i = 0; i < projectList.projects.length; i++) {
    const projectDiv = document.createElement("div");
    projectDiv.classList.add("sidebar-element");
    projectDiv.textContent = projectList.projects[i];

    projectDiv.addEventListener("click", (e) => {
      setActiveProject(e.target.textContent);
      updateLocalStorage();
      displayToDo();
    });
    projectContainer.appendChild(projectDiv);
  }
}

export function addProject() {
  const display = document.querySelector(".display");
  const dialog = document.createElement("dialog");
  const input = document.createElement("input");
  const button = document.createElement("button");
  button.classList.add("add-button");
  button.textContent = "+";
  input.type = "text";
  input.id = "project-name";
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
      updateLocalStorage();
    } else {
      alert("Project name can't be empty");
    }
  });
}
