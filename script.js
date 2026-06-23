const header = document.querySelector(".site-header");
const navToggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".site-nav");
const year = document.querySelector("#year");

function updateHeader() {
  if (window.scrollY > 30) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
}

window.addEventListener("scroll", updateHeader);
updateHeader();

navToggle.addEventListener("click", () => {
  nav.classList.toggle("open");
});

document.querySelectorAll(".site-nav a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
  });
});

year.textContent = new Date().getFullYear();
