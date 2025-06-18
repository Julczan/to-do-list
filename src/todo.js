export const toDoContainer = [];

export function createToDo(title, description, dueDate, priority) {
  const toDoTitle = title;
  const toDoDesc = description;
  const toDoDueDate = dueDate;
  const toDoPriority = priority;
  const toDo = [toDoTitle, toDoDesc, toDoDueDate, toDoPriority];

  addToDo(toDo);
}

function addToDo(todo) {
  toDoContainer.push(todo);
}
