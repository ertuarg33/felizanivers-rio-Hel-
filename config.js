/**
 * CONFIGURAÇÕES DO SITE DE ANIVERSÁRIO
 * 
 * Edite este arquivo para personalizar facilmente:
 * - Textos e frases
 * - URLs das fotos
 * - Cores
 * - Efeitos
 */

const SITE_CONFIG = {
    // ====================================
    // TEXTOS PRINCIPAIS
    // ====================================
    texts: {
        welcomeTitle: "Quer uma surpresa?",
        welcomeSubtitle: "Clique aqui",
        welcomeButton: "Clique",

        heroTitle: "Uma história especial",
        heroSubtitle: "Que merecia ser contada de um jeito bonito",

        // Frases emocionais (aparecem com as fotos)
        declarations: [
            "Você entrou na minha vida de uma forma inesperada.",
            "E desde então, tudo ficou mais leve.",
            "Seu sorriso consegue mudar completamente o meu dia.",
            "Algumas pessoas simplesmente deixam o mundo mais bonito.",
            "Obrigado por existir."
        ],

        birthdayTitle: "Feliz Aniversário ❤️",

        // Mensagem de aniversário (pode ter múltiplos parágrafos)
        birthdayMessage: [
            "Hoje é um dia especial. Não apenas porque você nasceu, mas porque desde então o mundo ficou um lugar melhor, mais colorido, mais vivo.",

            "Você tem essa capacidade única de fazer as pessoas ao seu redor se sentirem importantes, valorizadas e amadas. Seu riso é contagiante, sua presença é aconchegante, e sua essência é simplesmente única.",

            "Todos os momentos que compartilhamos são memórias que carregarei para sempre no coração. Você ensinou que beleza não está apenas no que vemos, mas principalmente no que sentimos.",

            "Que neste seu dia especial, você se sinta tão especial quanto realmente é. Que seus sonhos se transformem em realidade, que suas risadas sejam infinitas e que a vida te presenteie com tudo o que você merece e muito mais.",

            "Obrigado por ser você. Obrigado por existir."
        ],

        signature: "Com carinho, Arthur."
    },

    // ====================================
    // URLS DAS FOTOS
    // ====================================
    photos: {
        // Foto 1 - esquerda
        photo1: "https://via.placeholder.com/500x600?text=Foto+1",

        // Foto 2 - direita
        photo2: "https://via.placeholder.com/500x600?text=Foto+2",

        // Foto 3 - esquerda
        photo3: "https://via.placeholder.com/500x600?text=Foto+3",

        // Foto 4 - direita
        photo4: "https://via.placeholder.com/500x600?text=Foto+4",

        // Foto 5 - esquerda
        photo5: "https://via.placeholder.com/500x600?text=Foto+5",

        // Foto principal (final)
        mainPhoto: "https://via.placeholder.com/600x700?text=Foto+Principal"
    },

    // ====================================
    // CORES E TEMA
    // ====================================
    colors: {
        primaryDark: "#0a0e1a",
        secondaryDark: "#0f1419",
        accentGreen: "#00aa33",
        accentGreenSoft: "rgba(0, 170, 51, 0.3)",
        accentGreenNeon: "rgba(0, 170, 51, 0.6)",
        textPrimary: "#e8e8e8",
        textSecondary: "#b0b0b0"
    },

    // ====================================
    // ANIMAÇÕES E EFEITOS
    // ====================================
    animations: {
        // Ativar/desativar parallax
        enableParallax: false,

        // Velocidade das animações (em ms)
        transitionDuration: 600,

        // Quantidade de partículas
        particleCount: {
            desktop: 50,
            mobile: 30
        },

        // Ativar glassmorphism
        enableGlassmorphism: true
    },

    // ====================================
    // MÚSICA
    // ====================================
    music: {
        // Caminho do arquivo de música
        url: "audio/background-music.mp3",

        // Volume (0-1)
        volume: 0.5,

        // Auto-play após clique (true/false)
        autoPlay: true,

        // Loop contínuo
        loop: true
    },

    // ====================================
    // CONFIGURAÇÕES DE RESPONSIVIDADE
    // ====================================
    responsive: {
        mobileBreakpoint: 768,
        tabletBreakpoint: 1024,
        desktopBreakpoint: 1200
    },

    // ====================================
    // REDES SOCIAIS (para futuras implementações)
    // ====================================
    social: {
        instagram: "https://instagram.com",
        facebook: "https://facebook.com",
        twitter: "https://twitter.com",
        whatsapp: "https://wa.me/5511999999999"
    }
};

// Exportar para uso em outros arquivos
if (typeof module !== 'undefined' && module.exports) {
    module.exports = SITE_CONFIG;
}
