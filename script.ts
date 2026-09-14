const scrollAmount = 167;

function setupCarousel(rowId: string, leftId: string, rightId: string): void {
    const row = document.getElementById(rowId) as HTMLDivElement;
    const left = document.getElementById(leftId) as HTMLButtonElement;
    const right = document.getElementById(rightId) as HTMLButtonElement;

    left.addEventListener('click', () => {
        row.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    });

    right.addEventListener('click', () => {
        row.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    });
}

setupCarousel('imageRowEng', 'scrollLeftEng', 'scrollRightEng');
setupCarousel('imageRowPl', 'scrollLeftPl', 'scrollRightPl');
setupCarousel('imageRowAugustEng', 'scrollLeftAugustEng', 'scrollRightAugustEng');
setupCarousel('imageRowAugustPl', 'scrollLeftAugustPl', 'scrollRightAugustPl');

// Lightbox
const lightbox = document.getElementById('lightbox') as HTMLDivElement;
const lightboxImg = document.getElementById('lightboxImg') as HTMLImageElement;
const lightboxClose = document.getElementById('lightboxClose') as HTMLButtonElement;
const lightboxBackdrop = document.getElementById('lightboxBackdrop') as HTMLDivElement;
const lightboxDownload = document.getElementById('lightboxDownload') as HTMLAnchorElement;

function openLightbox(src: string, alt: string, pdf: string): void {
    lightboxImg.src = src;
    lightboxImg.alt = alt;
    lightboxDownload.href = pdf;
    lightbox.classList.add('open');
}

function closeLightbox(): void {
    lightbox.classList.remove('open');
    lightboxImg.src = '';
}

document.querySelectorAll('.image-row img').forEach((el) => {
    const img = el as HTMLImageElement;
    const pdf = img.dataset.pdf ?? 'static/files/oelmag0108.pdf';
    img.addEventListener('click', () => openLightbox(img.src, img.alt, pdf));
});

lightboxClose.addEventListener('click', closeLightbox);
lightboxBackdrop.addEventListener('click', closeLightbox);

document.addEventListener('keydown', (e: KeyboardEvent) => {
    if (e.key === 'Escape') closeLightbox();
});
