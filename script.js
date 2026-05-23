/* Scroll shadow */
window.addEventListener("scroll", () => {
  document
    .getElementById("navbar")
    .classList.toggle("scrolled", window.scrollY > 20);
});

/* Hamburger toggle */
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  hamburger.setAttribute("aria-expanded", isOpen);
  /* Animate bars into X */
  const bars = hamburger.querySelectorAll("span");
  if (isOpen) {
    bars[0].style.transform = "translateY(7px) rotate(45deg)";
    bars[1].style.opacity = "0";
    bars[2].style.transform = "translateY(-7px) rotate(-45deg)";
  } else {
    bars[0].style.transform = "";
    bars[1].style.opacity = "";
    bars[2].style.transform = "";
  }
});

/* Close menu when a nav link is clicked */
navLinks.querySelectorAll("a").forEach((a) => {
  a.addEventListener("click", () => {
    navLinks.classList.remove("open");
    hamburger.setAttribute("aria-expanded", "false");
    hamburger.querySelectorAll("span").forEach((b) => {
      b.style.transform = "";
      b.style.opacity = "";
    });
  });
});

/* Menu filter — event delegation on the tabs container */
document.querySelector(".menu-tabs").addEventListener("click", (e) => {
  const btn = e.target.closest(".tab-btn");
  if (!btn) return;
  const cat = btn.dataset.filter;

  document
    .querySelectorAll(".tab-btn")
    .forEach((b) => b.classList.remove("active"));
  btn.classList.add("active");

  document.querySelectorAll(".menu-card").forEach((card) => {
    /* Reset to '' so the card inherits grid display from CSS, not forced 'block' */
    card.style.display =
      cat === "all" || card.dataset.cat === cat ? "" : "none";
  });
});

/* Contact form submit */
document.querySelector(".contact-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const btn = e.target.querySelector('button[type="submit"]');
  btn.textContent = "✓ Request Sent!";
  btn.style.background = "#2a7a4b";
  setTimeout(() => {
    btn.textContent = "Reserve My Table →";
    btn.style.background = "";
    e.target.reset();
  }, 3000);
});
