import closeIcon from "../close-icon.png";
export default class Todo {
	constructor(
		id,
		title,
		description,
		created,
		dueDate,
		priority,
		note,
		status
	) {
		this._id = id;
		this._title = title;
		this._description = description;
		this._created = created;
		this._dueDate = dueDate;
		this._priority = priority;
		this._note = note;
		this._status = status;
	}

	get detailsHTML() {
		const detailsDiv = document.createElement("div");
		detailsDiv.classList.add("todo-details");
		detailsDiv.setAttribute("id", this._id);

		const titleBar = document.createElement("div");
		titleBar.classList.add("details-titlebar");

		const todoTitle = document.createElement("span");
		todoTitle.textContent = this._title;
		titleBar.appendChild(todoTitle);

		const closeButton = new Image();
		closeButton.src = closeIcon;
		closeButton.classList.add('details-close-button')
		titleBar.appendChild(closeButton);

		const todoMain = document.createElement("div");
		todoMain.classList.add('todo-main-details')

		detailsDiv.appendChild(titleBar);
		detailsDiv.appendChild(todoMain);

		return detailsDiv;
	}

	get id() {
		return this._id;
	}

	get status() {
		return this._status;
	}

	get created() {
		return this._created;
	}

	updateStatus() {
		this._status = !this._status;
	}

	get title() {
		return this._title;
	}

	set title(newTitle) {
		this._title = newTitle;
	}

	get desc() {
		return this._description;
	}

	set desc(newDesc) {
		this._description = newDesc;
	}

	get due() {
		return this._dueDate;
	}

	set due(newDue) {
		this._dueDate = newDue;
	}

	get priority() {
		return this._priority;
	}

	set priority(newPriority) {
		if (newPriority >= 1 && newPriority <= 3) {
			this._priority = newPriority;
		} else {
			return alert("Invalid Priority Value supplied");
		}
	}

	get note() {
		return this._note;
	}

	set note(newNote) {
		if (newNote.length > 200) {
			return alert("Note for the to-do must be less than 200 words.");
		}
		this._note = newNote;
	}
}
