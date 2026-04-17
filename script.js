// ===== SELECT ELEMENTS =====
const hamburger = document.querySelector(".hamburger");
const mobileNav = document.querySelector(".mobile-nav");
const navLinks = document.querySelectorAll(".mobile-nav a");

// ===== TOGGLE MOBILE MENU =====
hamburger.addEventListener("click", () => {
  mobileNav.classList.toggle("open");
  hamburger.classList.toggle("open");
});

// ===== CLOSE MENU WHEN LINK IS CLICKED =====
navLinks.forEach(link => {
  link.addEventListener("click", () => {
    mobileNav.classList.remove("open");
    hamburger.classList.remove("open");
  });
});

// ===== OPTIONAL: CLOSE MENU WHEN CLICKING OUTSIDE =====
document.addEventListener("click", (e) => {
  if (
    !hamburger.contains(e.target) &&
    !mobileNav.contains(e.target)
  ) {
    mobileNav.classList.remove("open");
    hamburger.classList.remove("open");
  }
});
