document.getElementById('year').textContent = new Date().getFullYear();

const form = document.getElementById('contact-form');
const feedback = document.getElementById('form-feedback');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const message = form.message.value.trim();

  if (!name || !email || !message) {
    feedback.textContent = 'Please complete all fields before sending.';
    feedback.className = 'form-feedback error';
    return;
  }

  form.querySelector('button[type="submit"]').disabled = true;
  feedback.textContent = 'Sending your message…';
  feedback.className = 'form-feedback';

  setTimeout(() => {
    feedback.textContent = `Thanks, ${name}! Your message is ready for review. We’ll contact you soon.`;
    feedback.className = 'form-feedback success';
    form.reset();
    form.querySelector('button[type="submit"]').disabled = false;
  }, 900);
});
