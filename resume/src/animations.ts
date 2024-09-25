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
        if (entries[0].isIntersecting) {
            CAROUSELS.forEach((carouselElement) => {
                carouselElement.classList.remove('pause');
            })
        }
        else {
            CAROUSELS.forEach((carouselElement) => {
                carouselElement.classList.add('pause');
            })
        }
})

CAROUSEL_OBSERVER.observe(OBSERVABLE_CAROUSEL);
TRANSITION_ITEMS.forEach((el) => TRANSITION_OBSERVER.observe(el));
