const TRANSITION_ITEMS = document.querySelectorAll('.transition');

const TRANSITION_OBSERVER = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    })
});


TRANSITION_ITEMS.forEach((el) => OBSERVER.observe(el));
