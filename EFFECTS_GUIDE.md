# ✨ GUIA DE EFEITOS E ANIMAÇÕES

Este arquivo documenta todos os efeitos e animações disponíveis no site e como personalizá-los.

## 🎬 ANIMAÇÕES PRINCIPAIS

### 1. Animação de Entrada (Fade In)
**Arquivo**: `styles.css`
**Classe**: `.fade-in-left`, `.fade-in-right`

```css
animation: slideInLeft 0.8s ease-out forwards;
animation: slideInRight 0.8s ease-out forwards;
```

**Como customizar a velocidade**:
- Mude `0.8s` para mais rápido (0.4s) ou mais lento (1.2s)

### 2. Efeito Neon Glow
**Arquivo**: `styles.css`
**Seletor**: `.photo`

```css
box-shadow: 
    0 0 40px var(--accent-green-soft),
    0 0 60px var(--accent-green-neon);
```

**Como customizar**:
- Aumente o valor do `px` para um brilho maior (60px → 80px)
- Mude a cor alterando `--accent-green` em `:root`

### 3. Efeito Glassmorphism
**Arquivo**: `styles.css`
**Classe**: `.photo-frame`, `.birthday-letter`

```css
background: rgba(255, 255, 255, 0.02);
backdrop-filter: blur(10px);
border: 1px solid rgba(0, 217, 163, 0.1);
```

**Como intensificar**:
- Aumente `blur(10px)` para `blur(20px)` para mais desfoque

### 4. Partículas Flutuantes
**Arquivo**: `script.js`
**Função**: `createParticles()`

```javascript
const particleCount = 50; // Desktop
const particleCount = 30; // Mobile
```

**Como customizar**:
- Aumente o número para mais partículas (50 → 100)
- Reduza para menos (50 → 20)

---

## 🔄 EFEITOS DE SCROLL

### Scroll Reveal (Revelar ao Rolar)
**Arquivo**: `script.js`
**Classe**: `TextReveal`

Elementos aparecem conforme você rola a página.

**Como desativar**:
Comentar a linha em `script.js`:
```javascript
// const textReveal = new TextReveal();
```

### Parallax Suave
**Arquivo**: `script.js`
**Classe**: `SmoothParallax`

Fotos se movem ligeiramente com o mouse.

**Como ativar**:
1. Abra `script.js`
2. Procure por `// const parallax = new SmoothParallax();`
3. Remova os `//`

**Como customizar velocidade**:
Em `script.js`, procure por:
```javascript
photo.style.transform = `perspective(1000px) rotateX(${y * 0.1}deg)...`;
// Mude 0.1 para 0.2 (mais intenso) ou 0.05 (mais sutil)
```

---

## 🎨 EFEITOS DE COR

### Tema Verde Neon
**Cor Principal**: `#00d9a3`

**Alternativas Recomendadas**:
- Rosa: `#ec4899`
- Roxo: `#a855f7`
- Azul: `0ea5e9`
- Ouro: `#fbbf24`
- Rosa Choque: `#ff1493`

**Como mudar**:
1. Abra `styles.css`
2. Procure por `:root {`
3. Mude `--accent-green: #00d9a3;` para sua cor

---

## ⏱️ TEMPOS DE TRANSIÇÃO

### Transição da Tela Inicial
**Arquivo**: `styles.css`
```css
transition: opacity 0.8s ease-out;
```
- `0.8s` = duração
- `ease-out` = estilo da animação

**Estilos disponíveis**:
- `ease-in-out` = suave em ambos os lados
- `linear` = velocidade constante
- `ease` = padrão
- `cubic-bezier(0.4, 0, 0.2, 1)` = customizado

### Transição de Elementos
**Arquivo**: `styles.css`
```css
animation: fadeInUp 0.8s ease-out forwards;
```

**Como aumentar duração**:
- Mude `0.8s` para `1.2s` (mais lento)
- Mude para `0.4s` (mais rápido)

---

## 🎵 EFEITOS DE MÚSICA

### Auto-play da Música
**Arquivo**: `script.js`
**Função**: `handleWelcomeClick()`

A música toca após clicar no botão.

**Como desativar**:
```javascript
// Comente esta linha:
// this.playMusic();
```

### Volume da Música
**Arquivo**: `script.js`
```javascript
this.bgMusic.volume = 0.5; // 50% do volume
```

**Como mudar**:
- `0.3` = 30% (bem baixo)
- `0.5` = 50% (médio)
- `0.8` = 80% (alto)
- `1` = 100% (máximo)

