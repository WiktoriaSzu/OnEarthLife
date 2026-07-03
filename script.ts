const imageRow = document.getElementById('imageRow') as HTMLDivElement;
const scrollLeft = document.getElementById('scrollLeft') as HTMLButtonElement;
const scrollRight = document.getElementById('scrollRight') as HTMLButtonElement;

const scrollAmount = 186;

scrollLeft.addEventListener('click', () => {
    imageRow.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
});

scrollRight.addEventListener('click', () => {
    imageRow.scrollBy({ left: scrollAmount, behavior: 'smooth' });
});

// Lightbox
const lightbox = document.getElementById('lightbox') as HTMLDivElement;
const lightboxImg = document.getElementById('lightboxImg') as HTMLImageElement;
const lightboxClose = document.getElementById('lightboxClose') as HTMLButtonElement;
const lightboxBackdrop = document.getElementById('lightboxBackdrop') as HTMLDivElement;

function openLightbox(src: string, alt: string): void {
    lightboxImg.src = src;
    lightboxImg.alt = alt;
    lightbox.classList.add('open');
}

function closeLightbox(): void {
    lightbox.classList.remove('open');
    lightboxImg.src = '';
}

imageRow.querySelectorAll('img').forEach((el) => {
    const img = el as HTMLImageElement;
    img.addEventListener('click', () => openLightbox(img.src, img.alt));
});

lightboxClose.addEventListener('click', closeLightbox);
lightboxBackdrop.addEventListener('click', closeLightbox);

document.addEventListener('keydown', (e: KeyboardEvent) => {
    if (e.key === 'Escape') closeLightbox();
});
