import "./styles.css";
import sidebar from "./sidebar.js";
import { toDoContainer } from "./todo.js";
import { createToDo } from "./todo.js";

function appendToBody() {
  const body = document.querySelector("#content");
  body.appendChild(sidebar);
  console.log(toDoContainer);
}

createToDo("cos", "cos", "cos", "cos");

appendToBody();
