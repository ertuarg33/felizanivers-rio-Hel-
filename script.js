/* ====================================
   CONFIGURAÇÃO INICIAL
   ==================================== */

class BirthdayWebsite {
    constructor() {
        this.welcomeScreen = document.getElementById('welcomeScreen');
        this.mainContent = document.getElementById('mainContent');
        this.btnWelcome = document.getElementById('btnWelcome');
        this.transitionOverlay = document.getElementById('transitionOverlay');
        this.particlesContainer = document.getElementById('particlesContainer');
        this.bgMusic = document.getElementById('bgMusic');
        this.btnMusic = document.getElementById('btnMusic');
        this.musicEnabled = false;

        this.init();
    }

    init() {
        this.createParticles();
        this.setupEventListeners();
        this.setupScrollAnimations();
    }

    /* ====================================
       PARTÍCULAS DE FUNDO
       ==================================== */
    createParticles() {
        const particleCount = window.innerWidth > 768 ? 50 : 30;

        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.left = Math.random() * 100 + '%';
            particle.style.top = Math.random() * 100 + '%';
            // Define delays e durações separadas para as duas animações (floatFirefly, blinkFirefly)
            const floatDuration = 15 + Math.random() * 15; // 15s a 30s
            const blinkDuration = 2 + Math.random() * 4;   // 2s a 6s
            const floatDelay = Math.random() * 5;
            const blinkDelay = Math.random() * 5;
            
            particle.style.animationDuration = `${floatDuration}s, ${blinkDuration}s`;
            particle.style.animationDelay = `${floatDelay}s, ${blinkDelay}s`;
            this.particlesContainer.appendChild(particle);
        }
    }

    /* ====================================
       EVENT LISTENERS
       ==================================== */
    setupEventListeners() {
        this.btnWelcome.addEventListener('click', () => this.handleWelcomeClick());
        this.btnMusic.addEventListener('click', () => this.toggleMusic());
        window.addEventListener('resize', () => this.handleResize());
    }

    /* ====================================
       TRANSIÇÃO INICIAL
       ==================================== */
    handleWelcomeClick() {
        // Desabilita o botão para evitar múltiplos cliques
        this.btnWelcome.disabled = true;
        this.btnWelcome.style.pointerEvents = 'none';

        // Inicia a música
        this.playMusic();

        // Transição cinematográfica
        this.transitionOverlay.classList.add('active');

        setTimeout(() => {
            this.welcomeScreen.classList.add('hidden');
            this.mainContent.style.display = 'block';
            this.transitionOverlay.classList.remove('active');
        }, 600);

        // Scroll suave para o conteúdo
        setTimeout(() => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }, 800);
    }

    /* ====================================
       CONTROLE DE MÚSICA
       ==================================== */
    playMusic() {
        if (this.bgMusic && !this.musicEnabled) {
            this.bgMusic.play().catch(err => {
                console.log('Erro ao reproduzir áudio:', err);
            });
            this.musicEnabled = true;
            this.updateMusicButton();
        }
    }

    toggleMusic() {
        if (!this.bgMusic) return;

        if (this.musicEnabled) {
            this.bgMusic.pause();
            this.musicEnabled = false;
        } else {
            this.bgMusic.play().catch(err => {
                console.log('Erro ao reproduzir áudio:', err);
            });
            this.musicEnabled = true;
        }

        this.updateMusicButton();
    }

    updateMusicButton() {
        const btnMusic = document.getElementById('btnMusic');
        if (this.musicEnabled) {
            btnMusic.style.background = 'rgba(0, 217, 163, 0.2)';
            btnMusic.style.boxShadow = '0 0 15px rgba(0, 217, 163, 0.4)';
        } else {
            btnMusic.style.background = 'rgba(0, 217, 163, 0.1)';
            btnMusic.style.boxShadow = 'none';
        }
    }

    /* ====================================
       ANIMAÇÕES DE SCROLL
       ==================================== */
    setupScrollAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.animateElement(entry.target);
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        // Observa elementos principais
        document.querySelectorAll('.photo-section, .final-section').forEach(section => {
            observer.observe(section);
        });
    }

    animateElement(element) {
        element.classList.add('is-visible');
    }

    /* ====================================
       RESPONSIVIDADE
       ==================================== */
    handleResize() {
        // Reajusta partículas em resize (opcional)
        // Pode ser expandido conforme necessário
    }
}

/* ====================================
   EFEITO DE PARALLAX SUAVE (OPCIONAL)
   ==================================== */
class SmoothParallax {
    constructor() {
        this.photos = document.querySelectorAll('.photo');
        this.init();
    }

    init() {
        window.addEventListener('mousemove', (e) => this.handleMouseMove(e));
    }

    handleMouseMove(e) {
        const x = (e.clientX / window.innerWidth - 0.5) * 20;
        const y = (e.clientY / window.innerHeight - 0.5) * 20;

        this.photos.forEach(photo => {
            const rect = photo.getBoundingClientRect();

            // Apenas aplica o efeito se a foto está visível
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                photo.style.transform = `perspective(1000px) rotateX(${y * 0.1}deg) rotateY(${x * 0.1}deg)`;
            }
        });
    }
}

/* ====================================
   EFEITO DE TEXTO REVELADOR (REVEAL)
   ==================================== */
class TextReveal {
    constructor() {
        this.declarations = document.querySelectorAll('.text-declaration p');
        this.setupRevealAnimation();
    }

    setupRevealAnimation() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.revealText(entry.target);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        this.declarations.forEach(text => {
            observer.observe(text);
        });
    }

    revealText(element) {
        element.style.animation = 'fadeInUp 0.8s ease-out forwards';
    }
}

/* ====================================
   INICIALIZAÇÃO
   ==================================== */
document.addEventListener('DOMContentLoaded', () => {
    // Cria instância principal
    const website = new BirthdayWebsite();

    // Inicializa parallax suave (comentar se causar lag)
    // const parallax = new SmoothParallax();

    // Inicializa reveal de texto (removido para evitar conflitos)
    // const textReveal = new TextReveal();

    // Log inicial
    console.log('🎉 Site de aniversário carregado com sucesso!');
});

/* ====================================
   EFEITO DE SCROLL REVELADOR
   ==================================== */
window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const particles = document.querySelectorAll('.particle');

    // As partículas agora se movem sozinhas por CSS (vagalumes)

    // Efeito final cinematográfico
    if (scrollY > document.body.scrollHeight - window.innerHeight - 1000) {
        document.body.style.backgroundColor = 'rgba(0, 0, 0, 0.95)';
    } else {
        document.body.style.backgroundColor = '';
    }
});

/* ====================================
   PREVENÇÃO DE MEMORY LEAKS
   ==================================== */
window.addEventListener('unload', () => {
    const bgMusic = document.getElementById('bgMusic');
    if (bgMusic) {
        bgMusic.pause();
        bgMusic.src = '';
    }
});
