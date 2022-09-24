import Project from "./project";
import Todo from "./todo";

export default class ProjectList {
	constructor() {
		this._projects = [];
	}

	/**
	 * Property containing the list of projects
	 *
	 * @returns {Array<Project>} array of projects stored
	 */
	get projects() {
		return this._projects;
	}

	/**
	 * @returns {String} new id for todo that is not in the list.
	 */
	get newID() {
		const int_ids = this._projects.map((todo) =>
			parseInt(todo.id.split("-")[1])
		);

		int_ids.sort((a, b) => a - b);

		// finding if any number is missing
		var missing = undefined;

		if (int_ids.length === 0) {
			missing = 1;
		} else {
			for (let index = 0; index < int_ids.length; index++) {
				if (index + 1 !== int_ids[index]) {
					missing = index + 1;
					break;
				}
			}

			if (missing === undefined) {
				missing = int_ids[int_ids.length - 1] + 1;
			}
		}

		return `pj-${missing}`;
	}

	/**
	 * Updates the todo according to the data passed
	 * @param {String} todoID id of the todo to be updates
	 * @param {String} title new title of the todo
	 * @param {String} description new description of the todo
	 * @param {Date} dueDate new due date of the todo
	 * @param {Number} priority new priority for the todo
	 * @param {String} note new note of the todo
	 * @param {Boolean} status updated status of the todo.
	 * @param {String} projectID old project id to the todo
	 * @param {String} newProjectID new project id of the todo
	 */
	updateProjectTodo(
		todoID,
		title,
		description,
		creationDate,
		dueDate,
		priority,
		note,
		status,
		projectID,
		newProjectID = undefined
	) {
		if (newProjectID === undefined || projectID === newProjectID) {
			this._projects[this.#getProjectIndex(projectID)].updateTodo(
				todoID,
				title,
				description,
				dueDate,
				priority,
				note,
				status
			);
		} else {
			this.removeProjectTodo(projectID, todoID);
			this.addProjectTodo(
				newProjectID,
				title,
				description,
				creationDate,
				dueDate,
				priority,
				note,
				status
			);
		}
	}

	/**
	 * Method to get Todo Details to add to the page
	 *
	 * @param {String} projectID ID of the project that has the todo
	 * @param {String} todoID ID of the todo to get details of
	 * @returns {HTMLElement} HTML Div element containing the Todo Details
	 */
	getTodoDetails(projectID, todoID) {
		const mainProject = this.getProject(projectID);
		const todoHTML = mainProject.getTodo(todoID).detailsHTML;
		todoHTML.classList.add("project");

		const otherTodoDetails = todoHTML.querySelector(".todo-other-details");

		const parentProjectHolder = document.createElement("div");
		const parentProjectLabel = document.createElement("label");
		parentProjectLabel.textContent = "Parent Project";
		parentProjectLabel.setAttribute("for", "parentProject");
		parentProjectHolder.appendChild(parentProjectLabel);

		const parentProject = document.createElement("select");
		parentProject.disabled = true;
		parentProject.classList.add("todo-details-parent-project");
		parentProject.name = "parentProject";
		parentProject.setAttribute("id", "parentProject");

		this.projects.forEach((project) => {
			const projectOption = document.createElement("option");

			projectOption.textContent = project.name;
			projectOption.value = project.id;
			projectOption.selected = mainProject.id === project.id;
			parentProject.appendChild(projectOption);
		});

		parentProjectHolder.appendChild(parentProject);

		otherTodoDetails.appendChild(parentProjectHolder);

		todoHTML.setAttribute("project_id", mainProject.id);

		const EDITABLES = [parentProject];

		todoHTML
			.querySelector(".edit-button")
			.addEventListener("click", (e) => {
				EDITABLES.forEach((element) => (element.disabled = false));
			});

		todoHTML
			.querySelector(".save-button")
			.addEventListener("click", (e) => {
				EDITABLES.forEach((element) => (element.disabled = true));
			});

		return todoHTML;
	}

	/**
	 * Adds the passed project to the projects list.
	 * @param {Project} project project to be added to the list
	 */
	addProject(project) {
		if (this.getProject(project.id) !== undefined) {
			return alert("Duplicate Project detected.");
		}
		this._projects.push(project);
	}

	/**
	 * Removes the passed project id from the list
	 * @param {String} projectID the project to be removed
	 */
	removeProject(projectID) {
		this._projects.splice(this.#getProjectIndex(projectID), 1);
	}

	/**
	 * Updates the todo according to the data passed
	 * @param {String} projectID id of the project to update todo of
	 * @param {String} title title of the todo
	 * @param {String} description description of the todo
	 * @param {Date} created created date of the todo
	 * @param {Date} dueDate due date of the todo
	 * @param {Number} priority priority for the todo
	 * @param {String} note note of the todo
	 * @param {Boolean} status updated status of the todo.
	 */

	addProjectTodo(
		projectID,
		title,
		description,
		created,
		dueDate,
		priority,
		note,
		status
	) {
		this._projects[this.#getProjectIndex(projectID)].addTodo(
			title,
			description,
			created,
			dueDate,
			priority,
			note,
			status
		);
	}

	/**
	 *
	 * @param {String} projectID id of the project to update the todo of
	 * @param {String} todoID id of the todo to be updated
	 */
	updateProjectTodoStatus(projectID, todoID) {
		this._projects[this.#getProjectIndex(projectID)].updateTodoStatus(
			todoID
		);
	}

	/**
	 * Removes the specified todo from the given project
	 * @param {String} projectID id of the project to remove the todo of
	 * @param {String} todoID id of the todo to be removed
	 */
	removeProjectTodo(projectID, todoID) {
		this._projects[this.#getProjectIndex(projectID)].removeTodo(todoID);
		if (this.getProject(projectID).todos.length <= 0) {
			this.removeProject(projectID);
		}
	}

	/**
	 * Returns the todo matching the id from the given project
	 * @param {String} projectID id of the project to return the todo of
	 * @param {String} todoID id of the todo to return the obnject of
	 * @returns {Todo} todo object matching the id passed
	 */
	getProjectTodo(projectID, todoID) {
		return this.getProject(projectID).getTodo(todoID);
	}

	/**
	 *
	 * @param {String} projectID id of the project to return the object of
	 * @returns {Project} project matching the id passed.
	 */
	getProject(projectID) {
		return this._projects.find((project) => projectID === project.id);
	}

	/**
	 *
	 * @param {string} projectID id of the project to return the index of
	 * @returns {Number} index of the project in the list
	 */
	#getProjectIndex(projectID) {
		return this._projects.findIndex((project) => projectID === project.id);
	}
}
