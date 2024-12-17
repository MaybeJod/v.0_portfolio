const project = (title, tag, image, link) => {
	return { title, tag, image, link };
};

const projects = [
	project(
		"V.0 Portfolio",
		["Web Development", "Web Design"],
		"https://images.unsplash.com/photo-1730121108301-65fe6cefb48d?q=80&w=3263&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		"https://github.com/MaybeJod/v.0_portfolio"
	),
	project(
		"E-store",
		["Web Development", "SEO"],
		"https://images.unsplash.com/photo-1730121108301-65fe6cefb48d?q=80&w=3263&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		"https://github.com/MaybeJod/e-store"
	),
	project(
		"Weather app",
		["Web Development"],
		"https://images.unsplash.com/photo-1730121108301-65fe6cefb48d?q=80&w=3263&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		"https://github.com/MaybeJod/ODIN-weather-app"
	),
];

export default function renderProjects() {
	const projectsSection = document.querySelector("#projects");
	const gridPageContainer = document.createElement("div");
	const projectsSectionTitle = document.createElement("h1");
	const gridContainer = document.createElement("div");

	gridPageContainer.classList.add("page-container");
	projectsSectionTitle.classList.add("projects-heading");
	projectsSectionTitle.textContent = "Creations in progress";

	gridContainer.classList.add("grid-container");

	projectsSection.appendChild(gridPageContainer);
	gridPageContainer.appendChild(projectsSectionTitle);
	gridPageContainer.appendChild(gridContainer);

	projects.forEach((project, index) => {
		const card = document.createElement("article");
		card.classList.add("card");

		card.innerHTML = `
            <a href="${project.link}">
                <span class="project-number">00-${index + 1}</span>
                <img src="${project.image}">
                <hr>
                <p class="project-tags">${project.tag.join(" - ")}</p>
                <h1 class="project-title">${project.title}</h1>
            </a>
        `;

		gridContainer.appendChild(card);
	});
}
