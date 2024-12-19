/* styles */
import "./assets/styles/reset.css";
import "./assets/styles/style.css";
/* imgs */
import tempJod from "./assets/img/temp_jod.jpg";
import favIcon from "./assets/favicon/jod_favicon_6464.jpg";
/* -----js----- */
/* header section */
import renderHeader from "./assets/components/header";
/* nav section */
import renderNav from "./assets/components/nav";
/* projects section */
import renderProjects from "./assets/components/projects";
/* testimonials slideshow */
import renderSlideShow from "./assets/components/slideshow";
/* timer for read message */
import updateTime from "./assets/components/read-timer";
/* timer for stockholm */
import updateSthlmTime from "./assets/components/sthlm-time";

document.addEventListener("DOMContentLoaded", () => {
	renderHeader();
	renderNav();
	renderProjects();
	renderSlideShow();

	/* run update time */
	setInterval(updateTime, 1000);
	setInterval(updateSthlmTime, 1000);
});
