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
