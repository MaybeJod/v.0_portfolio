const navLink = (title, link) => {
	return { title, link };
};

const navLinks = [
	navLink("projects", "#projects"),
	navLink("about", "#about"),
	navLink("contact", "#contact"),
];

export default function renderNav() {
	const navElement = document.querySelector("nav");
	const ulElement = document.createElement("ul");
	navElement.appendChild(ulElement);

	navLinks.forEach((navLink) => {
		const liElement = document.createElement("li");
		const aElement = document.createElement("a");

		aElement.href = navLink.link;
		aElement.innerText = navLink.title;

		liElement.appendChild(aElement);

		ulElement.appendChild(liElement);
	});
}
