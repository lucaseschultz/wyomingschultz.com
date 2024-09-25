const TRANSITION_ITEMS = document.querySelectorAll('.transition');
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

CAROUSELS.forEach((el) => CAROUSEL_OBSERVER.observe(el));
TRANSITION_ITEMS.forEach((el) => TRANSITION_OBSERVER.observe(el));
