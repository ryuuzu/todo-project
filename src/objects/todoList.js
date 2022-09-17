import Todo from "./todo";

export default class ToDoList {
	constructor() {
		this._todos = [];
	}

	/**
	 * @returns {Array<Todo>} list of the todos stored
	 */
	get todos() {
		return this._todos;
	}

	/**
	 * Adds the todo passed into the list
	 * @param {Todo} todo todo to be added to the list
	 */
	addTodo(todo) {
		if (this.getTodo(todo.id) !== undefined) {
			return alert("Duplicate Todo detected.");
		}
		this._todos.push(todo);
	}

	/**
	 * Changes/Toggles the status of the passed todo
	 * @param {String} todoID id of the todo to update the status of
	 */
	updateTodoStatus(todoID) {
		const updatedTodo = this.getTodo(todoID);
		updatedTodo.updateStatus();
		this.#replaceTodo(updatedTodo);
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
	 */
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

	/**
	 * Removes the todo passed
	 * @param {String} todoID id of the todo to be removed
	 */
	removeTodo(todoID) {
		this._todos.splice(this.#getTodoIndex(todoID), 1);
	}

	/**
	 * Returns the todo matching the id passed
	 * @param {String} todoID id of the todo to be returned
	 * @returns {Todo}
	 */
	getTodo(todoID) {
		return this._todos.find((todo) => todo.id === todoID);
	}

	/**
	 * Returns the index of the todo matching the id.
	 * @param {String} todoID id of the todo to get index of
	 * @returns {Number}
	 */
	#getTodoIndex(todoID) {
		return this._todos.findIndex((todo) => todo.id === todoID);
	}

	/**
	 * Replaces the old todo with new data
	 * @param {Todo} todo new todo to replace the old one with
	 */
	#replaceTodo(todo) {
		this._todos[this.#getTodoIndex(todo.id)] = todo;
	}
}
