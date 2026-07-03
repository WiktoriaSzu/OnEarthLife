"use strict";
const imageRow = document.getElementById('imageRow');
const scrollLeft = document.getElementById('scrollLeft');
const scrollRight = document.getElementById('scrollRight');
const scrollAmount = 186;
scrollLeft.addEventListener('click', () => {
    imageRow.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
});
scrollRight.addEventListener('click', () => {
    imageRow.scrollBy({ left: scrollAmount, behavior: 'smooth' });
});
