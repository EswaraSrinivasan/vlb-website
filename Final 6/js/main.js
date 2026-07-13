// Enable scroll-reveal styling only now that JS is confirmed running
document.body.classList.add('js-ready');

// Year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Nav scroll state
const nav = document.getElementById('siteNav');
const toTop = document.getElementById('toTop');
function onScroll(){
  const scrolled = window.scrollY > 40;
  nav.classList.toggle('is-scrolled', scrolled);
  toTop.classList.toggle('show', window.scrollY > 600);
}
window.addEventListener('scroll', onScroll, {passive:true});
onScroll();

// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
navToggle.addEventListener('click', () => {
  const open = navLinks.classList.toggle('is-open');
  navToggle.setAttribute('aria-expanded', open);
  navToggle.textContent = open ? '✕' : '☰';
});
navLinks.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    navLinks.classList.remove('is-open');
    navToggle.setAttribute('aria-expanded', false);
    navToggle.textContent = '☰';
  });
});

// Reveal on scroll
const revealEls = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window){
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting){
        entry.target.classList.add('in');
        io.unobserve(entry.target);
      }
    });
  }, {threshold:0.12});
  revealEls.forEach(el => io.observe(el));
} else {
  revealEls.forEach(el => el.classList.add('in'));
}
