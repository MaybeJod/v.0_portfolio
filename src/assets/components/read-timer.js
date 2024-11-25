function getCurrentTime() {
	const date = new Date();
	const localeString = date.toLocaleTimeString();
	return localeString;
}

export default function updateTime() {
	const currentTimeDisplay = document.querySelector("#currentTime");
	currentTimeDisplay.innerText = getCurrentTime();
	return currentTimeDisplay;
}