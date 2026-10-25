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

// Carousel scrolling
function updateNavState(row: HTMLDivElement): void {
    const prevBtn = document.querySelector<HTMLButtonElement>(`.carousel-nav-prev[data-target="${row.id}"]`);
    const nextBtn = document.querySelector<HTMLButtonElement>(`.carousel-nav-next[data-target="${row.id}"]`);
    const maxScroll = row.scrollWidth - row.clientWidth;
    if (prevBtn) prevBtn.disabled = row.scrollLeft <= 1;
    if (nextBtn) nextBtn.disabled = row.scrollLeft >= maxScroll - 1;
}

document.querySelectorAll<HTMLDivElement>('.image-row').forEach((row) => {
    updateNavState(row);
    row.addEventListener('scroll', () => updateNavState(row));
});

document.querySelectorAll<HTMLButtonElement>('.carousel-nav').forEach((btn) => {
    btn.addEventListener('click', () => {
        const targetId = btn.dataset.target;
        if (!targetId) return;
        const row = document.getElementById(targetId) as HTMLDivElement | null;
        if (!row) return;
        const firstImg = row.querySelector('img') as HTMLImageElement | null;
        const step = firstImg ? firstImg.offsetWidth + 16 : row.clientWidth;
        const direction = btn.classList.contains('carousel-nav-prev') ? -1 : 1;
        row.scrollBy({ left: direction * step, behavior: 'smooth' });
    });
});
