// Dynamic year
document.getElementById('year').textContent = new Date().getFullYear();

// Theme (dark/light) with persistence
const THEME_STORAGE_KEY = 'theme';
const themeToggleButton = document.querySelector('.theme-toggle');

function getPreferredTheme() {
  const stored = localStorage.getItem(THEME_STORAGE_KEY);
  if (stored === 'light' || stored === 'dark') return stored;
  return window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches
    ? 'light'
    : 'dark';
}

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  if (themeToggleButton) {
    const nextTheme = theme === 'light' ? 'dark' : 'light';
    const isLight = theme === 'light';
    themeToggleButton.setAttribute('aria-pressed', String(isLight));
    themeToggleButton.setAttribute('aria-label', `Switch to ${nextTheme} theme`);
    themeToggleButton.setAttribute('title', `Switch to ${nextTheme} theme`);
  }
}

applyTheme(getPreferredTheme());

if (themeToggleButton) {
  themeToggleButton.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme') === 'light'
      ? 'light'
      : 'dark';
    const next = current === 'light' ? 'dark' : 'light';
    localStorage.setItem(THEME_STORAGE_KEY, next);
    applyTheme(next);
  });
}

// Navbar scroll effect
window.addEventListener('scroll', () => {
  const nav = document.querySelector('nav');
  if (window.scrollY > 50) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
});

// Mobile menu toggle
function toggleMenu() {
  document.querySelector('.nav-links').classList.toggle('active');
}

// Close menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    document.querySelector('.nav-links').classList.remove('active');
  });
});

// Scroll animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, observerOptions);

document.querySelectorAll('.fade-in').forEach(el => {
  observer.observe(el);
});