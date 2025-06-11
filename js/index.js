// form validation
function closeModal() {
  document.getElementById("successModal").style.display = "none";
}

document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const nama = document.getElementById("nama").value.trim();
  const email = document.getElementById("email").value.trim();
  const pesan = document.getElementById("pesan").value.trim();
  const errorMsg = document.getElementById("errorMsg");

  if (nama === "" || email === "" || pesan === "") {
    errorMsg.textContent = "Semua kolom harus diisi.";
    return;
  }

  if (!email.includes("@") || !email.includes(".")) {
    errorMsg.textContent = "Format email tidak valid.";
    return;
  }

  errorMsg.textContent = "";
  document.getElementById("successModal").style.display = "flex";
});


// Scroll animation
const fadeEls = document.querySelectorAll('.fade-in');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, {
  threshold: 0.1
});

fadeEls.forEach(el => observer.observe(el));


// Back to top button
const backToTopBtn = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }
});

backToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});


// Hamburger menu toggle
const hamburgerBtn = document.getElementById('hamburgerBtn');
  const navMenu = document.querySelector('.nav-menu');

  hamburgerBtn.addEventListener('click', () => {
    navMenu.classList.toggle('show');
  });