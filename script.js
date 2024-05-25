window.addEventListener("load", () => {
    let check = true;
    let headerBtn = document.querySelector(
        ".header-wrapper .header-button img"
    );

    headerBtn.addEventListener("click", (e) => {
        if (check) {
            e.target.src = "./assets/icon-menu-close.svg";
            check = !check;

            document
                .querySelector(".navbar-mobile")
                .classList.add("nav-active");
        } else {
            e.target.src = "./assets/icon-menu.svg";
            check = !check;

            document
                .querySelector(".navbar-mobile")
                .classList.remove("nav-active");
        }
    });

    let sections = document.querySelectorAll("section");
    let navLinks = document.querySelectorAll(".header-wrapper .navbar a");
    let navLinksMobile = document.querySelectorAll(".navbar-mobile .navbar a");

    window.onscroll = () => {
        sections.forEach((sec) => {
            let top = window.scrollY;
            let offset = sec.offsetTop - 150;
            let height = sec.offsetHeight;
            let id = sec.getAttribute("id");
            if (top >= offset && top < offset + height) {
                navLinks.forEach((links) => {
                    links.classList.remove("active");
                    document
                        .querySelector("header nav a[href*=" + id + "]")
                        .classList.add("active");
                });
                navLinksMobile.forEach((links) => {
                    links.classList.remove("active");
                    document
                        .querySelector(".navbar-mobile nav a[href*=" + id + "]")
                        .classList.add("active");
                });
            }
        });
        let header = document.querySelector(".navbar-mobile");
        header.classList.toggle("sticky", window.scrollY > 100);
    };
});

ScrollReveal({
    reset: true,
    distance: "0px",
    duration: 2000,
    delay: 200,
});

ScrollReveal().reveal("h3 i", { origin: "top" });

ScrollReveal({
    reset: true,
    distance: "80px",
    duration: 2000,
    delay: 200,
});

ScrollReveal().reveal(".about-summary .image img, .skills-content", {
    origin: "left",
});

ScrollReveal().reveal(".about-wrapper .summary-content, .skills-summary img", {
    origin: "right",
});

ScrollReveal().reveal(".work-container, textarea, form input[type='submit']");
ScrollReveal().reveal("form input[type='email']", { origin: "top" });
