export const toDoContainer = [];

export function createToDo(
  title,
  description,
  dueDate,
  priority,
  isDone = false
) {
  const toDoTitle = title;
  const toDoDesc = description;
  const toDoDueDate = dueDate;
  const toDoPriority = priority;
  const toDoCheck = isDone;
  const toDo = [toDoTitle, toDoDesc, toDoDueDate, toDoPriority, toDoCheck];

  addToDo(toDo);
}

function addToDo(todo) {
  toDoContainer.push(todo);
}
