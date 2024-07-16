"use strict";
const transitionItems = document.querySelectorAll('.experience-item, .transition');
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});
transitionItems.forEach((el) => observer.observe(el));
