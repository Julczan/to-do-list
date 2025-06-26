let active = [];
const defaultContainer = createProject("Home").projectContainer;

function createProject(title) {
  const projectTitle = title;
  const projectContainer = [projectTitle];

  setActiveProject(projectContainer);

  return { projectContainer };
}

function setActiveProject(container) {
  active = container;
}

function getActiveProject() {}

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

function addToDo() {
  const info = toDoInfo();
  const toDo = createToDo(
    info.getToDoInfo()[0],
    info.getToDoInfo()[1],
    info.getToDoInfo()[2],
    info.getToDoInfo()[3]
  );

  active.push(toDo.getToDo());
  console.log(defaultContainer);
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
const addButton = document.querySelector("#add");

addButton.addEventListener("click", () => addToDo());
