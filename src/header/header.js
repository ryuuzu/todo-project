import imageLogo from "../todo-logo.png";
import "./header.css"

function getMainHead() {
	const mainHeadDiv = document.createElement("div");
	mainHeadDiv.classList.add("main-head");

	const logo = new Image();
	logo.src = imageLogo;
	logo.alt = "To-Doo Logo";
	logo.classList.add("nav-logo");

	mainHeadDiv.appendChild(logo);
	mainHeadDiv.innerHTML += "To-Doo";

	return mainHeadDiv;
}

function getNavigationLinks() {
	const navLinks = document.createElement("ul");
	navLinks.classList.add("nav-links");

	const homeNavLink = document.createElement("li");
	homeNavLink.textContent = "Home";
	navLinks.appendChild(homeNavLink);
	homeNavLink.classList.add("nav-link");
	homeNavLink.classList.add("home");

	const projectsNavLink = document.createElement("li");
	projectsNavLink.textContent = "Projects";
	navLinks.appendChild(projectsNavLink);
	projectsNavLink.classList.add("nav-link");
	projectsNavLink.classList.add("projects");

	return navLinks;
}

function getNavBar() {
	const nav = document.createElement("nav");
	nav.classList.add("navigation");

	nav.appendChild(getMainHead());
	nav.appendChild(getNavigationLinks());

	return nav;
}

export default function getHeader() {
	const header = document.createElement("header");

	header.appendChild(getNavBar());
	return header;
}
