import "./index.css";
import "./todo.css";
import Todo from "./objects/todo";
import getMain from "./main/main";
import { getTodosHTMl, getProjectsHTML } from "./updateDOM";
import getHeader from "./header/header";
import getFooter from "./footer/footer";
import ToDoList from "./objects/todoList";
import ProjectList from "./objects/projectList";
import Project from "./objects/project";

const contentDiv = document.querySelector(".root-content");

const overlay = document.createElement("div");
overlay.classList.add("overlay");
overlay.classList.add("visible");

let activePage = "PROJECTS";

const data = { todos: new ToDoList(), projects: new ProjectList() };

data.todos.addTodo(
	"Learn React",
	"Learn React from the LinkedIn Learning Page",
	new Date(),
	new Date("2022-09-8"),
	2,
	"Links: https://linkedinlearning.com",
	false
);

data.todos.addTodo(
	"Go Shopping",
	"Need new clothes for the summer",
	new Date(),
	new Date("2022-10-20"),
	1,
	"Solos Nepal has great windshielders",
	false
);

data.todos.addTodo(
	"Get Money",
	"Withdraw money from the ATM",
	new Date(),
	new Date("2023-09-01"),
	1,
	"Money is in the Nabil account",
	true
);

const project = new Project("pj-2", "The Odin Project");

project.addTodo(
	"Learn React",
	"Learn React from the LinkedIn Learning Page",
	new Date(),
	new Date("2022-09-8"),
	2,
	"Links: https://linkedinlearning.com",
	false
);

project.addTodo(
	"Go Shopping",
	"Need new clothes for the summer",
	new Date(),
	new Date("2022-10-20"),
	1,
	"Solos Nepal has great windshielders",
	false
);

project.addTodo(
	"Get Money",
	"Withdraw money from the ATM",
	new Date(),
	new Date("2023-09-01"),
	1,
	"Money is in the Nabil account",
	true
);

const project2 = new Project("pj-3", "The Odin Project2");

project2.addTodo(
	"Learn React",
	"Learn React from the LinkedIn Learning Page",
	new Date(),
	new Date("2022-09-8"),
	2,
	"Links: https://linkedinlearning.com",
	false
);

project2.addTodo(
	"Go Shopping",
	"Need new clothes for the summer",
	new Date(),
	new Date("2022-10-20"),
	1,
	"Solos Nepal has great windshielders",
	false
);

project2.addTodo(
	"Get Money",
	"Withdraw money from the ATM",
	new Date(),
	new Date("2023-09-01"),
	1,
	"Money is in the Nabil account",
	true
);

data.projects.addProject(project);
data.projects.addProject(project2);

function updateDOM() {
	const main = document.querySelector("main");
	const oldTodosHolder = main.querySelector(".todos-holder");
	const oldAddButton = main.querySelector(".add-button");
	main.removeChild(oldTodosHolder);
	main.removeChild(oldAddButton);

	const addButton = document.createElement("div");
	addButton.classList.add("add-button");
	addButton.setAttribute("id", "add-button");

	addButton.innerHTML = `<?xml version="1.0" ?><!DOCTYPE svg  PUBLIC '-//W3C//DTD SVG 1.1//EN'  'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'><svg height="32px" id="Layer_1" style="enable-background:new 0 0 32 32;" version="1.1" viewBox="0 0 32 32" width="32px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="svg-white"><path d="M28,14H18V4c0-1.104-0.896-2-2-2s-2,0.896-2,2v10H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h10v10c0,1.104,0.896,2,2,2  s2-0.896,2-2V18h10c1.104,0,2-0.896,2-2S29.104,14,28,14z"/></svg>`;
	main.appendChild(addButton);
	if (activePage === "HOME") {
		main.appendChild(getTodosHTMl(data.todos.todos));
		addTodoEventListeners();
		checkCompletedTodos();
	} else if (activePage === "PROJECTS") {
		main.appendChild(getProjectsHTML(data.projects.projects));
		addProjectEventListeners();
		checkCompletedProjectTodos();
	}
}

function addProjectEventListeners() {
	const todoTitles = document.querySelectorAll(".todo-title");
	todoTitles.forEach((todoTitle) => {
		const todoContainer = todoTitle.parentElement;
		const todoID = todoContainer.id;
		const projectContainer = todoContainer.parentElement.parentElement;
		const projectID = projectContainer.id;
		todoTitle.addEventListener("click", (e) => {
			data.projects.updateProjectTodoStatus(projectID, todoID);
			checkCompletedProjectTodos();
		});
	});

	const todoDetailsButtons = document.querySelectorAll(
		"#todo-details-button"
	);
	todoDetailsButtons.forEach((todoDetailsButton) => {
		todoDetailsButton.addEventListener("click", (e) => {
			const todoContainer = todoDetailsButton.parentElement.parentElement;
			const todoID = todoContainer.id;
			const projectID = todoContainer.parentElement.parentElement.id;
			addDetailsPage(todoID, projectID);
		});
	});

	const todoDeleteButtons = document.querySelectorAll("#todo-delete-button");
	todoDeleteButtons.forEach((todoDeleteButton) => {
		todoDeleteButton.addEventListener("click", (e) => {
			const todoContainer =
				todoDeleteButton.parentElement.parentElement.parentElement;
			const todoID = todoContainer.id;
			const projectContainer = todoContainer.parentElement.parentElement;
			data.projects.removeProjectTodo(projectContainer.id, todoID);
			todoContainer.classList.add("removed");
			setTimeout(updateDOM, 200);
		});
	});
}

