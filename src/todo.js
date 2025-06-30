import { displayToDo } from "./display";

let projectList = {
  projects: [],
  activeProject: "",
  toDoContainer: {},
};

createProject("Home");
createProject("Car");
createProject("Gym");

function createProject(title) {
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

function createToDo(title, description, dueDate, priority, isDone = false) {
  const toDoTitle = title;
  const toDoDesc = description;
  const toDoDueDate = dueDate;
  const toDoPriority = priority;
  const toDoCheck = isDone;
  const toDo = { toDoTitle, toDoDesc, toDoDueDate, toDoPriority, toDoCheck };

  const getToDo = () => toDo;

  return { getToDo };
}

export function addToDo() {
  const info = toDoInfo();
  const toDo = createToDo(
    info.getToDoInfo()[0],
    info.getToDoInfo()[1],
    info.getToDoInfo()[2],
    info.getToDoInfo()[3]
  );
  getActiveProject().push(toDo.getToDo());
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
