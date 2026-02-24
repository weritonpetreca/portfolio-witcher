// Inicialização AOS
AOS.init({
    duration: 800,
    once: true,
});

// Função de copiar email
function copiarEmail() {
    const email = "eulcfr@gmail.com";
    navigator.clipboard.writeText(email).then(() => {
        const msg = document.getElementById("copy-msg");
        const originalText = msg.innerText;

        msg.innerText = "Copiado!";
        msg.classList.add("copied");

        setTimeout(() => {
            msg.innerText = originalText;
            msg.classList.remove("copied");
        }, 2000);
    }).catch(err => {
        console.error('Erro ao copiar:', err);
    });
}

// Atualizar ano do copyright
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById("copyright-year").textContent = new Date().getFullYear();
    
    // Adicionar event listener ao card de email
    const emailCard = document.querySelector('.copy-email');
    if (emailCard) {
        emailCard.addEventListener('click', copiarEmail);
        emailCard.addEventListener('keypress', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                copiarEmail();
            }
        });
    }
});

// Easter egg no console
console.log("%c🐺 Wind's howling...", "color: #c8a365; font-size: 20px; font-weight: bold; font-family: sans-serif;");
console.log("%cParece que você está inspecionando meus feitiços. Se achou algum bug, é uma feature não documentada! 😉", "color: #e0e0e0; font-size: 14px;");
console.log("%cInteressado no código? Veja em: https://github.com/weritonpetreca", "font-size: 14px;");
