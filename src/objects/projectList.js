export default class ProjectList {
	constructor() {
		this._projects = [];
	}

	get projects() {
		return this._projects;
	}

	addProject(project) {
		if (this.getProject(project.id) !== undefined) {
			return alert("Duplicate Project detected.");
		}
		this._projects.push(project);
	}

	removeProject(projectID) {
		this._projects.splice(this.#getProjectIndex(projectID), 1);
	}

	updateProjectTodo(projectID, todoID) {
		this._projects[this.#getProjectIndex(projectID)].updateTodoStatus(
			todoID
		);
	}

	removeProjectTodo(projectID, todoID) {
		this._projects[this.#getProjectIndex(projectID)].removeTodo(todoID);
		if (this.getProject(projectID).todos.length <= 0) {
			this.removeProject(projectID);
		}
	}

	getProjectTodo(projectID, todoID) {
		return this.getProject(projectID).getTodo(todoID);
	}

	getProject(projectID) {
		return this._projects.find((project) => projectID === project.id);
	}

	#getProjectIndex(projectID) {
		return this._projects.findIndex((project) => projectID === project.id);
	}
}
