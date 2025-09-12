/* Mobile Menu Toggle */

// Menu Mobile Toggle
const menuToggle = document.getElementById("menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");

menuToggle.addEventListener("click", () => {
  mobileMenu.classList.toggle("active");
});

/* Scroll suave */

document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function(e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

/* Fechar menu móvel ao clicar em um link */

document.querySelectorAll('.mobile-menu a').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
    });
});

/* Validação do formulário de newsletter */

const newsletterForm = document.querySelector('.newsletter form');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
        const emailInput = this.querySelector('input[type="email"]');
        if (!emailInput.value.includes('@')) {
            e.preventDefault();
            alert('Por favor, insira um e-mail válido.');
        }
    });
}


/* Dark Mode Toggle */

const darkToggle = document.getElementById('darkmode-toggle');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
const savedTheme = localStorage.getItem('theme');

function setDarkMode(on) {
    document.body.classList.toggle('dark-mode', on);
    if (darkToggle) {
        darkToggle.innerHTML = on
            ? '<i class="fas fa-sun"></i>'
            : '<i class="fas fa-moon"></i>';
    }
    localStorage.setItem('theme', on ? 'dark' : 'light');
}

// Inicialização
if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
    setDarkMode(true);
} else {
    setDarkMode(false);
}

if (darkToggle) {
    darkToggle.addEventListener('click', () => {
        setDarkMode(!document.body.classList.contains('dark-mode'));
    });
}