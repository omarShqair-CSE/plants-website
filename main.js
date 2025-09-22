const navMenu = document.getElementById("nav-menu");
const navLink = document.querySelectorAll(".nav-link");
const hamburger = document.getElementById("hamburger");

// Toggle mobile menu
hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("left-0");
  navMenu.classList.toggle("left-[-100%]");
  hamburger.classList.toggle("ri-menu-4-line");
  hamburger.classList.toggle("ri-close-large-line");
});

// Close mobile menu when clicking on links
navLink.forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("left-0");
    navMenu.classList.add("left-[-100%]");
    hamburger.classList.add("ri-menu-4-line");
    hamburger.classList.remove("ri-close-large-line");
  });
});

// Scroll effect for navbar
window.addEventListener("scroll", () => {
  const navbar = document.getElementById("navbar");
  if (window.scrollY > 100) {
    navbar.classList.add("shadow-2xl", "bg-green-900");
  } else {
    navbar.classList.remove("shadow-2xl", "bg-green-900");
  }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Add to cart functionality
document.querySelectorAll(".btn").forEach((button) => {
  if (button.textContent.includes("Add to Cart")) {
    button.addEventListener("click", function () {
      const product = this.closest(".bg-green-800");
      const productName = product.querySelector("h3").textContent;
      const productPrice =
        product.querySelector(".text-yellow-500").textContent;

      this.innerHTML = '<i class="ri-check-line"></i> Added';
      this.classList.add("bg-green-500", "border-green-500");

      setTimeout(() => {
        this.innerHTML = "<span>Add to Cart</span>";
        this.classList.remove("bg-green-500", "border-green-500");
      }, 2000);

      console.log(`Added to cart: ${productName} - ${productPrice}`);
    });
  }
});

document.getElementById("year").textContent = new Date().getFullYear();
