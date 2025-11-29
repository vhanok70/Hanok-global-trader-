// dynamic year
document.getElementById('year').textContent = new Date().getFullYear();

// very simple mailto form handler
function sendEmail(e){
  e.preventDefault();
  const form = e.target;
  const name = encodeURIComponent(form.name.value.trim());
  const email = encodeURIComponent(form.email.value.trim());
  const msg = encodeURIComponent(form.message.value.trim());

  const subject = `New Inquiry from ${decodeURIComponent(name)}`;
  const body = `Name: ${decodeURIComponent(name)}%0AEmail: ${decodeURIComponent(email)}%0A%0A${msg}`;

  window.location.href = `mailto:info@hanokglobal.com?subject=${encodeURIComponent(subject)}&body=${body}`;
  form.reset();
  return false;
}
