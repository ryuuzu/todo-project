import "./footer.css"

export default function getFooter() {
	const footer = document.createElement("footer");

	footer.innerHTML = `To-Doo by <a href="http://github.com/ryuuzu">Utsav Gurmachhan</a>`;

	return footer;
}
