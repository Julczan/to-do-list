import { addToDo, setActiveProject, projectList } from "./todo.js";
import { createSidebar } from "./sidebar.js";
import { displayToDo } from "./display.js";

const sidebarProject = createSidebar().projects.childNodes;

for (let i = 0; i < sidebarProject.length; i++) {
  sidebarProject[i].addEventListener("click", (e) =>
    setActiveProject(e.target.textContent)
  );
}

for (let i = 0; i < sidebarProject.length; i++) {
  sidebarProject[i].addEventListener("click", () => displayToDo());
}

const addButton = document.querySelector("#add");

addButton.addEventListener("click", () => addToDo());

export { addButton };
