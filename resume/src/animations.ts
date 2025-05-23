const TRANSITION_ITEMS = document.querySelectorAll('.transition');

const TRANSITION_OBSERVER = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    })
}, {
    rootMargin: "0px 0px -150px 0px",
    threshold: 0.1
});

TRANSITION_ITEMS.forEach((el) => TRANSITION_OBSERVER.observe(el));
