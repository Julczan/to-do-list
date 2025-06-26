import { activeProject, addToDo, setActiveProject } from "./todo.js";
import { createSidebar } from "./sidebar.js";

const sidebarProject = createSidebar().projectDivs;
console.log(sidebarProject);

sidebarProject.addEventListener("click", (e) =>
  setActiveProject([e.target.textContent])
);

const addButton = document.querySelector("#add");

addButton.addEventListener("click", () => addToDo());

export { addButton };
