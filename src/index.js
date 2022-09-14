import "./index.css";
import "./todo.css";
import Todo from "./objects/todo";
import getMain from "./main/main";
import getTodosHTMl from "./updateDOM";
import getHeader from "./header/header";
import getFooter from "./footer/footer";
import ToDoList from "./objects/todoList";

const contentDiv = document.querySelector(".root-content");

const overlay = document.createElement("div");
overlay.classList.add("overlay");
overlay.classList.add("visible");

const todosList = new ToDoList();
todosList.addTodo(
	new Todo(
		"td-1",
		"Learn React",
		"Learn React from the LinkedIn Learning Page",
		new Date(),
		new Date("2022-09-8"),
		2,
		"Links: https://linkedinlearning.com",
		false
	)
);

todosList.addTodo(
	new Todo(
		"td-2",
		"Go Shopping",
		"Need new clothes for the summer",
		new Date(),
		new Date("2022-10-20"),
		1,
		"Solos Nepal has great windshielders",
		false
	)
);

todosList.addTodo(
	new Todo(
		"td-3",
		"Get Money",
		"Withdraw money from the ATM",
		new Date(),
		new Date("2023-09-01"),
		1,
		"Money is in the Nabil account",
		true
	)
);

function updateDOM() {
	const main = document.querySelector("main");
	const oldTodosHolder = main.querySelector(".todos-holder");
	main.removeChild(oldTodosHolder);
	main.appendChild(getTodosHTMl(todosList.todos));
	checkCompletedTodos();
	addEventListeners();
}

function addEventListeners() {
	const todoTitles = document.querySelectorAll(".todo-title");
	todoTitles.forEach((todoTitle) => {
		const todoContainer = todoTitle.parentElement;
		const todoID = todoContainer.id;
		todoTitle.addEventListener("click", (e) => {
			todosList.updateTodoStatus(todoID);
			checkCompletedTodos();
		});
	});

	const todoDetailsButtons = document.querySelectorAll(
		"#todo-details-button"
	);
	console.log(todoDetailsButtons);
	todoDetailsButtons.forEach((todoDetailsButton) => {
		todoDetailsButton.addEventListener("click", (e) => {
			const todoID = todoDetailsButton.parentElement.parentElement.id;
			addDetailsPage(todoID);
		});
	});
}

function checkCompletedTodos() {
	const checkBoxes = document.querySelectorAll(".todo-check");
	checkBoxes.forEach((checkBox) => {
		const todoContainer = checkBox.parentElement.parentElement;
		const linkedTodo = todosList.getTodo(todoContainer.id);
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
updateDOM(todosList);

function addDetailsPage(todoID) {
	document.body.appendChild(overlay);
	document.body.appendChild(todosList.getTodo(todoID).detailsHTML);
	addDetailsEventListener();
}

function addDetailsEventListener() {
	const todoDetails = document.querySelector(".todo-details");
	const todoDetailsCloseButton = todoDetails.querySelector("#close-button");
	todoDetailsCloseButton.addEventListener("click", (e) => {
		removeDetailsPage();
	});
}

function removeDetailsPage() {
	document.body.removeChild(document.querySelector(".overlay"));
	document.body.removeChild(document.querySelector(".todo-details"));
}
