let currentSlide = 1; // Índice del slide actual
const slider = slider.img slider.text ('.slide'); // Selecciona todos los slides

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.display = i === index ? 'block' : 'none'; // Muestra el slide actual y oculta los demás
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length; // Incrementa el índice del slide actual y vuelve al inicio si es necesario
    showSlide(currentSlide); // Muestra el nuevo slide
}

showSlide(currentSlide); // Muestra el primer slide al cargar
setInterval(nextSlide, 3000); // Cambia cada 3 segundos
