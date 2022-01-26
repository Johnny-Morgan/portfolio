const homeSection = document.querySelector('#home')
const nav = document.querySelector('.navbar');

const stickyNav = (entries) => {
    const [entry] = entries;
    if (!entry.isIntersecting) {
        nav.classList.add('sticky-top');
    } else {
        nav.classList.remove('sticky-top');
    }
}
const homeObserver = new IntersectionObserver(stickyNav, {
    root: null,
    threshold: 0,
    rootMargin: '-62px',
});
homeObserver.observe(homeSection);

// Smooth scrolling
document.querySelector(".navbar-nav").addEventListener("click", function (e) {
    e.preventDefault();
    if (e.target.classList.contains("nav-link")) {
        const id = e.target.getAttribute("href");
        document.querySelector(id).scrollIntoView({ behavior: "smooth" });
    }
});