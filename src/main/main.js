import "./main.css";

export default function getMain() {
	const main = document.createElement("main");
	const todosHolder = document.createElement("div");
	todosHolder.classList.add("todos-holder");

	main.appendChild(todosHolder);

	const addButton = document.createElement("div");
	addButton.classList.add("add-button");
	addButton.setAttribute("id", "add-button");

	addButton.innerHTML = `<?xml version="1.0" ?><!DOCTYPE svg  PUBLIC '-//W3C//DTD SVG 1.1//EN'  'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'><svg height="32px" id="Layer_1" style="enable-background:new 0 0 32 32;" version="1.1" viewBox="0 0 32 32" width="32px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="svg-white"><path d="M28,14H18V4c0-1.104-0.896-2-2-2s-2,0.896-2,2v10H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h10v10c0,1.104,0.896,2,2,2  s2-0.896,2-2V18h10c1.104,0,2-0.896,2-2S29.104,14,28,14z"/></svg>`;
	main.appendChild(addButton);

	return main;
}
