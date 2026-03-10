const BACKEND_URL = 'http://localhost:5000';

// ── MOBILE MENU ──
function toggleMenu() {
  document.getElementById('mobileMenu').classList.toggle('open');
}

// ── NAV SHRINK ON SCROLL ──
window.addEventListener('scroll', () => {
  document.querySelector('nav').style.padding =
    window.scrollY > 60 ? '12px 5%' : '18px 5%';
});

// ── FADE IN ON SCROLL ──
const fadeEls = document.querySelectorAll('.fade-in');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((e, i) => {
    if (e.isIntersecting) {
      setTimeout(() => e.target.classList.add('visible'), i * 80);
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.1 });
fadeEls.forEach(el => observer.observe(el));

// ── INTEREST FORM ──
document.getElementById('interestForm').addEventListener('submit', async (e) => {
  e.preventDefault();

  const btn = document.getElementById('submitBtn');
  const success = document.getElementById('formSuccess');
  const error = document.getElementById('formError');

  // Reset messages
  success.style.display = 'none';
  error.style.display = 'none';
  btn.textContent = 'Sending...';
  btn.style.opacity = '0.7';

  const data = {
    fullName: document.getElementById('fullName').value,
    email: document.getElementById('email').value,
    majorYear: document.getElementById('majorYear').value
  };

  try {
    const res = await fetch(`${BACKEND_URL}/api/interest`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });

    if (res.ok) {
      success.style.display = 'block';
      document.getElementById('interestForm').reset();
      btn.textContent = 'Submitted!';
    } else {
      throw new Error('Submission failed');
    }
  } catch (err) {
    error.style.display = 'block';
    btn.textContent = 'Submit Interest';
    btn.style.opacity = '1';
  }
});