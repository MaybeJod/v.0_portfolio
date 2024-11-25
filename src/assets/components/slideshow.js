export default function Slideshow() {
    let slideIndex = 1;

    function showSlides(n) {
        let i;
        let slides = document.getElementsByClassName("slides");
        if (slides.length === 0) return;

        if (n > slides.length) {
            slideIndex = 1;
        }
        if (n < 1) {
            slideIndex = slides.length;
        }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slides[slideIndex - 1].style.display = "grid";
    }

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    return { plusSlides };
}