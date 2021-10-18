// ===== SHOW HEADER MENU =====
const showMenu = (menuId, toggleId, closeId) => {
  const menu = document.getElementById(menuId);
  const toggle = document.getElementById(toggleId);
  const close = document.getElementById(closeId);

  if (menu && toggle && close) {
    toggle.onclick = () => {
      menu.classList.add("show-menu");
    };

    close.onclick = () => {
      menu.classList.remove("show-menu");
    };
  }
};
showMenu("nav-menu", "nav-toggle", "nav-close");

// ===== STICKY HEADER =====
const scrollY = window.pageYOffset;
function stickyHeader() {
  const header = document.getElementById("header");

  this.scrollY >= 10
    ? header.classList.add("sticky-header")
    : header.classList.remove("sticky-header");
}
window.addEventListener("scroll", stickyHeader);

// ===== NAV-LINK ACTIVE =====
const navLink = document.querySelectorAll(".nav__menu-link");
const navMenu = document.getElementById("nav-menu");

function linkActive() {
  navLink.forEach((e) => e.classList.remove("link-active"));
  this.classList.add("link-active");

  // close nav-menu when click nav-link
  navMenu.classList.remove("show-menu");
}
navLink.forEach((e) => e.addEventListener("click", linkActive));

// ===== HOME SWIPER =====
let homeSwiper = new Swiper(".home-swiper", {
  spaceBetween: 30,
  loop: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// ===== NEW ARRIVALS SWIPER =====
let newSwiper = new Swiper(".new-swiper", {
  centeredSlides: true,
  slidesPerView: "auto",
  loop: true,
  spaceBetween: 16,
  autoplay: {
    duration: 2000,
    disableOnInteraction: false,
  },
});

// ===== SCROLL UP =====
function scrollUp() {
  const scrollup = document.getElementById("scroll-up");

  this.scrollY >= 460
    ? scrollup.classList.add("show-scroll")
    : scrollup.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollUp);

// ===== SCROLL ANIMAITON =====
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 400,
});

sr.reveal(`.home-swiper, .new-swiper, .newsletter__container`);
sr.reveal(`.category__data, .trick__content, .footer__content `, {
  interval: 100,
});
sr.reveal(`.about__data, .discount__img`, { origin: "left" });
sr.reveal(`.about__img, .discount__data`, { origin: "right" });
