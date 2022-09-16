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

	getProject(projectID) {
		return this._projects.find((project) => projectID === project.id);
	}

	#getProjectIndex(projectID) {
		return this._projects.findIndex((project) => projectID === project.id);
	}
}
