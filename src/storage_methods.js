import Todo from "./objects/todo";
import Project from "./objects/project";

function storageAvailable(type) {
	let storage;
	try {
		storage = window[type];
		const x = "__storage_test__";
		storage.setItem(x, x);
		storage.removeItem(x);
		return true;
	} catch (e) {
		return (
			e instanceof DOMException &&
			// everything except Firefox
			(e.code === 22 ||
				// Firefox
				e.code === 1014 ||
				// test name field too, because code might not be present
				// everything except Firefox
				e.name === "QuotaExceededError" ||
				// Firefox
				e.name === "NS_ERROR_DOM_QUOTA_REACHED") &&
			// acknowledge QuotaExceededError only if there's something already stored
			storage &&
			storage.length !== 0
		);
	}
}

function getTodoObject(todo) {
	const id = todo.id;
	const title = todo.title;
	const description = todo.description;
	const created = new Date(todo.created);
	const dueDate = new Date(todo.dueDate);
	const priority = todo.priority;
	const note = todo.note;
	const status = todo.status;

	return new Todo(
		id,
		title,
		description,
		created,
		dueDate,
		priority,
		note,
		status
	);
}

function getProjectObject(project) {
	const id = project.id;
	const name = project.name;
	const todos = project.todos;

	const projectObj = new Project(id, name);
	todos.forEach((todo) => {
		projectObj.forceAddTodo(getTodoObject(todo));
	});
	return projectObj;
}

export { storageAvailable, getTodoObject, getProjectObject };
