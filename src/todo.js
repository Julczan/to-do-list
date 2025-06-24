const toDoContainer = [];
const defaultProjectContainer = ["Home", toDoContainer];

function createProject(title) {
  const projectTitle = title;
  const projectContainer = [projectTitle, []];

  return { projectContainer };
}

const first = createProject("first").projectContainer;

function activeProject() {}

function addToProject() {
  const container = addToDo();
  first[1] = container.getToDoContainer();
  console.log(first);
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

function addToDo() {
  const info = toDoInfo();
  const toDo = createToDo(
    info.getToDoInfo()[0],
    info.getToDoInfo()[1],
    info.getToDoInfo()[2],
    info.getToDoInfo()[3]
  );
  toDoContainer.push(toDo.getToDo());

  const getToDoContainer = () => toDoContainer;

  return { getToDoContainer };
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

addButton.addEventListener("click", () => addToProject());
