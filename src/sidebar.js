import { projectList } from "./todo.js";

export function createSidebar() {
  const container = document.querySelector(".sidebar");

  const profile = document.createElement("div");
  profile.classList.add("sidebar-element");
  profile.textContent = "Julczan";

  const addButton = document.createElement("button");
  addButton.classList.add("add-button");
  addButton.textContent = "Add +";

  const projects = createProjectDivs(projectList.projects).projectDiv;

  container.appendChild(addButton);
  container.appendChild(profile);
  container.appendChild(projects);

  const getAddButton = () => addButton;
  const getProjects = () => projects;

  return { container, getProjects, getAddButton };
}

function createProjectDivs(projects) {
  let projectDiv = document.createElement("div");
  projectDiv.classList.add("sidebar-container");

  projects.forEach((project) => {
    let div = document.createElement("div");
    div.classList.add("sidebar-element");
    div.textContent = project;
    projectDiv.appendChild(div);
  });

  return { projectDiv };
}
