import { projectList } from "./todo.js";

export function createSidebar() {
  const container = document.querySelector(".sidebar");

  const profile = document.createElement("div");
  profile.classList.add("sidebar-element");
  profile.textContent = "Julczan";

  const projects = createProjectDivs(projectList.projects).projectDiv;

  container.appendChild(profile);
  container.appendChild(projects);

  return { container, projects };
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
