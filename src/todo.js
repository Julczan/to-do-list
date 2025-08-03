import { displayToDo } from "./display";

const storedData = JSON.parse(localStorage.getItem("todos"));

let projectList = {
  projects: [],
  activeProject: "Home",
  toDoContainer: {},
};

createProject("Home");

if (storedData !== null) {
  projectList = storedData;
}

export function updateLocalStorage() {
  localStorage.setItem("todos", JSON.stringify(projectList));
}

export function createProject(title) {
  const projectTitle = title;

  setActiveProject(projectTitle);
  projectList.projects.push(projectTitle);
  projectList.toDoContainer[projectTitle] = [];

  return { projectTitle };
}

export function setActiveProject(title) {
  projectList.activeProject = title;
}
export function getActiveProject() {
  let active = projectList.toDoContainer[projectList.activeProject];

  return active;
}

class ToDo {
  constructor(toDoTitle, toDoDesc, toDoDueDate, toDoPriority) {
    this.toDoTitle = toDoTitle;
    this.toDoDesc = toDoDesc;
    this.toDoDueDate = toDoDueDate;
    this.toDoPriority = toDoPriority;
    this.toDoCheck = false;
  }

  editToDo(toDoTitle, toDoDesc, toDoDueDate, toDoPriority) {
    this.toDoTitle = toDoTitle;
    this.toDoDesc = toDoDesc;
    this.toDoDueDate = toDoDueDate;
    this.toDoPriority = toDoPriority;
    this.toDoCheck = false;
  }
}

export function addToDo() {
  const info = toDoInfo();
  const toDo = new ToDo(
    info.getToDoInfo()[0],
    info.getToDoInfo()[1],
    info.getToDoInfo()[2],
    info.getToDoInfo()[3]
  );
  getActiveProject().push(toDo);
  updateLocalStorage();
  displayToDo();
}

function toDoInfo() {
  const formTitle = document.querySelector("#title");
  const formDesc = document.querySelector("#desc");
  const formDate = document.querySelector("#dueDate");
  const formPriority = document.querySelector("#priority");

  const toDoInfo = [
    formTitle.value,
    formDesc.value,
    formDate.value,
    formPriority.value,
  ];

  const getToDoInfo = () => toDoInfo;

  return { getToDoInfo };
}

export { projectList };
