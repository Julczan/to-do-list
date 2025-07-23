import { addToDo, setActiveProject } from "./todo.js";
import { addProject, createSidebar } from "./sidebar.js";
import { displayToDo } from "./display.js";

const sidebar = createSidebar();
const dialog = document.querySelector("dialog");
const editDialog = document.querySelector("#editDialog");
const form = document.querySelector("form");
const addButton = document.querySelector("#add");
const cancelButton = document.querySelector("#cancel");
const createButton = document.querySelector(".add-button");
const editCancelBtn = document.querySelector("#editCancel");

const addProjectButton = sidebar.getAddProjectButton();

function addToDoCloseDialog() {
  addToDo();
  dialog.close();
  form.reset();
}

addButton.addEventListener("click", (e) => {
  if (form.checkValidity()) {
    e.preventDefault();
    addToDoCloseDialog();
  }
});
createButton.addEventListener("click", () => dialog.showModal());
cancelButton.addEventListener("click", () => dialog.close());
editCancelBtn.addEventListener("click", () => editDialog.close());
addProjectButton.addEventListener("click", () => addProject());

export { addButton };
