import clientImg from "../img/temp_jod.jpg";

const testimonial = (clientName, clientCompany, statement, projectTag, img) => {
	return { clientName, clientCompany, statement, projectTag, img };
};

const testimonials = [
	testimonial(
		"NotJod",
		"A cool company",
		"Jod is phenomenal. An absolute pleasure to work with!",
		["web dev", "web design", "seo"],
		clientImg
	),
	testimonial(
		"DefinitelyNotJod",
		"Company Name",
		"Beyond standards, Jod grasped our vision and brought it to life brilliantly.",
		["web dev", "web design"],
		clientImg
	),
];

export default function renderSlideShow() {
	// Target a container element to append the slides
	const container = document.createElement("div");
	container.classList.add("page-container");

	// Testimonial Header Section
	container.innerHTML = `
        <div class="testimonial-start">
            <h1>don't take my word for it</h1>
            <div id="testimonialHeading">
                <p id="testimonial-left">(testimonials)</p>
                <p id="testimonial-right">Here's what my clients say about our collaboration. Their satisfaction and meeting expectations are my top priorities, ensuring the best experience possible.</p>
            </div>
        </div>
        <hr>
        <div class="slideshow-container"></div>
    `;

	document.querySelector("#testimonial").appendChild(container);

	// Generate slides dynamically
	const slideshowContainer = container.querySelector(".slideshow-container");

	testimonials.forEach((testimonial, index) => {
		const slide = document.createElement("div");
		slide.classList.add("slides");

		// Add content to the slide
		slide.innerHTML = `
            <div class="slideshow-left">
                <div class="slide-header">
                    <h2>"${testimonial.statement}"</h2>
                    <p class="client-name">${testimonial.clientName}</p>
                    <p class="client-company">${testimonial.clientCompany}</p>
                    <div class="project-tag">
                        ${testimonial.projectTag
													.map((tag) => `<span>${tag}</span>`)
													.join("")}
                    </div>
                </div>
                <div class="slide-controller">
                    <p class="slide-number">${index + 1} / ${
			testimonials.length
		}</p>
                    <div class="slide-button-container">
                        <button class="slide-buttons prevBtn">prev</button>
                        <button class="slide-buttons nextBtn">next</button>
                    </div>
                </div>
            </div>
            <img src="${testimonial.img}" alt="client image" class="slide-img">
        `;

		slideshowContainer.appendChild(slide);
	});

	// Initialize slideshow functionality
	initializeSlideshow();
}

// Slideshow Logic
function initializeSlideshow() {
	let slideIndex = 1;
	const slides = document.getElementsByClassName("slides");

	function showSlides(n) {
		if (slides.length === 0) return;

		if (n > slides.length) slideIndex = 1;
		if (n < 1) slideIndex = slides.length;

		// Hide all slides
		for (let i = 0; i < slides.length; i++) {
			slides[i].style.display = "none";
		}

		// Show current slide
		slides[slideIndex - 1].style.display = "grid";
	}

	function plusSlides(n) {
		slideIndex += n;
		showSlides(slideIndex);
	}

	// Event listeners for buttons
	document.querySelectorAll(".prevBtn").forEach((btn) => {
		btn.addEventListener("click", () => plusSlides(-1));
	});

	document.querySelectorAll(".nextBtn").forEach((btn) => {
		btn.addEventListener("click", () => plusSlides(1));
	});

	// Show the first slide initially
	showSlides(slideIndex);
}
