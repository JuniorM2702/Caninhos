let currentSlide = 0;
	const slides = document.querySelectorAll('.carousel-slide');
	const totalSlides = slides.length;

	function showSlide(index) {
		const offset = -index * 100; // Desplazamiento basado en el índice
		document.querySelector('.carousel-slides').style.transform = `translateX(${offset}%)`;
	}

	function nextSlide() {
		currentSlide = (currentSlide + 1) % totalSlides;
		showSlide(currentSlide);
	}

	setInterval(nextSlide, 3000);


const burger = document.querySelector('.burger');
const nav = document.querySelector('.navbar ul');

burger.addEventListener('click', () => {
    nav.classList.toggle('active');
    burger.classList.toggle('toggle');
});
