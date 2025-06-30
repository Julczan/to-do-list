import { addToDo, setActiveProject, projectList } from "./todo.js";
import { createSidebar } from "./sidebar.js";
import { displayToDo } from "./display.js";

const sidebar = createSidebar();
const dialog = document.querySelector("dialog");

const sidebarProject = sidebar.getProjects().childNodes;

for (let i = 0; i < sidebarProject.length; i++) {
  sidebarProject[i].addEventListener("click", (e) =>
    setActiveProject(e.target.textContent)
  );
}

for (let i = 0; i < sidebarProject.length; i++) {
  sidebarProject[i].addEventListener("click", () => displayToDo());
}

const createButton = sidebar.getAddButton();

const addButton = document.querySelector("#add");

addButton.addEventListener("click", () => addToDo());
createButton.addEventListener("click", () => dialog.showModal());

export { addButton };
