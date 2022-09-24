import "./index.css";
import "./todo.css";
import getMain from "./main/main";
import getHeader from "./header/header";
import getFooter from "./footer/footer";
import Project from "./objects/project";
import closeIcon from "./close-icon.png";
import ToDoList from "./objects/todoList";
import ProjectList from "./objects/projectList";
import { getTodosHTMl, getProjectsHTML } from "./updateDOM";
import {
	storageAvailable,
	getTodoObject,
	getProjectObject,
} from "./storage_methods";

const contentDiv = document.querySelector(".root-content");

const overlay = document.createElement("div");
overlay.classList.add("overlay");
overlay.classList.add("visible");

let activePage = "PROJECTS";

const data = { todos: new ToDoList(), projects: new ProjectList() };

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
	if (storageAvailable("localStorage")) {
		saveData();
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
			saveData();
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
	const addNoteButton = document.querySelector(".add-note-button");
	const addProjectButton = document.querySelector(".add-project-button");
	addButton.addEventListener("click", (e) => {
		addButton.classList.toggle("clicked");
		addButton.classList.toggle("inactive");
		addNoteButton.classList.toggle("unhide");

		addProjectButton.classList.toggle("unhide");
	});

	addNoteButton.addEventListener("click", (e) => {
		insertAddTodoPage(true);
	});

	addProjectButton.addEventListener("click", (e) => {
		insertAddProjectPage();
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
			saveData();
		});
	});

	const addNewTodoButton = document.querySelector("#add-button");
	addNewTodoButton.addEventListener("click", (e) => {
		insertAddTodoPage();
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

function saveData() {
	localStorage.setItem("todos", JSON.stringify(data.todos.json));
	localStorage.setItem("projects", JSON.stringify(data.projects.json));
}

function loadData() {
	const todos = JSON.parse(localStorage.getItem("todos"))["todos"];
	const projects = JSON.parse(localStorage.getItem("projects"))["projects"];

	todos.forEach((todo) => {
		data.todos.forceAddTodo(getTodoObject(todo));
	});
	projects.forEach((project) => {
		data.projects.forceAddProject(getProjectObject(project));
	});
}

contentDiv.appendChild(getHeader());
contentDiv.appendChild(getMain());
contentDiv.appendChild(getFooter());
if (storageAvailable("localStorage")) {
	loadData();
}
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

// function to insert add project page
function insertAddProjectPage() {
	const addProject = document.createElement("div");
	addProject.classList.add("add-project-page");

	const addTitleBar = document.createElement("div");
	addTitleBar.classList.add("add-titlebar");

	const addTitle = document.createElement("div");
	addTitle.classList.add("title");
	addTitle.textContent = "Add Project";

	const closeButton = new Image();
	closeButton.src = closeIcon;
	closeButton.classList.add("add-page-close-button");

	closeButton.onclick = () => {
		removeAddPage();
	};

	addTitleBar.appendChild(addTitle);
	addTitleBar.appendChild(closeButton);

	addProject.appendChild(addTitleBar);

	const addProjectForm = document.createElement("div");
	addProjectForm.classList.add("add-project-form");

	const addProjectInput = document.createElement("input");
	addProjectInput.classList.add("add-project-input");
	addProjectInput.placeholder = "Project Name";
	addProjectInput.type = "text";
	addProjectInput.required = true;

	const addProjectSubmit = document.createElement("input");
	addProjectSubmit.classList.add("add-project-submit");
	addProjectSubmit.value = "Add Project";

	// event listener for add project submit button
	addProjectSubmit.addEventListener("click", (e) => {
		const projectName = addProjectInput.value;
		data.projects.addProject(projectName);
		removeAddPage();
		updateDOM();
	});

	addProjectForm.appendChild(addProjectInput);
	addProjectForm.appendChild(addProjectSubmit);

	addProject.appendChild(addProjectForm);

	document.body.appendChild(overlay);
	document.body.appendChild(addProject);
}

function insertAddTodoPage(project = false) {
	const addTodo = document.createElement("div");
	addTodo.classList.add("add-todo-page");

	const addTitleBar = document.createElement("div");
	addTitleBar.classList.add("add-titlebar");

	const addTitle = document.createElement("div");
	addTitle.classList.add("title");
	addTitle.textContent = "Add Todo";

	const closeButton = new Image();
	closeButton.src = closeIcon;
	closeButton.classList.add("add-page-close-button");

	closeButton.onclick = () => {
		removeAddPage();
	};

	addTitleBar.appendChild(addTitle);
	addTitleBar.appendChild(closeButton);

	addTodo.appendChild(addTitleBar);

	const addForm = document.createElement("fieldset");
	addForm.classList.add("add-form");

	const titleHolder = document.createElement("div");
	titleHolder.classList.add("add-todo-title-holder");

	const titleLabel = document.createElement("label");
	titleLabel.for = "title";
	titleLabel.textContent = "Title";
	titleLabel.classList.add("add-todo-title-label");

	const title = document.createElement("input");
	title.id = "title";
	title.name = "title";
	title.classList.add("add-todo-title");

	titleHolder.appendChild(titleLabel);
	titleHolder.appendChild(title);

	const descriptionHolder = document.createElement("div");
	descriptionHolder.classList.add("add-todo-description-holder");

	const descriptionLabel = document.createElement("label");
	descriptionLabel.for = "description";
	descriptionLabel.textContent = "Description";
	descriptionLabel.classList.add("add-todo-description-label");

	const description = document.createElement("textarea");
	description.id = "description";
	description.name = "description";
	description.classList.add("add-todo-description");

	descriptionHolder.appendChild(descriptionLabel);
	descriptionHolder.appendChild(description);

	const dueDateHolder = document.createElement("div");
	dueDateHolder.classList.add("add-todo-due-date-holder");

	const dueDateLabel = document.createElement("label");
	dueDateLabel.for = "dueDate";
	dueDateLabel.textContent = "Due Date";
	dueDateLabel.classList.add("add-todo-due-date-label");

	const dueDate = document.createElement("input");
	dueDate.type = "date";
	dueDate.id = "dueDate";
	dueDate.name = "dueDate";
	dueDate.classList.add("add-todo-due-date");

	dueDateHolder.appendChild(dueDateLabel);
	dueDateHolder.appendChild(dueDate);

	const priorityHolder = document.createElement("div");
	priorityHolder.classList.add("add-todo-priority-holder");

	const priorityLabel = document.createElement("label");
	priorityLabel.textContent = "Priority";
	priorityLabel.for = "priority";
	priorityLabel.classList.add("add-todo-priority-label");

	const priority = document.createElement("input");
	priority.id = "priority";
	priority.name = "priority";
	priority.type = "range";
	priority.min = "1";
	priority.max = "3";
	priority.value = "2";
	priority.classList.add("add-todo-priority");

	priorityHolder.appendChild(priorityLabel);
	priorityHolder.appendChild(priority);

	const noteHolder = document.createElement("div");
	noteHolder.classList.add("add-todo-note-holder");

	const noteLabel = document.createElement("label");
	noteLabel.textContent = "Note";
	noteLabel.for = "note";
	noteLabel.classList.add("add-todo-note-label");

	const note = document.createElement("textarea");
	note.id = "note";
	note.name = "note";
	note.classList.add("add-todo-note");

	noteHolder.appendChild(noteLabel);
	noteHolder.appendChild(note);

	const statusHolder = document.createElement("div");
	statusHolder.classList.add("add-todo-status-holder");

	const statusLabel = document.createElement("label");
	statusLabel.textContent = "Status";
	statusLabel.for = "status";
	statusLabel.classList.add("add-todo-status-label");

	// status div element
	const status = document.createElement("div");
	status.classList.add("add-todo-status");

	const statusCheckBox = document.createElement("input");
	statusCheckBox.id = "status";
	statusCheckBox.name = "status";
	statusCheckBox.type = "checkbox";
	statusCheckBox.classList.add("add-todo-status-checkbox");
	statusCheckBox.addEventListener("change", () => {
		updateStatusDiv();
	});

	const statusDiv = document.createElement("div");
	statusDiv.classList.add("add-todo-status-div");
	updateStatusDiv();

	function updateStatusDiv() {
		if (statusCheckBox.checked) {
			statusDiv.classList.add("completed");
			statusDiv.textContent = "Completed";
		} else {
			statusDiv.classList.remove("completed");
			statusDiv.textContent = "Incomplete";
		}
	}
	status.appendChild(statusCheckBox);
	status.appendChild(statusDiv);

	statusHolder.appendChild(statusLabel);
	statusHolder.appendChild(status);

	addForm.appendChild(titleHolder);
	addForm.appendChild(descriptionHolder);
	addForm.appendChild(dueDateHolder);
	addForm.appendChild(noteHolder);
	addForm.appendChild(priorityHolder);
	addForm.appendChild(statusHolder);

	if (project) {
		addForm.classList.add("project");

		// project div element
		const projectHolder = document.createElement("div");
		projectHolder.classList.add("add-todo-parent-project-holder");

		const projectLabel = document.createElement("label");
		projectLabel.textContent = "Project";
		projectLabel.for = "project";
		projectLabel.classList.add("add-todo-parent-project-label");

		const project = document.createElement("select");
		project.id = "project";
		project.name = "project";
		project.classList.add("add-todo-parent-project");

		// add projects to project select element
		for (let i = 0; i < data.projects.projects.length; i++) {
			const option = document.createElement("option");
			option.value = data.projects.projects[i].id;
			option.textContent = data.projects.projects[i].name;
			project.appendChild(option);
		}

		projectHolder.appendChild(projectLabel);
		projectHolder.appendChild(project);

		addForm.appendChild(projectHolder);
	}

	addTodo.appendChild(addForm);

	const addTodoButton = document.createElement("button");
	addTodoButton.classList.add("add-todo-button");
	addTodoButton.textContent = "Add";

	addTodoButton.addEventListener("click", () => {
		const titleValue = title.value;
		const descriptionValue = description.value;
		const createdValue = new Date();
		const dueDateValue = new Date(dueDate.value);
		const priorityValue = parseInt(priority.value);
		const noteValue = note.value;
		const statusValue = status.checked;

		if (project) {
			const parentProjectValue = document.querySelector(
				".add-todo-parent-project"
			).value;
			data.projects.addProjectTodo(
				parentProjectValue,
				titleValue,
				descriptionValue,
				createdValue,
				dueDateValue,
				priorityValue,
				noteValue,
				statusValue
			);
		} else {
			data.todos.addTodo(
				titleValue,
				descriptionValue,
				createdValue,
				dueDateValue,
				priorityValue,
				noteValue,
				statusValue
			);
		}

		removeAddPage();
		updateDOM();
	});

	addTodo.appendChild(addTodoButton);

	document.body.appendChild(overlay);
	document.body.appendChild(addTodo);
}

function removeAddPage() {
	const overlay = document.querySelector(".overlay");
	const addTodo = document.querySelector(".add-todo-page");
	const addProject = document.querySelector(".add-project-page");

	overlay.remove();
	if (addTodo) {
		addTodo.remove();
	}
	if (addProject) {
		addProject.remove();
	}
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

insertAddProjectPage();
