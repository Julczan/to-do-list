import { addToDo, setActiveProject } from "./todo.js";
import { createSidebar } from "./sidebar.js";
import { displayToDo } from "./display.js";

const sidebar = createSidebar();
const dialog = document.querySelector("dialog");
const addButton = document.querySelector("#add");
const cancelButton = document.querySelector("#cancel");

// const sidebarProject = sidebar.getProjects().childNodes;

// for (let i = 0; i < sidebarProject.length; i++) {
//   sidebarProject[i].addEventListener("click", (e) =>
//     setActiveProject(e.target.textContent)
//   );
// }

// for (let i = 0; i < sidebarProject.length; i++) {
//   sidebarProject[i].addEventListener("click", () => displayToDo());
// }

const createButton = sidebar.getAddButton();

function addToDoCloseDialog() {
  addToDo();
  dialog.close();
}

addButton.addEventListener("click", () => addToDoCloseDialog());
// createButton.addEventListener("click", () => dialog.showModal());
cancelButton.addEventListener("click", () => dialog.close());

export { addButton };
