// Bouton défilement
document.getElementById('btn-down').addEventListener('click', function(event) {
    event.preventDefault(); // Empêche le comportement par défaut du lien

    window.scrollBy({
        top: window.innerHeight, // Défile de la hauteur de la fenêtre
        behavior: 'smooth' // Pour un défilement fluide
    });
});

// Carrousel ville
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const slides = document.querySelector('.slides');
const slideWidth = document.querySelector('.slide').clientWidth;
const marginBetweenSlides = 20;
let currentIndex = 0;
const totalItems = document.querySelectorAll('.slide').length;
prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex === 0) ? totalItems - 1 : currentIndex - 1;
  updateSlidesPosition();
});
nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex === totalItems - 1) ? 0 : currentIndex + 1;
  updateSlidesPosition();
});
function updateSlidesPosition() {
  const offset = (slideWidth + marginBetweenSlides) * currentIndex;
  slides.style.transition = 'transform 0.5s ease-in-out';
  slides.style.transform = `translateX(-${offset}px)`;
}

// Réinitialisation de la position des diapositives pour créer un effet de boucle
slides.addEventListener('transitionend', () => {
  if (currentIndex === totalItems - 1) {
    setTimeout(() => {
      slides.style.transition="none";
      slides.style.transform = `translateX(0)`;
      setTimeout(() => {
        currentIndex = 0;
        updateSlidesPosition();
      }, 50); // Attendre une courte période avant de passer à la première diapositive
    }, 500);
  }
});

// Dernier Carrousel
var slideIndex = 1;
showSlides(slideIndex);
function plusSlides(n) {
  showSlides(slideIndex += n);
}
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("custom-slider");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}