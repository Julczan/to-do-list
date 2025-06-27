import { addToDo, setActiveProject, projectList } from "./todo.js";
import { createSidebar } from "./sidebar.js";

function message() {
  console.log(`You are in ${projectList.activeProject} folder`);
}
const sidebarProject = createSidebar().projects.childNodes;

for (let i = 0; i < sidebarProject.length; i++) {
  sidebarProject[i].addEventListener("click", (e) =>
    setActiveProject(e.target.textContent)
  );
}

// sidebarProject.addEventListener("click", () => message());

const addButton = document.querySelector("#add");

addButton.addEventListener("click", () => addToDo());

export { addButton };
