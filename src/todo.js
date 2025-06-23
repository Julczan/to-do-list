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
  const toDo = { toDoTitle, toDoDesc, toDoDueDate, toDoPriority, toDoCheck };

  const getToDo = () => toDo;

  return { getToDo };
}

function addToDo() {
  const toDo = createToDo("cos", "cos", "cos", "cos");
  toDoContainer.push(toDo.getToDo());
}
