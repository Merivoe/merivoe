// ==========================================
// LENIS
// ==========================================

const lenis = new Lenis({
    duration: 1.2,
    smoothWheel: true,
    wheelMultiplier: 0.9,
});

function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

// ==========================================
// AOS
// ==========================================

AOS.init({
    duration: 900,
    easing: "ease-out-cubic",
    once: false,
    mirror: true,
    offset: 120,
});

// ==========================================
// NAVBAR
// ==========================================

const navbar = document.querySelector("nav");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});