import { addToDo } from "./todo.js";

const addButton = document.querySelector("#add");

addButton.addEventListener("click", () => addToDo());

export { addButton };
