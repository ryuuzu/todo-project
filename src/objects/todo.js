import { format } from "date-fns";
import closeIcon from "../close-icon.png";
import saveIcon from "../save-icon.png";
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

		const todoTitle = document.createElement("input");
		todoTitle.setAttribute("id", "todo-title");
		todoTitle.value = this._title;
		todoTitle.disabled = true;
		todoTitle.style.width = `${getTextWidth(
			todoTitle.value,
			"600 20px Barlow"
		)}px`;

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

		titleBar.appendChild(todoTitle);

		const todoButtons = document.createElement("div");
		todoButtons.classList.add("todo-details-buttons");
		todoButtons.classList.add("save-mode");

		const svgEditButton = domParser
			.parseFromString(
				`<?xml version="1.0" ?><svg height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16 2.012 3 3L16.713 7.3l-3-3zM4 14v3h3l8.299-8.287-3-3zm0 6h16v2H4z"/></svg>`,
				"image/svg+xml"
			)
			.querySelector("svg");

		const saveButton = new Image();
		saveButton.src = saveIcon;
		saveButton.setAttribute("id", "details-save-button");

		svgEditButton.classList.add("svg-white");
		svgEditButton.classList.add("edit-button");
		saveButton.classList.add("save-button");
		todoButtons.appendChild(svgEditButton);
		todoButtons.appendChild(saveButton);

		const closeButton = new Image();
		closeButton.src = closeIcon;
		closeButton.setAttribute("id", "close-button");
		closeButton.classList.add("details-close-button");
		todoButtons.appendChild(closeButton);

		titleBar.appendChild(todoButtons);

		const todoMain = document.createElement("div");
		todoMain.classList.add("todo-main-details");

		const todoCreation = document.createElement("div");
		todoCreation.innerHTML = `Created at <span class="creation-date">${format(
			this._created,
			"MMMM d, yyyy"
		)}</span>`;
		todoCreation.classList.add("todo-creation-details");
		todoMain.appendChild(todoCreation);

		const todoOtherDetails = document.createElement("div");
		todoOtherDetails.classList.add("todo-other-details");

		const todoDescriptionHolder = document.createElement("div");

		const todoDescriptionLabel = document.createElement("label");
		todoDescriptionLabel.setAttribute("for", "description");
		todoDescriptionLabel.textContent = "Description";

		todoDescriptionHolder.appendChild(todoDescriptionLabel);

		const todoDescription = document.createElement("textarea");
		todoDescription.placeholder = "Description";
		todoDescription.value = this._description;
		todoDescription.name = "description";
		todoDescription.disabled = true;
		todoDescription.setAttribute("id", "description");
		todoDescription.classList.add("todo-details-description");

		todoDescriptionHolder.appendChild(todoDescription);

		const todoDueDateHolder = document.createElement("div");

		const todoDueDateLabel = document.createElement("label");
		todoDueDateLabel.setAttribute("for", "duedate");
		todoDueDateLabel.textContent = "Due Date";

		todoDueDateHolder.appendChild(todoDueDateLabel);

		const todoDueDate = document.createElement("input");
		todoDueDate.type = "date";
		todoDueDate.value = format(this._dueDate, "yyyy-MM-dd");
		todoDueDate.name = "duedate";
		todoDueDate.disabled = true;
		todoDueDate.setAttribute("id", "duedate");
		todoDueDate.classList.add("todo-details-duedate");

		todoDueDateHolder.appendChild(todoDueDate);

		const todoNoteHolder = document.createElement("div");

		const todoNoteLabel = document.createElement("label");
		todoNoteLabel.setAttribute("for", "note");
		todoNoteLabel.textContent = "Note";

		todoNoteHolder.appendChild(todoNoteLabel);

		const todoNote = document.createElement("textarea");
		todoNote.placeholder = "Note";
		todoNote.value = this._note;
		todoNote.name = "note";
		todoNote.disabled = true;
		todoNote.setAttribute("id", "note");
		todoNote.classList.add("todo-details-note");

		todoNoteHolder.appendChild(todoNote);

		const todoPriorityHolder = document.createElement("div");

		const todoPriorityLabel = document.createElement("label");
		todoPriorityLabel.setAttribute("for", "priority");
		todoPriorityLabel.textContent = "Priority";

		todoPriorityHolder.appendChild(todoPriorityLabel);

		const todoPriority = document.createElement("select");
		todoPriority.disabled = true;
		todoPriority.name = "priority";
		todoPriority.setAttribute("id", "priority");
		todoPriority.classList.add("todo-details-priority");

		todoPriority.innerHTML = `<option value="1" ${
			this._priority === 1 ? "selected" : ""
		}>Low</option>
		<option value="2" ${this._priority === 2 ? "selected" : ""}>Medium</option>
		<option value="3" ${this._priority === 3 ? "selected" : ""}>High</option>`;

		todoPriorityHolder.appendChild(todoPriority);

		const todoStatusHolder = document.createElement("div");

		const todoStatusLabel = document.createElement("label");
		todoStatusLabel.textContent = "Status";

		todoStatusHolder.appendChild(todoStatusLabel);

		const todoStatus = document.createElement("div");
		todoStatus.setAttribute("value", this._status);
		todoStatus.setAttribute("id", "status");
		todoStatus.classList.add("todo-details-status");
		todoStatus.textContent = this._status ? "Completed" : "Not Completed";

		todoStatusHolder.appendChild(todoStatus);

		const todoStatusUpdateButton = document.createElement("button");
		todoStatusUpdateButton.textContent = "Update Status";
		todoStatusUpdateButton.classList.add("todo-status-button");
		todoStatusUpdateButton.style.opacity = "0";
		todoStatusUpdateButton.style.cursor = "default";

		todoStatusHolder.appendChild(todoStatusUpdateButton);

		todoStatusUpdateButton.addEventListener("click", (e) => {
			this.updateStatus();
			todoStatus.setAttribute("value", this._status);
			todoStatus.textContent = this._status
				? "Completed"
				: "Not Completed";
		});

		todoOtherDetails.appendChild(todoDescriptionHolder);
		todoOtherDetails.appendChild(todoDueDateHolder);
		todoOtherDetails.appendChild(todoNoteHolder);
		todoOtherDetails.appendChild(todoPriorityHolder);
		todoOtherDetails.appendChild(todoStatusHolder);

		todoMain.appendChild(todoOtherDetails);

		detailsDiv.appendChild(titleBar);
		detailsDiv.appendChild(todoMain);

		const EDITABLES = [
			todoTitle,
			todoDescription,
			todoNote,
			todoDueDate,
			todoPriority,
			todoStatusUpdateButton,
		];

		svgEditButton.addEventListener("click", (e) => {
			EDITABLES.forEach((element) => (element.disabled = false));
			EDITABLES[EDITABLES.length - 1].style.opacity = "1";
			EDITABLES[EDITABLES.length - 1].style.cursor = "pointer";
			todoButtons.classList.remove("save-mode");
			todoButtons.classList.add("edit-mode");

			todoTitle.focus();
		});

		saveButton.addEventListener("click", (e) => {
			EDITABLES.forEach((element) => (element.disabled = true));
			EDITABLES[EDITABLES.length - 1].style.cursor = "default";
			EDITABLES[EDITABLES.length - 1].style.opacity = "0";
			todoButtons.classList.add("save-mode");
			todoButtons.classList.remove("edit-mode");
		});

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
