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
import updateTime from "./assets/components/read-timer";
import Slideshow from "./assets/components/slideshow";

renderHeader();
renderNav();
renderProjects();


const nextBtn = document.querySelector(".nextBtn");
const prevBtn = document.querySelector(".prevBtn");

const slideshow = Slideshow();

nextBtn.addEventListener("click", () => slideshow.plusSlides(1));
prevBtn.addEventListener("click", () => slideshow.plusSlides(-1));


/* run update time */
setInterval(updateTime, 1000);
