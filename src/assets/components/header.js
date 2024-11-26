export default function renderHeader() {
	const headerElement = document.querySelector("header");
	const headerPageContainer = document.createElement("div");
    
    headerPageContainer.classList.add("page-container");
	headerPageContainer.innerHTML = `
        <p>web experience lab</p>
        <p>@notjod</p>
        <p>jodwongphayak@gmail.com</p>
    `;
    
	headerElement.appendChild(headerPageContainer);
}
