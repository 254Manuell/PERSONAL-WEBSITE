let slideIndex = 1;
let slideInterval;
showSlides(slideIndex);

function changeSlide(n) {
    clearInterval(slideInterval);
    showSlides(slideIndex += n);
    startSlideshow();
}

function currentSlide(n) {
    clearInterval(slideInterval);
    showSlides(slideIndex = n);
    startSlideshow();
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");
    
    // Loop back to first slide
    if (n > slides.length) {
        slideIndex = 1;
    }
    
    // Go to last slide when going backwards from first
    if (n < 1) {
        slideIndex = slides.length;
    }
    
    // Remove active class from all slides and dots
    for (i = 0; i < slides.length; i++) {
        slides[i].className = slides[i].className.replace(" active", "");
        dots[i].className = dots[i].className.replace(" active", "");
    }
    
    // Show current slide and activate corresponding dot
    slides[slideIndex-1].className += " active";
    dots[slideIndex-1].className += " active";
}

function startSlideshow() {
    // Clear any existing interval
    clearInterval(slideInterval);
    
    // Start new interval
    slideInterval = setInterval(() => {
        changeSlide(1);
    }, 6000);
}

// Start the slideshow
startSlideshow();

// Pause slideshow on hover
document.querySelector('.slideshow-container').addEventListener('mouseenter', () => {
    clearInterval(slideInterval);
});

// Resume slideshow when mouse leaves
document.querySelector('.slideshow-container').addEventListener('mouseleave', startSlideshow);
