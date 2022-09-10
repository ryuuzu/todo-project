import { formatDistanceToNowStrict } from "date-fns";

function getTodoHTML(todo) {
	const todoPriorityColors = {
		1: "#fa4a4a",
		2: "#ffa500",
		3: "#4aa24a",
	};
	const todoContainer = document.createElement("div");
	todoContainer.classList.add("todo");
	todoContainer.setAttribute("id", todo.id);
	todoContainer.style.setProperty(
		"--priority-color",
		todoPriorityColors[todo.priority]
	);

	const todoTitle = document.createElement("div");
	todoTitle.classList.add("todo-title");

	const todoCheckBox = document.createElement("input");
	todoCheckBox.type = "checkbox";
	todoCheckBox.classList.add("todo-check");
	todoTitle.appendChild(todoCheckBox);

	const todoTitleText = document.createElement("span");
	todoTitleText.classList.add("todo-title-text");
	todoTitleText.textContent = todo.title;
	todoTitle.appendChild(todoTitleText);

	todoContainer.appendChild(todoTitle);

	const todoDescription = document.createElement("div");
	todoDescription.classList.add("todo-description");
	todoDescription.textContent = todo.desc;
	// todoContainer.appendChild(todoDescription);

	const todoButtonsHolder = document.createElement("div");
	todoButtonsHolder.classList.add("todo-interaction-buttons");

	const todoDetailsButton = document.createElement("button");
	todoDetailsButton.textContent = "DETAILS";
	todoDetailsButton.classList.add("todo-details-button");
	todoButtonsHolder.appendChild(todoDetailsButton);

	const todoDueDate = document.createElement("div");
	todoDueDate.classList.add("todo-due");
	todoDueDate.textContent = formatDistanceToNowStrict(todo.due, {
		addSuffix: true,
	});
	todoButtonsHolder.appendChild(todoDueDate);

	const todoEditButton = document.createElement("div");
	todoEditButton.innerHTML = `<?xml version="1.0" ?><svg height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16 2.012 3 3L16.713 7.3l-3-3zM4 14v3h3l8.299-8.287-3-3zm0 6h16v2H4z"/></svg>`;
	todoEditButton.classList.add("todo-edit-button");
	todoButtonsHolder.appendChild(todoEditButton);

	const todoDeleteButton = document.createElement("div");
	todoDeleteButton.innerHTML = `<?xml version="1.0" ?><svg id="Icons" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><defs><style>.cls-1{fill:#232323;}</style></defs><path class="cls-1" d="M13,0H11A3,3,0,0,0,8,3V4H2A1,1,0,0,0,2,6H3V20a4,4,0,0,0,4,4H17a4,4,0,0,0,4-4V6h1a1,1,0,0,0,0-2H16V3A3,3,0,0,0,13,0ZM10,3a1,1,0,0,1,1-1h2a1,1,0,0,1,1,1V4H10Zm9,17a2,2,0,0,1-2,2H7a2,2,0,0,1-2-2V6H19Z"/><path class="cls-1" d="M12,9a1,1,0,0,0-1,1v8a1,1,0,0,0,2,0V10A1,1,0,0,0,12,9Z"/><path class="cls-1" d="M15,18a1,1,0,0,0,2,0V10a1,1,0,0,0-2,0Z"/><path class="cls-1" d="M8,9a1,1,0,0,0-1,1v8a1,1,0,0,0,2,0V10A1,1,0,0,0,8,9Z"/></svg>`;
	todoDeleteButton.classList.add("todo-delete-button");
	todoButtonsHolder.appendChild(todoDeleteButton);

	todoContainer.appendChild(todoButtonsHolder);

	return todoContainer;
}

export default function getTodosHTMl(todos) {
	const todosHolder = document.createElement("div");
	todosHolder.classList.add("todos-holder");

	todos.forEach((todo) => {
		todosHolder.appendChild(getTodoHTML(todo));
	});

	return todosHolder;
}
