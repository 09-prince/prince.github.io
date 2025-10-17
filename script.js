// Theme Toggle Function
function toggleTheme() {
  const html = document.documentElement;
  const currentTheme = html.getAttribute("data-theme");
  const newTheme = currentTheme === "dark" ? "light" : "dark";
  
  html.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);
}

// Load Saved Theme on Page Load
window.addEventListener("load", () => {
  const savedTheme = localStorage.getItem("theme") || "light";
  document.documentElement.setAttribute("data-theme", savedTheme);
});

// Mobile Menu Toggle
function toggleMobileMenu() {
  const navLinks = document.getElementById("navLinks");
  navLinks.classList.toggle("show");
}

// Close Mobile Menu When Clicking Outside
document.addEventListener("click", (event) => {
  const navLinks = document.getElementById("navLinks");
  const mobileToggle = document.querySelector(".mobile-toggle");
  
  if (navLinks && mobileToggle) {
    if (!navLinks.contains(event.target) && !mobileToggle.contains(event.target)) {
      navLinks.classList.remove("show");
    }
  }
});

// Smooth Scroll for Anchor Links (Optional)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});