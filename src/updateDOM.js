function getTodosHTMl(todos) {
	const todosHolder = document.createElement("div");
	todosHolder.classList.add("todos-holder");

	todos.forEach((todo) => {
		todosHolder.appendChild(todo.displayHTML);
	});

	return todosHolder;
}

function getProjectsHTML(projects) {
	const projectsHolder = document.createElement("div");
	projectsHolder.classList.add("todos-holder");

	projects.forEach((project) => {
		console.log(project);
		projectsHolder.appendChild(project.displayHTML);
	});

	return projectsHolder;
}

module.exports = { getTodosHTMl, getProjectsHTML };
