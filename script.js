// Animação ao rolar a página
const elements = document.querySelectorAll('.fade-in');

function aparecerScroll() {
  elements.forEach(el => {
    const top = el.getBoundingClientRect().top;
    const trigger = window.innerHeight * 0.85;
    if (top < trigger) {
      el.classList.add('aparecer');
    }
  });
}

window.addEventListener('scroll', aparecerScroll);
window.addEventListener('load', aparecerScroll);

// Scroll suave para links internos
const links = document.querySelectorAll('a[href^="#"]');

links.forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  });
});

// Distribui as seções com base na tela se forem containers
window.addEventListener('load', () => {
  document.querySelectorAll('section .container').forEach(section => {
    section.style.display = 'grid';
    section.style.gridTemplateColumns = '1fr 1fr';
    section.style.alignItems = 'center';
    section.style.gap = '40px';
  });
});
