import "./styles/reset.css";
import "./styles/style.css";
import tempJod from "./assets/img/temp_jod.jpg"
import favIcon from "./assets/favicon/jod_favicon_6464.jpg"

function getCurrentTime() {
	const date = new Date();
	const localeString = date.toLocaleTimeString();
	return localeString;
}

function updateTime() {
	const currentTimeDisplay = document.querySelector("#currentTime");
	currentTimeDisplay.innerText = getCurrentTime();
	return currentTimeDisplay;
}

setInterval(updateTime, 1000);