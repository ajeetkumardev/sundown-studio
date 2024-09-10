// Initialize Lenis
const lenis = new Lenis({
  duration: 1.2, // Duration of the scroll in seconds
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Custom easing function
  smooth: true, // Enable smooth scroll
});

// Animation frame loop for smooth scrolling
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

const f_list = document.querySelector(".featured-list");
const f_box = document.querySelector(".ft-image-anim");

f_list.addEventListener("mouseenter", () => {
  f_box.style.display = "block";
});
f_list.addEventListener("mouseleave", () => {
  f_box.style.display = "none";
});

const f_items = document.querySelectorAll(".featured-item");

f_items.forEach((e) => {
  e.addEventListener("mouseenter", () => {
    const ft_bg = e.getAttribute("data-image");
    f_box.style.backgroundImage = `url(${ft_bg})`;
  });
});


document.addEventListener('DOMContentLoaded', () => {
  const footer = document.querySelector('.footer');
  const spacer = document.querySelector('.spacer');

  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 1.0
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        footer.classList.add('visible');
      } else {
        footer.classList.remove('visible');
      }
    });
  }, options);

  observer.observe(spacer);

  // Optional: Hide footer when scrolling up
  let lastScrollY = window.scrollY;
  window.addEventListener('scroll', () => {
    if (window.scrollY < lastScrollY) {
      footer.classList.remove('visible');
    }
    lastScrollY = window.scrollY;
  });
});
