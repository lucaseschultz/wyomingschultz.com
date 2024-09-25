const TRANSITION_ITEMS = document.querySelectorAll('.transition');
const OBSERVABLE_CAROUSEL = document.querySelector('.carousel-slide')!;
const CAROUSELS = document.querySelectorAll('.carousel-slide');

const TRANSITION_OBSERVER = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    })
});
const CAROUSEL_OBSERVER = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (!entry.isIntersecting) {
            entry.target.classList.add('pause');
        }
        else {
            entry.target.classList.remove('pause')
        }
    })
})

CAROUSEL_OBSERVER.observe(OBSERVABLE_CAROUSEL);
TRANSITION_ITEMS.forEach((el) => TRANSITION_OBSERVER.observe(el));
