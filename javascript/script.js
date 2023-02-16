
 
let navbar = document.querySelector('.navbar');
let hamburger = document.querySelector('.hamburger');

// hamburger menu for cell phones

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navbar.classList.toggle('active');
})

document.querySelectorAll('.navbar-link').forEach(element => {
    element.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navbar.classList.remove('active');
    })
})

// 'reveal' animation trigger function
function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 100;
        if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
        } else {
        reveals[i].classList.remove("active");
        };
    };
}

window.addEventListener("scroll", reveal);

reveal();

// spotlight sliders variables

let prev = document.querySelector('.prev');
let next = document.querySelector('.next');
let dots = document.querySelectorAll('.dot');
let slides = document.querySelectorAll(".m-slide");
let wSlides = document.querySelectorAll(".w-slide")
let wDots = document.querySelectorAll(".w-dot");
let i;

// men spotlight slider
let slideIndex = 1;
showMenSlides(slideIndex);

function plusMenSlides(n) {
  showMenSlides(slideIndex += n);
}

function currentMenSlide(n) {
  showMenSlides(slideIndex = n);
}

function showMenSlides(n) {

  if (n > slides.length) {slideIndex = 1};
  if (n < 1) {slideIndex = slides.length};

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" light", "");
  }

  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " light";
}

// women spotlight slider
let slideWomenIndex = 1;
showWomenSlide(slideWomenIndex);

function plusWomenSlides(n)  {
  showWomenSlide(slideWomenIndex += n);
}

function currentWomenSlide(n) {
  showWomenSlide(slideWomenIndex = n);
}

function showWomenSlide(n) {
  if (n > wSlides.length) {slideWomenIndex = 1};
  if (n < 1) {slideWomenIndex = wSlides.length};

  for (i = 0; i < wSlides.length; i++) {
    wSlides[i].style.display = "none";
  }

  for (i = 0; i < wDots.length; i++) {
    wDots[i].className = wDots[i].className.replace(" light", "");
  }

  wSlides[slideWomenIndex-1].style.display = "block";
  wDots[slideWomenIndex-1].className += " light";

}






