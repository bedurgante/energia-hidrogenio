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
        top: target.offsetTop - 150,
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
function enviarFeedback() {
  const input = document.getElementById("feedback");
  const btn = document.getElementById("btnEnviar");
  const confirmacao = document.getElementById("confirmacao");
  const texto = input.value.trim();

  if (texto === "") return;

  btn.disabled = true;
  btn.textContent = "Enviando...";

  setTimeout(() => {
    confirmacao.classList.remove("hidden");
    confirmacao.classList.add("show");

    btn.textContent = "Enviar";
    btn.disabled = false;
    input.value = "";

    setTimeout(() => {
      confirmacao.classList.remove("show");
      confirmacao.classList.add("hidden");
    }, 3000);
  }, 1500);
}
// Ocultar Hero com remoção completa após animação
const btnSaibaMais = document.getElementById('btnSaibaMais');
const hero = document.getElementById('hero');

btnSaibaMais.addEventListener('click', function (e) {
  e.preventDefault();

  // Adiciona classe que anima saindo da tela
  hero.classList.add('saindo');

  // Espera o tempo da animação para depois remover da tela
  setTimeout(() => {
    hero.classList.add('escondido');
    document.getElementById('sobre').scrollIntoView({
      behavior: 'smooth'
    });
  }, 1000); // Tempo da animação (1 segundo)
});