function createCard() {
  const toDoCard = document.createElement("div");
  toDoCard.classList.add("card");

  const titleDiv = document.createElement("div");
  titleDiv.classList.add("title");

  const descDiv = document.createElement("div");
  descDiv.classList.add("description");

  const dateDiv = document.createElement("div");
  dateDiv.classList.add("date");

  const priorityDiv = document.createElement("div");
  priorityDiv.classList.add("priority");

  toDoCard.appendChild(titleDiv);
  toDoCard.appendChild(descDiv);
  toDoCard.appendChild(dateDiv);
  toDoCard.appendChild(priorityDiv);
}