function addTodoEventListeners() {
	const todoTitles = document.querySelectorAll(".todo-title");
	todoTitles.forEach((todoTitle) => {
		const todoContainer = todoTitle.parentElement;
		const todoID = todoContainer.id;
		todoTitle.addEventListener("click", (e) => {
			data.todos.updateTodoStatus(todoID);
			checkCompletedTodos();
		});
	});

	const todoDetailsButtons = document.querySelectorAll(
		"#todo-details-button"
	);
	todoDetailsButtons.forEach((todoDetailsButton) => {
		todoDetailsButton.addEventListener("click", (e) => {
			const todoID = todoDetailsButton.parentElement.parentElement.id;
			addDetailsPage(todoID);
		});
	});

	const todoDeleteButtons = document.querySelectorAll("#todo-delete-button");
	todoDeleteButtons.forEach((todoDeleteButton) => {
		todoDeleteButton.addEventListener("click", (e) => {
			const todoDiv =
				todoDeleteButton.parentElement.parentElement.parentElement;
			const todoID = todoDiv.id;
			data.todos.removeTodo(todoID);
			todoDiv.classList.add("removed");
			setTimeout(updateDOM, 200);
		});
	});
}

function checkCompletedProjectTodos() {
	const checkBoxes = document.querySelectorAll(".todo-check");
	checkBoxes.forEach((checkBox) => {
		const todoContainer = checkBox.parentElement.parentElement;
		const projectContainer = todoContainer.parentElement.parentElement;
		const linkedTodo = data.projects.getProjectTodo(
			projectContainer.id,
			todoContainer.id
		);
		if (!linkedTodo.status) {
			checkBox.checked = false;
			todoContainer.classList.remove("completed");
		}
		if (linkedTodo.status) {
			checkBox.checked = true;
			todoContainer.classList.add("completed");
		}
	});
}

function checkCompletedTodos() {
	const checkBoxes = document.querySelectorAll(".todo-check");
	checkBoxes.forEach((checkBox) => {
		const todoContainer = checkBox.parentElement.parentElement;
		const linkedTodo = data.todos.getTodo(todoContainer.id);
		if (!linkedTodo.status) {
			checkBox.checked = false;
			todoContainer.classList.remove("completed");
		}
		if (linkedTodo.status) {
			checkBox.checked = true;
			todoContainer.classList.add("completed");
		}
	});
}

contentDiv.appendChild(getHeader());
contentDiv.appendChild(getMain());
contentDiv.appendChild(getFooter());
updateDOM(data.todos);

function addDetailsPage(todoID, projectID = undefined) {
	if (projectID === undefined) {
		document.body.appendChild(overlay);
		document.body.appendChild(data.todos.getTodo(todoID).detailsHTML);
	} else {
		document.body.appendChild(overlay);
		document.body.appendChild(
			data.projects.getTodoDetails(projectID, todoID)
		);
	}
	addDetailsEventListener();
}

function addDetailsEventListener() {
	const todoDetails = document.querySelector(".todo-details");
	const todoDetailsCloseButton = todoDetails.querySelector("#close-button");
	todoDetailsCloseButton.addEventListener("click", (e) => {
		removeDetailsPage();
		updateDOM();
	});
	const todoDetailsSaveButton = todoDetails.querySelector(
		"#details-save-button"
	);
	todoDetailsSaveButton.addEventListener("click", (e) => {
		const todoID = todoDetails.getAttribute("id");
		const titleValue = todoDetails.querySelector("#todo-title").value;
		const descriptionValue =
			todoDetails.querySelector("#description").value;
		const dueDateValue = new Date(
			todoDetails.querySelector("#duedate").value
		);
		const noteValue = todoDetails.querySelector("#note").value;
		const priorityValue = parseInt(
			todoDetails.querySelector("#priority").value
		);
		const statusValue =
			todoDetails.querySelector("#status").getAttribute("value") ===
			"true";
		if (activePage === "PROJECTS") {
			const parentProjectValue =
				todoDetails.querySelector("#parentProject").value;
			const parentProjectID = todoDetails.getAttribute("project_id");
			const creationDate = new Date(
				todoDetails.querySelector(".creation-date").textContent
			);
			data.projects.updateProjectTodo(
				todoID,
				titleValue,
				descriptionValue,
				creationDate,
				dueDateValue,
				priorityValue,
				noteValue,
				statusValue,
				parentProjectID,
				parentProjectValue
			);
		} else {
			data.todos.updateTodo(
				todoID,
				titleValue,
				descriptionValue,
				dueDateValue,
				priorityValue,
				noteValue,
				statusValue
			);
		}
	});
}

function removeDetailsPage() {
	document.body.removeChild(document.querySelector(".overlay"));
	document.body.removeChild(document.querySelector(".todo-details"));
}

document.querySelector(".nav-link.home").addEventListener("click", (e) => {
	activePage = "HOME";
	updateDOM();
});

document.querySelector(".nav-link.projects").addEventListener("click", (e) => {
	activePage = "PROJECTS";
	updateDOM();
});
