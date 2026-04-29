/* ── MOBILE NAV ── */
const navLinks  = document.getElementById('navLinks');
const hamburger = document.getElementById('hamburger');
const backdrop  = document.getElementById('navBackdrop');

function openNav() {
  const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;

  navLinks.classList.add('open');
  hamburger.classList.add('open');
  backdrop.classList.add('visible');

  document.body.style.overflow = 'hidden';
  document.body.style.paddingRight = scrollBarWidth + 'px';
}

function closeNav() {
  navLinks.classList.remove('open');
  hamburger.classList.remove('open');
  backdrop.classList.remove('visible');

  document.body.style.overflow = '';
  document.body.style.paddingRight = '';
}

function toggleNav() {
  navLinks.classList.contains('open') ? closeNav() : openNav();
}

hamburger.addEventListener('click', toggleNav);
backdrop.addEventListener('click', closeNav);

document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', closeNav);
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeNav();
});

window.addEventListener('resize', () => {
  if (window.innerWidth > 768) closeNav();
});

window.addEventListener('load', closeNav);

/* ── THEME TOGGLE ── */
const themeToggle = document.getElementById('themeToggle');
const html = document.documentElement;

const savedTheme = localStorage.getItem('theme') || 'dark';
html.setAttribute('data-theme', savedTheme);

themeToggle.addEventListener('click', () => {
  const next = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  html.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
});

/* ── SCROLL REVEAL ── */
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
);

document.querySelectorAll('.reveal').forEach((el) => revealObserver.observe(el));

/* ── STAGGERED GRID ── */
['.skills-grid .skill-category', '.projects-grid .project-card', '.edu-grid .edu-card']
  .forEach(sel => {
    document.querySelectorAll(sel).forEach((el, i) => {
      el.style.transitionDelay = (i * 0.08) + 's';
    });
  });

/* ── ACTIVE NAV HIGHLIGHT ── */
const sections = document.querySelectorAll('section[id]');

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));
        const active = document.querySelector(`.nav-links a[href="#${entry.target.id}"]`);
        if (active) active.classList.add('active');
      }
    });
  },
  { threshold: 0.35, rootMargin: '-60px 0px 0px 0px' }
);

sections.forEach(s => sectionObserver.observe(s));

