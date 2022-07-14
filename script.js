// JavaScript para interatividade
document.addEventListener('DOMContentLoaded', function() {
    console.log('Portfolio carregado!');
    
    // Smooth scroll para links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Animação simples nos cards
    const cards = document.querySelectorAll('.projeto-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.transition = 'transform 0.3s ease';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
});

Commit simulado em 2022-06-16 12:00:00

Commit simulado em 2022-07-06 12:00:00

Commit simulado em 2022-07-14 12:00:00
