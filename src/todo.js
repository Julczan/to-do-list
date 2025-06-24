export const toDoContainer = [];

function createProject(title = "first") {
  const projectContainer = [];
  const projectTitle = title;
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
  const info = getToDoInfo();
  const toDo = createToDo(
    info.sendInfo()[0],
    info.sendInfo()[1],
    info.sendInfo()[2],
    info.sendInfo()[3]
  );
  toDoContainer.push(toDo.getToDo());
  console.log(toDoContainer);
}

export function getToDoInfo() {
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

  const sendInfo = () => toDoInfo;

  return { sendInfo };
}

const addButton = document.querySelector("#add");

addButton.addEventListener("click", () => addToDo());