---

## 🌟 CRIANDO NOVOS EFEITOS

### Adicionar Hover Customizado
No `styles.css`, adicione:
```css
.photo:hover {
    transform: scale(1.05) rotate(1deg);
    filter: brightness(1.1) saturate(1.2);
}
```

### Animação de Entrada Customizada
No `styles.css`, crie:
```css
@keyframes meuEfeito {
    0% {
        transform: translateX(-100px) rotateY(90deg);
        opacity: 0;
    }
    100% {
        transform: translateX(0) rotateY(0);
        opacity: 1;
    }
}
```

Depois use em um elemento:
```css
.photo {
    animation: meuEfeito 1s ease-out forwards;
}
```

---

## 📱 EFEITOS RESPONSIVOS

### Para Celular
**Arquivo**: `styles.css`
```css
@media (max-width: 768px) {
    /* Aqui você pode desativar alguns efeitos */
    .particle {
        display: none; /* Desativa partículas */
    }
}
```

### Desativar Parallax em Celular
Em `script.js`:
```javascript
if (window.innerWidth > 768) {
    const parallax = new SmoothParallax();
}
```

---

## ⚡ OTIMIZAÇÕES DE PERFORMANCE

### Reduzir Movimento
O site respeita `prefers-reduced-motion`:
```css
@media (prefers-reduced-motion: reduce) {
    * {
        animation-duration: 0.01ms !important;
    }
}
```

Usuários com essa preferência verão menos animações automaticamente.

### Melhorar Performance em Celular
1. **Reduzir partículas**: Em `script.js`, mude `particleCount` de 50 para 20
2. **Desativar parallax**: Comente `const parallax = new SmoothParallax();`
3. **Reduzir duração de animações**: Mude `0.8s` para `0.4s`

---

## 🎯 EFEITOS RECOMENDADOS POR ESTILO

### Minimalista (menos é mais)
- [ ] Desativar partículas
- [ ] Desativar parallax
- [ ] Manter animações simples (0.6s)
- [ ] Glassmorphism leve

### Cinematográfico (bem elaborado)
- [ ] Manter partículas
- [ ] Ativar parallax
- [ ] Mais duração em animações (1s+)
- [ ] Glassmorphism médio
- [ ] Neon glow mais intenso

### Energético (bem dinâmico)
- [ ] Muitas partículas
- [ ] Animações rápidas (0.4s)
- [ ] Parallax ativado
- [ ] Cores mais vibrantes
- [ ] Mais transformações (rotações, scales)

---

## 🔧 VARIÁVEIS CSS GLOBAIS

**Arquivo**: `styles.css` (linhas 1-16)

```css
:root {
    --primary-dark: #0a0e1a;          /* Fundo escuro */
    --secondary-dark: #0f1419;        /* Fundo secundário */
    --accent-green: #00d9a3;          /* Cor principal */
    --accent-green-soft: rgba(...);   /* Cor suave */
    --accent-green-neon: rgba(...);   /* Cor neon intenso */
    --text-primary: #e8e8e8;          /* Texto principal */
    --text-secondary: #b0b0b0;        /* Texto secundário */
    --transition-smooth: cubic-bezier(0.4, 0, 0.2, 1);
    --transition-time: 0.6s;
}
```

**Como usar**:
```css
/* Em qualquer lugar do CSS */
color: var(--text-primary);
background: var(--primary-dark);
box-shadow: 0 0 20px var(--accent-green);
```

---

## 📊 COMPARAÇÃO DE EFEITOS

| Efeito | CPU | RAM | Aparência | Recomendação |
|--------|-----|-----|-----------|--------------|
| Partículas | Alta | Média | Bonita | Ativar em desktop |
| Parallax | Média | Baixa | Elegante | Ativar em desktop |
| Glassmorphism | Baixa | Baixa | Luxuosa | Sempre ativar |
| Neon Glow | Baixa | Baixa | Cinematográfico | Sempre ativar |
| Scroll Reveal | Baixa | Baixa | Dinâmico | Sempre ativar |

---

## ✅ CHECKLIST DE CUSTOMIZAÇÃO

- [ ] Testou em desktop
- [ ] Testou em celular
- [ ] Verificou performance
- [ ] Ajustou cores conforme marca
- [ ] Testou em diferentes navegadores
- [ ] Verificou som no celular
- [ ] Testou com prefers-reduced-motion
- [ ] Pronto para produção!

---

**Dúvidas? Abra o `README.md` para mais informações.**

💚✨
