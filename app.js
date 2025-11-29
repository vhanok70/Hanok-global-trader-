// Mobile menu toggle
const btn = document.getElementById('menuBtn');
const menu = document.getElementById('menu');
if (btn && menu) {
  btn.addEventListener('click', () => menu.classList.toggle('show'));
}

// Footer year
const y = document.getElementById('year');
if (y) y.textContent = new Date().getFullYear();
