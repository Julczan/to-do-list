import { addToDo, setActiveProject, projectList } from "./todo.js";
import { createSidebar } from "./sidebar.js";

const sidebarProject = createSidebar().projects;

const addButton = document.querySelector("#add");

addButton.addEventListener("click", () => addToDo());

export { addButton };
