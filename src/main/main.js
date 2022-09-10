import "./main.css";

export default function getMain() {
	

	const main = document.createElement("main");
	const todosHolder = document.createElement("div");
	todosHolder.classList.add("todos-holder");

	main.appendChild(todosHolder);

	return main;
}
