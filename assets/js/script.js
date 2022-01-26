document.querySelector(".navbar-nav").addEventListener("click", function (e) {
    e.preventDefault();
    if (e.target.classList.contains("nav-link")) {
        const id = e.target.getAttribute("href");
        console.log(id);
        document.querySelector(id).scrollIntoView({ behavior: "smooth" });
    }
});