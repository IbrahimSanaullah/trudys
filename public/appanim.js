const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            observer.unobserve(entry.target);
        } 
        // else {
        //     entry.target.classList.remove('show');
        // }
    });
});

// Select elements with both fade-up, fade-in, scale-up classes
const fadeUpElements = document.querySelectorAll('.fade-up');
const fadeInElements = document.querySelectorAll('.fade-in');
const fadeInFElements = document.querySelectorAll('.fade-in-fast');
const fadeRElements = document.querySelectorAll('.fade-right');
const fadeLElements = document.querySelectorAll('.fade-left');
const fadeDElements = document.querySelectorAll('.fade-down');
const scaleUpElements = document.querySelectorAll('.scale-up');  // Add this line
const blurElements = document.querySelectorAll('.blur'); 
// const typewriterElements = document.querySelectorAll('.typewriter');
const fadeUpsElements = document.querySelectorAll('.fade-up-small');



// Observe all the elements, including the scale-up elements
fadeUpElements.forEach((el) => observer.observe(el));
fadeInElements.forEach((el) => observer.observe(el));
fadeInFElements.forEach((el) => observer.observe(el));
fadeRElements.forEach((el) => observer.observe(el));
fadeLElements.forEach((el) => observer.observe(el));
fadeDElements.forEach((el) => observer.observe(el));
scaleUpElements.forEach((el) => observer.observe(el)); // Observe scale-up elements
blurElements.forEach((el) => observer.observe(el)); // Observe blur elements
// typewriterElements.forEach((el) => observer.observe(el));
fadeUpsElements.forEach((el) => observer.observe(el)); // Observe fade-up-small elements