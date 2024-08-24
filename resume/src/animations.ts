const TRANSITION_ITEMS = document.querySelectorAll('.experience-item, .transition');

const OBSERVER = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    })
});


TRANSITION_ITEMS.forEach((el) => OBSERVER.observe(el));
