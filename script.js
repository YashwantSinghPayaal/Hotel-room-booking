// script.js
let slider1 = document.querySelector('#slider1 .slider-wrapper');
let slider2 = document.querySelector('#slider2 .slider-wrapper');

function cloneSlides(slider) {
    let slides = slider.children;
    for (let i = 0; i < slides.length; i++) {
        let clone = slides[i].cloneNode(true);
        slider.appendChild(clone);
    }
}

// Clone slides for infinite scrolling
cloneSlides(slider1);
cloneSlides(slider2);