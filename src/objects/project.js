import ToDoList from "./todoList";
import "../project.css";

export default class Project extends ToDoList {
	constructor(projectID, name) {
		super();
		this._projectID = projectID;
		this._name = name;
	}

	/**
	 * Returns Project Holder to display the project on.
	 *
	 * @returns {HTMLElement} Project Holder with its Todos
	 */
	get displayHTML() {
		const projectDiv = document.createElement("div");
		projectDiv.setAttribute("id", this._projectID);
		projectDiv.classList.add("project");

		const projectHeader = document.createElement("div");
		projectHeader.classList.add("project-header");

		const projectTitle = document.createElement("span");
		projectTitle.textContent = this._name;
		projectTitle.classList.add("project-title");

		projectHeader.appendChild(projectTitle);

		projectDiv.appendChild(projectHeader);

		const projectTodos = document.createElement("div");
		projectTodos.classList.add("project-todos");

		this.todos.forEach((todo) => {
			projectTodos.appendChild(todo.displayHTML);
		});

		projectDiv.appendChild(projectTodos);

		return projectDiv;
	}

	/**
	 * @returns {String} id of the project
	 */
	get id() {
		return this._projectID;
	}

	/**
	 * @returns {String} name of the project
	 */
	get name() {
		return this._name;
	}

	set name(newName) {
		this._name = newName;
	}
}
