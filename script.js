/* ─────────────────────────────────────────
   MOBILE NAV — toggle open / close
───────────────────────────────────────── */
const navLinks   = document.getElementById('navLinks');
const hamburger  = document.getElementById('hamburger');
const backdrop   = document.getElementById('navBackdrop');

function openNav() {
  navLinks.classList.add('open');
  hamburger.classList.add('open');
  backdrop.classList.add('visible');
  document.body.style.overflow = 'hidden';
}

function closeNav() {
  navLinks.classList.remove('open');
  hamburger.classList.remove('open');
  backdrop.classList.remove('visible');
  document.body.style.overflow = 'auto';
}

function toggleNav() {
  if (navLinks.classList.contains('open')) {
    closeNav();
  } else {
    openNav();
  }
}

/* ─────────────────────────────────────────
   EVENT LISTENERS
───────────────────────────────────────── */
hamburger.addEventListener('click', toggleNav);
backdrop.addEventListener('click', closeNav);

document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', closeNav);
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeNav();
});

/* ─────────────────────────────────────────
   FIX: reset menu on resize
───────────────────────────────────────── */
window.addEventListener('resize', () => {
  if (window.innerWidth > 768) {
    closeNav();
  }
});

/* ─────────────────────────────────────────
   FIX: ensure clean state on load
───────────────────────────────────────── */
window.addEventListener('load', closeNav);

/* ─────────────────────────────────────────
   SCROLL REVEAL
───────────────────────────────────────── */
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

/* ─────────────────────────────────────────
   STAGGERED GRID CHILDREN
───────────────────────────────────────── */
const staggerSelectors = [
  '.skills-grid   .skill-category',
  '.projects-grid .project-card',
  '.edu-grid      .edu-card',
];

staggerSelectors.forEach((selector) => {
  document.querySelectorAll(selector).forEach((el, i) => {
    el.style.transitionDelay = (i * 0.08) + 's';
  });
});

/* ─────────────────────────────────────────
   ACTIVE NAV LINK HIGHLIGHT
───────────────────────────────────────── */
const sections = document.querySelectorAll('section[id]');

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        document.querySelectorAll('.nav-links a').forEach((a) => {
          a.style.color = '';
        });

        const active = document.querySelector(
          `.nav-links a[href="#${entry.target.id}"]`
        );

        if (active) active.style.color = 'var(--accent)';
      }
    });
  },
  { threshold: 0.4 }
);

sections.forEach((s) => sectionObserver.observe(s));
