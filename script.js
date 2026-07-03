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
// Lightbox
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
const lightboxClose = document.getElementById('lightboxClose');
const lightboxBackdrop = document.getElementById('lightboxBackdrop');
function openLightbox(src, alt) {
    lightboxImg.src = src;
    lightboxImg.alt = alt;
    lightbox.classList.add('open');
}
function closeLightbox() {
    lightbox.classList.remove('open');
    lightboxImg.src = '';
}
imageRow.querySelectorAll('img').forEach((img) => {
    img.addEventListener('click', () => {
        openLightbox(img.src, img.alt);
    });
});
lightboxClose.addEventListener('click', closeLightbox);
lightboxBackdrop.addEventListener('click', closeLightbox);
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape')
        closeLightbox();
});
