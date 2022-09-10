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
