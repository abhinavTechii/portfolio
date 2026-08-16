// ================= PRELOADER =================

window.addEventListener("load", function () {

    const preloader = document.querySelector(".preloader");

    if (preloader) {
        setTimeout(() => {
            preloader.classList.add("hide");
        }, 500);
    }

});


// ================= NAVBAR =================

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        header?.classList.add("scrolled");
    } else {
        header?.classList.remove("scrolled");
    }

});


// ================= MOBILE MENU =================

const menuBtn = document.querySelector(".menu-btn");
const navMenu = document.querySelector(".nav-menu");

menuBtn?.addEventListener("click", () => {

    navMenu?.classList.toggle("open");

});


// Close menu after clicking link

document.querySelectorAll(".nav-link").forEach(link => {

    link.addEventListener("click", () => {

        navMenu?.classList.remove("open");

    });

});


// ================= THEME SWITCHER =================

const themeBtn = document.querySelector(".theme-btn");

themeBtn?.addEventListener("click", () => {

    document.body.classList.toggle("light-theme");

    const icon = themeBtn.querySelector("i");

    if (document.body.classList.contains("light-theme")) {

        if (icon) {
            icon.className = "fa-solid fa-moon";
        }

        localStorage.setItem("theme", "light");

    } else {

        if (icon) {
            icon.className = "fa-solid fa-sun";
        }

        localStorage.setItem("theme", "dark");

    }

});


// Load saved theme

if (localStorage.getItem("theme") === "light") {

    document.body.classList.add("light-theme");

    const icon = themeBtn?.querySelector("i");

    if (icon) {
        icon.className = "fa-solid fa-moon";
    }

}


// ================= TYPING EFFECT =================

const typingText = document.querySelector(".typing-text");

const words = [
    "Full Stack Developer",
    "Java Developer",
    "Web Developer",
    "Software Developer"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;


function typeEffect() {

    if (!typingText) return;

    const currentWord = words[wordIndex];

    if (!deleting) {

        typingText.textContent =
            currentWord.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === currentWord.length) {

            deleting = true;

            setTimeout(typeEffect, 1500);

            return;
        }

    } else {

        typingText.textContent =
            currentWord.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {

            deleting = false;

            wordIndex++;

            if (wordIndex >= words.length) {
                wordIndex = 0;
            }

        }

    }

    setTimeout(
        typeEffect,
        deleting ? 50 : 100
    );

}

typeEffect();


// ================= SCROLL REVEAL =================

const revealElements =
    document.querySelectorAll(".reveal");


const revealObserver =
    new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                    revealObserver.unobserve(
                        entry.target
                    );

                }

            });

        },

        {
            threshold: 0.12
        }

    );


revealElements.forEach(element => {

    revealObserver.observe(element);

});


// ================= BACK TO TOP =================

const backToTop =
    document.querySelector(".back-to-top");


window.addEventListener("scroll", () => {

    if (!backToTop) return;

    if (window.scrollY > 500) {

        backToTop.classList.add("show");

    } else {

        backToTop.classList.remove("show");

    }

});


backToTop?.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});


// ================= CONTACT FORM =================

const contactForm =
    document.querySelector(".contact-form");


contactForm?.addEventListener("submit", function (e) {

    e.preventDefault();

    const button =
        contactForm.querySelector("button");

    if (button) {

        const originalText =
            button.innerHTML;

        button.innerHTML =
            '<i class="fa-solid fa-check"></i> Message Sent!';

        button.disabled = true;

        setTimeout(() => {

            button.innerHTML = originalText;

            button.disabled = false;

            contactForm.reset();

        }, 2000);

    }

});