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
	const oldAddButton = main.querySelector("#add-button");
	const oldAddNoteButton = main.querySelector(".add-note-button");
	const oldAddProjectButton = main.querySelector(".add-project-button");
	main.removeChild(oldTodosHolder);
	if (oldAddButton) {
		main.removeChild(oldAddButton);
	}
	if (oldAddNoteButton) {
		main.removeChild(oldAddNoteButton);
	}
	if (oldAddProjectButton) {
		main.removeChild(oldAddProjectButton);
	}

	const addButton = document.createElement("div");
	addButton.setAttribute("id", "add-button");

	addButton.innerHTML = `<?xml version="1.0" ?><!DOCTYPE svg  PUBLIC '-//W3C//DTD SVG 1.1//EN'  'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'><svg height="32px" id="Layer_1" style="enable-background:new 0 0 32 32;" version="1.1" viewBox="0 0 32 32" width="32px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="svg-white"><path d="M28,14H18V4c0-1.104-0.896-2-2-2s-2,0.896-2,2v10H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h10v10c0,1.104,0.896,2,2,2  s2-0.896,2-2V18h10c1.104,0,2-0.896,2-2S29.104,14,28,14z"/></svg>`;
	main.appendChild(addButton);
	if (activePage === "HOME") {
		const todosHolder = getTodosHTMl(data.todos.todos);
		todosHolder.style.setProperty("--top-margin", "-1rem");
		main.appendChild(todosHolder);
		addButton.classList.add("add-button");
		addTodoEventListeners();
		checkCompletedTodos();
	} else if (activePage === "PROJECTS") {
		const addNoteButton = document.createElement("div");
		addNoteButton.classList.add("add-note-button");

		addNoteButton.innerHTML = `<?xml version="1.0" ?><!DOCTYPE svg  PUBLIC '-//W3C//DTD SVG 1.1//EN'  'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'><svg enable-background="new 0 0 512 512" height="512px" id="Layer_1" version="1.1" viewBox="0 0 512 512" width="512px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" class="svg-white" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M449.441,393.818V178.852c0-31.555-27.967-57.236-62.365-57.236H369.99v-3.434c0-31.566-27.967-57.236-62.365-57.236  h-23.034H152.586h-27.661c-34.388,0-62.365,25.67-62.365,57.236v214.965c0,31.555,27.978,57.236,62.365,57.236h17.084v3.435  c0,31.565,27.978,57.235,62.366,57.235h27.661h132.005h11.867h11.167C421.474,451.053,449.441,425.384,449.441,393.818z   M364.041,432.318H232.036h-27.661c-23.177,0-41.956-17.237-41.956-38.5v-3.435v-18.736V178.852c0-21.263,18.779-38.5,41.956-38.5  h27.661h117.545h14.46h5.949h17.085c23.177,0,41.956,17.237,41.956,38.5v214.966c0,21.263-18.779,38.5-41.956,38.5h-11.167H364.041z  "/><path d="M197.397,214.935h162.334c4.484,0,8.115-3.632,8.115-8.116s-3.631-8.115-8.115-8.115H197.397  c-4.484,0-8.116,3.631-8.116,8.115S192.913,214.935,197.397,214.935z"/><path d="M223.046,261.967c0,4.484,3.642,8.115,8.126,8.115h152.119c4.484,0,8.126-3.631,8.126-8.115s-3.642-8.127-8.126-8.127  H231.172C226.688,253.84,223.046,257.482,223.046,261.967z"/><path d="M348.083,317.102c0-4.484-3.632-8.116-8.116-8.116h-142.57c-4.484,0-8.116,3.632-8.116,8.116s3.631,8.126,8.116,8.126  h142.57C344.451,325.228,348.083,321.587,348.083,317.102z"/><path d="M391.417,372.249c0-4.484-3.642-8.115-8.126-8.115H249.689c-4.484,0-8.116,3.631-8.116,8.115s3.631,8.116,8.116,8.116  h133.602C387.776,380.365,391.417,376.733,391.417,372.249z"/></svg>`;
		main.appendChild(addNoteButton);

		const addProjectButton = document.createElement("div");
		addProjectButton.classList.add("add-project-button");

		addProjectButton.innerHTML = `<?xml version="1.0" ?><svg viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg" class="svg-white"><path d="M368 320h-96C245.6 320 224 341.6 224 368v96C224 490.4 245.6 512 272 512h96c26.4 0 48-21.6 48-48v-96C416 341.6 394.4 320 368 320zM591.1 0h-96c-26.4 0-48 21.6-48 48v96c0 26.4 21.6 48 48 48h96c26.4 0 48-21.6 48-48v-96C639.1 21.6 618.4 0 591.1 0zM192 48C192 21.6 170.4 0 144 0h-96C21.6 0 0 21.6 0 48v96C0 170.4 21.6 192 48 192h79.83l73.04 128C212 301 232.4 288 256 288L192 175.5V128h224V64H192V48z"/></svg>`;

		main.appendChild(addProjectButton);

		const todosHolder = getProjectsHTML(data.projects.projects);
		todosHolder.style.setProperty("--top-margin", "-10rem");

		main.appendChild(todosHolder);
		addButton.classList.add("add-button-project-view");
		addButton.classList.add("inactive");
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

	const addButton = document.querySelector("#add-button");
	addButton.addEventListener("click", (e) => {
		addButton.classList.toggle("clicked");
		addButton.classList.toggle("inactive");
		const addNoteButton = document.querySelector(".add-note-button");
		addNoteButton.classList.toggle("unhide");

		const addProjectButton = document.querySelector(".add-project-button");
		addProjectButton.classList.toggle("unhide");
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
