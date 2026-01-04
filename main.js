/* =====================================================
   SMOOTH SCROLL FOR NAVIGATION
===================================================== */

document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", e => {
    const targetId = link.getAttribute("href");
    const targetEl = document.querySelector(targetId);

    if (targetEl) {
      e.preventDefault();
      targetEl.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  });
});

/* =====================================================
   ACTIVE NAV LINK HIGHLIGHT
===================================================== */

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav a");

window.addEventListener("scroll", () => {
  let currentSection = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 140;
    if (window.scrollY >= sectionTop) {
      currentSection = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${currentSection}`) {
      link.classList.add("active");
    }
  });
});

/* =====================================================
   SCROLL TO TOP BUTTON (AUTO-CREATED)
===================================================== */

const scrollBtn = document.createElement("button");
scrollBtn.textContent = "↑";
scrollBtn.setAttribute("aria-label", "Scroll to top");

scrollBtn.style.position = "fixed";
scrollBtn.style.bottom = "20px";
scrollBtn.style.right = "20px";
scrollBtn.style.padding = "10px 14px";
scrollBtn.style.borderRadius = "50%";
scrollBtn.style.border = "none";
scrollBtn.style.cursor = "pointer";
scrollBtn.style.background = "#38bdf8";
scrollBtn.style.color = "#020617";
scrollBtn.style.fontSize = "16px";
scrollBtn.style.display = "none";
scrollBtn.style.zIndex = "999";

document.body.appendChild(scrollBtn);

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
});

scrollBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
