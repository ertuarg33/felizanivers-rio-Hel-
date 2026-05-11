# 🎉 Site Emocional de Aniversário Cinematográfico

Um site lindo, elegante e emocional para celebrar um aniversário especial. Desenvolvido com HTML, CSS e JavaScript.

## 🎨 Características

- ✨ **Design Minimalista Elegante**: Preto + Verde Escuro com detalhes neon suaves
- 🎬 **Transições Cinematográficas**: Efeitos suaves e fluidos
- 📱 **Totalmente Responsivo**: Perfeito em qualquer dispositivo
- 🎵 **Música de Fundo**: Controle para ativar/desativar
- 🌟 **Animações Fluidas**: Reveal de elementos conforme scroll
- 💚 **Efeitos Neon Suaves**: Verde neon elegante, nunca exagerado
- 🎭 **Glassmorphism**: Efeitos de vidro fosco moderno
- ✨ **Partículas Animadas**: Fundo dinâmico e aconchegante

## 📁 Estrutura do Projeto

```
site-helo/
├── index.html          # HTML principal
├── styles.css          # Estilos e animações
├── script.js           # Interatividade e efeitos
├── audio/
│   └── background-music.mp3  # Música de fundo
└── README.md          # Este arquivo
```

## 🚀 Como Usar

### 1. Abrir o Site
Simplesmente abra o arquivo `index.html` em qualquer navegador moderno.

```bash
# Se estiver usando um servidor local (recomendado para melhor experiência com áudio)
python -m http.server 8000
# Depois acesse: http://localhost:8000
```

### 2. Personalizar o Site

#### Trocar as Fotos
1. Abra o arquivo `index.html`
2. Procure pelas linhas com `<img src=...`
3. Substitua os URLs das imagens:

```html
<!-- Antes -->
<img src="https://via.placeholder.com/500x600?text=Foto+1" alt="Memória 1" class="photo">

<!-- Depois -->
<img src="caminho/para/sua/foto.jpg" alt="Memória 1" class="photo">
```

#### Editar as Frases Emocionais
Encontre as seções `.text-declaration` e altere o texto:

```html
<!-- Procure por linhas assim -->
<div class="text-declaration">
    <p>Você entrou na minha vida de uma forma inesperada.</p>
</div>
```

#### Editar a Mensagem de Aniversário
Procure pela classe `.birthday-letter` e altere o conteúdo:

```html
<div class="birthday-letter">
    <p>
        Seu texto de aniversário aqui...
    </p>
</div>
```

#### Trocar o Nome do Remetente
Procure pela classe `.signature` e altere:

```html
<p class="signature">Com carinho, Seu Nome.</p>
```

### 3. Adicionar Música de Fundo

#### Opção A: Usar um arquivo local
1. Crie uma pasta `audio` no mesmo diretório do `index.html`
2. Coloque seu arquivo MP3 lá com o nome `background-music.mp3`
3. O site carregará automaticamente

#### Opção B: Usar uma URL online
1. Abra `index.html` em um editor
2. Procure pela tag `<audio>`:
```html
<audio id="bgMusic" loop preload="none">
    <source src="sua-url-de-audio.mp3" type="audio/mpeg">
</audio>
```

### 4. Personalizar as Cores

Abra `styles.css` e procure pela seção de variáveis:

```css
:root {
    --primary-dark: #0a0e1a;           /* Cor de fundo escura */
    --secondary-dark: #0f1419;         /* Cor secundária escura */
    --accent-green: #00d9a3;           /* Verde neon principal */
    --accent-green-soft: rgba(0, 217, 163, 0.3);
    --accent-green-neon: rgba(0, 217, 163, 0.6);
    --text-primary: #e8e8e8;           /* Cor do texto principal */
    --text-secondary: #b0b0b0;         /* Cor do texto secundário */
}
```

Altere os valores HEX para suas cores preferidas.

## 🎯 Fluxo do Site

1. **Tela Inicial** - "Quer uma surpresa?" com botão "Clique"
2. **Transição Cinematográfica** - Fade escuro suave
3. **Hero Section** - Introdução emocional
4. **Galeria com Frases** - Fotos aparecem com animações alternadas
5. **Mensagem de Aniversário** - Foto grande + letra de aniversário
6. **Final Cinematográfico** - Fade suave de encerramento

## 🎵 Música Recomendada

Para melhor experiência emocional, procure por músicas:
- Clássica minimalista
- Música eletrônica ambiental
- Piano instrumental suave
- Trilha sonora cinematográfica

Formatos suportados: MP3, WAV, OGG, M4A

## 🛠️ Dicas de Personalização

### Adicionar mais fotos
Copie uma seção `photo-section` e altere:
- A classe de animação: `fade-in-left` ou `fade-in-right`
- A URL da foto
- O texto emocional

### Ajustar velocidade das animações
Procure em `styles.css` por `animation-duration` e `transition`:
```css
animation: fadeInUp 0.8s ease-out forwards;
/* Altere 0.8s para seu valor desejado */
```

### Mudar o tema de cores
Mantenha a harmonia ao alterar:
- Verde neon para outra cor vibrante
- Preto para tons cinzento/azulado
- Sempre test em dispositivos diferentes

## 🌐 Compatibilidade

- ✅ Chrome/Edge (últimas versões)
- ✅ Firefox (últimas versões)
- ✅ Safari (últimas versões)
- ✅ Mobile (iOS/Android)

## 📱 Dicas para Móvel

O site é totalmente responsivo, mas para melhor experiência:
- Use em modo retrato para melhor proporção
- O toque inicializa a música automaticamente
- Animações são otimizadas para dispositivos móveis

## 🎬 Recursos Avançados

### Parallax Suave
O efeito parallax está comentado em `script.js`. Para ativar:
1. Procure por `// const parallax = new SmoothParallax();`
2. Remova a barra de comentário

**Nota**: Pode aumentar uso de CPU em dispositivos fracos.

### Reduzir Movimento
O site respeita `prefers-reduced-motion` para usuários que preferem menos animações.

## 🐛 Troubleshooting

### A música não toca
- Verifique se o arquivo está no caminho correto
- Teste em um servidor local (não via `file://`)
- Verifique se o formato é suportado pelo navegador

### Animações lentas no móvel
- Reduz o número de partículas em `script.js`
- Desativa efeitos de parallax
- Verifica se há muitos scripts rodando

### Fotos não aparecem
- Verifica a URL das imagens
- Abre o console (F12) para ver erros
- Testa em diferentes navegadores

## 📄 Licença

Este projeto é criado com ❤️ para celebrações especiais.

## 💡 Ideias Futuras

- [ ] Galeria com mais de 5 fotos
- [ ] Múltiplas páginas de conteúdo
- [ ] Integração com redes sociais
- [ ] Modo escuro/claro adicional
- [ ] Vídeos ao invés de fotos
- [ ] Contador regressivo
- [ ] Formulário de mensagens

---

**Feito com muito carinho.** 💚✨

Aproveite a celebração! 🎉
