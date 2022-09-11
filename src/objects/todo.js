import closeIcon from "../close-icon.png";
import getTextWidth from "./canvas_methods";

const domParser = new DOMParser();
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

		const todoTitleThings = document.createElement("div");
		todoTitleThings.classList.add("todo-title-things");

		const todoTitle = document.createElement("input");
		todoTitle.setAttribute("id", "todo-title");
		todoTitle.value = this._title;
		todoTitle.disabled = true;
		todoTitle.style.width = `${getTextWidth(
			todoTitle.value,
			"600 20px Barlow"
		)}px`;

		todoTitle.addEventListener("keydown", (e) => {
			if (e.key === "Enter") {
				todoTitle.disabled = true;
			}
		});

		todoTitle.addEventListener("keyup", (e) => {
			const titleBarDiff =
				titleBar.clientWidth -
				getTextWidth(todoTitle.value, "600 20px Barlow");
			if (titleBarDiff < 100) {
				return;
			}
			todoTitle.style.width = `${getTextWidth(
				todoTitle.value,
				"600 20px Barlow"
			)}px`;
		});

		todoTitleThings.appendChild(todoTitle);

		const svgEditButton = domParser
			.parseFromString(
				`<?xml version="1.0" ?><svg height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16 2.012 3 3L16.713 7.3l-3-3zM4 14v3h3l8.299-8.287-3-3zm0 6h16v2H4z"/></svg>`,
				"image/svg+xml"
			)
			.querySelector("svg");

		svgEditButton.addEventListener("click", (e) => {
			todoTitle.disabled = false;
			todoTitle.focus();
		});
		svgEditButton.classList.add("svg-white");
		todoTitleThings.appendChild(svgEditButton);

		titleBar.appendChild(todoTitleThings);

		const closeButton = new Image();
		closeButton.src = closeIcon;
		closeButton.classList.add("details-close-button");
		titleBar.appendChild(closeButton);

		const todoMain = document.createElement("div");
		todoMain.classList.add("todo-main-details");

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
