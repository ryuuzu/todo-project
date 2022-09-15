export default class ToDoList {
	constructor() {
		this._todos = [];
	}

	get todos() {
		return this._todos;
	}

	addTodo(todo) {
		if (this.getTodo(todo.id) !== undefined) {
			return alert("Duplicate Todo detected.");
		}
		this._todos.push(todo);
	}

	updateTodoStatus(todoID) {
		const updatedTodo = this.getTodo(todoID);
		updatedTodo.updateStatus();
		this.#updateTodo(updatedTodo);
	}

	updateTodo(todoID, title, description, dueDate, priority, note, status) {
		const todoIndex = this.#getTodoIndex(todoID);
		const todo = this.getTodo(todoID);
		todo.title = title;
		todo.desc = description;
		todo.due = dueDate;
		todo.priority = priority;
		todo.note = note;

		while (todo.status != status) {
			todo.updateStatus();
		}

		this._todos[todoIndex] = todo;
	}

	removeTodo(todoID) {
		this._todos.splice(this.#getTodoIndex(todoID), 1);
	}

	getTodo(todoID) {
		return this._todos.find((todo) => todo.id === todoID);
	}

	#getTodoIndex(todoID) {
		return this._todos.findIndex((todo) => todo.id === todoID);
	}

	#updateTodo(todo) {
		this._todos[this.#getTodoIndex(todo.todoID)] = todo;
	}
}
