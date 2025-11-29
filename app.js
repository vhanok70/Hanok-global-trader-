// Mobile menu toggle
const btn = document.getElementById('menuToggle');
const links = document.getElementById('navLinks');
if (btn && links) {
  btn.addEventListener('click', () => links.classList.toggle('show'));
}

// Year in footer
const y = document.getElementById('y');
if (y) y.textContent = new Date().getFullYear();
