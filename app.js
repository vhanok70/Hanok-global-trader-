// mobile menu toggle
const menuBtn = document.getElementById('menuBtn');
const nav = document.getElementById('nav');
if (menuBtn) {
  menuBtn.addEventListener('click', () => {
    const open = nav.style.display === 'flex';
    nav.style.display = open ? 'none' : 'flex';
  });
}

// year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// fake contact submit (no backend needed)
function submitForm(e){
  e.preventDefault();
  const msg = document.getElementById('formMsg');
  msg.textContent = "Thanks! We'll get back to you within 24 hours.";
  e.target.reset();
  return false;
}
