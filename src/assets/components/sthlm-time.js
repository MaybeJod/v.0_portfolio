function getSthlmTime() {
	let TimeOptions = {
			timeZone: "Europe/Stockholm",
			hour: "numeric",
			minute: "numeric",
			second: "numeric",
		},
		formatter = new Intl.DateTimeFormat([], TimeOptions);
	let sthlmTime = formatter.format(new Date());

	return sthlmTime;
}

export default function updateSthlmTime() {
	const currentTimeDisplay = document.querySelector("#sthlmTime");
	currentTimeDisplay.innerText = `${getSthlmTime()}, STHLM`;
	return currentTimeDisplay;
}
