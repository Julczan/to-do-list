import { projectList } from "./todo.js";

function createSidebar() {
  const container = document.querySelector(".sidebar");

  const profile = document.createElement("div");
  profile.classList.add("sidebar-element");
  profile.textContent = "Julczan";

  const projects = document.createElement("div");
  projects.classList.add("sidebar-element");

  projects.innerHTML = createListElements(projectList).list;

  container.appendChild(profile);
  container.appendChild(projects);
  return container;
}

function createListElements() {
  let list = projectList.join(`<br>`);

  return { list };
}

export default createSidebar();
