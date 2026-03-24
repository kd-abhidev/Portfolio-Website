// ===== SMOOTH SCROLL FOR NAV LINKS =====
document.querySelectorAll('.nav-links a[href^="#"]').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  });
});


//===== Trying new items =====
var typed = new Typed("#typing", {
  strings: [
    "DevOps Engineer",
    "Cloud Engineer"
  ],
  typeSpeed: 60,
  backSpeed: 40,
  backDelay: 1500,
  loop: true
});
 
// ===== SMOOTH SCROLL FOR "VIEW PROJECTS" BUTTON =====
const viewProjectsBtn = document.getElementById('viewProjectsBtn');
if (viewProjectsBtn) {
  viewProjectsBtn.addEventListener('click', () => {
    document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
  });
}
 
// ===== ACTIVE NAV LINK ON SCROLL =====
const sections = document.querySelectorAll('[id]');
const navLinks = document.querySelectorAll('.nav-links a');
 
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + entry.target.id) {
          link.classList.add('active');
        }
      });
    }
  });
}, { rootMargin: '0px 0px -60% 0px', threshold: 0 }); 
sections.forEach(section => observer.observe(section));
 
// ===== CV DOWNLOAD FEEDBACK =====
const cvBtn = document.getElementById('downloadCV');
if (cvBtn) {
  cvBtn.addEventListener('click', function () {
    const original = this.innerHTML;
    this.innerHTML = `
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:16px;height:16px">
        <polyline points="20 6 9 17 4 12"/>
      </svg>
      Downloading...
    `;
    setTimeout(() => { this.innerHTML = original; }, 2500);
  });
}