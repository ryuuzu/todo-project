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
	 * Method to get Todo Details to add to the page
	 *
	 * @param {String} projectID ID of the project that has the todo
	 * @param {String} todoID ID of the todo to get details of
	 * @returns {HTMLElement} HTML Div element containing the Todo Details
	 */
	getTodoDetails(projectID, todoID) {
		const todoHTML = this.getProject(projectID).getTodo(todoID).detailsHTML;

		todoHTML.setAttribute("project_id", this._projectID);
		console.log(todoHTML);

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
	 *
	 * @param {String} projectID id of the project to update the todo of
	 * @param {String} todoID id of the todo to be updated
	 */
	updateProjectTodo(projectID, todoID) {
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
