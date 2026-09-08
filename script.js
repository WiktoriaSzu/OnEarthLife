"use strict";
const scrollAmount = 167;
function setupCarousel(rowId, leftId, rightId) {
    const row = document.getElementById(rowId);
    const left = document.getElementById(leftId);
    const right = document.getElementById(rightId);
    left.addEventListener('click', () => {
        row.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    });
    right.addEventListener('click', () => {
        row.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    });
}
setupCarousel('imageRowEng', 'scrollLeftEng', 'scrollRightEng');
setupCarousel('imageRowPl', 'scrollLeftPl', 'scrollRightPl');
// Lightbox
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
const lightboxClose = document.getElementById('lightboxClose');
const lightboxBackdrop = document.getElementById('lightboxBackdrop');
const lightboxDownload = document.getElementById('lightboxDownload');
function openLightbox(src, alt, pdf) {
    lightboxImg.src = src;
    lightboxImg.alt = alt;
    lightboxDownload.href = pdf;
    lightbox.classList.add('open');
}
function closeLightbox() {
    lightbox.classList.remove('open');
    lightboxImg.src = '';
}
document.querySelectorAll('.image-row img').forEach((el) => {
    const img = el;
    const pdf = img.dataset.pdf ?? 'static/files/oelmag0108.pdf';
    img.addEventListener('click', () => openLightbox(img.src, img.alt, pdf));
});
lightboxClose.addEventListener('click', closeLightbox);
lightboxBackdrop.addEventListener('click', closeLightbox);
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape')
        closeLightbox();
});
