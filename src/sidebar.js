import { projectList } from "./todo.js";

export function createSidebar() {
  const container = document.querySelector(".sidebar");

  const profile = document.createElement("div");
  profile.classList.add("sidebar-element");
  profile.textContent = "Julczan";

  const projectDivs = createDiv(projectList);

  container.appendChild(profile);
  container.appendChild(projectDivs);

  return { container, projectDivs };
}

function createDiv(project) {
  const projects = document.createElement("div");
  projects.classList.add("sidebar-element");

  for (let i = 0; i < project.length; i++) {
    const div = document.createElement("div");
    div.classList.add("sidebar-element");
    div.textContent = project[i];
    projects.appendChild(div);
  }

  return projects;
}
