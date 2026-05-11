# 🚀 GUIA RÁPIDO DE CUSTOMIZAÇÃO

## Como Personalizar o Site em 5 Minutos

### 1️⃣ Editar Textos
Abra o arquivo `config.js` e procure pela seção `texts`:

```javascript
texts: {
    welcomeTitle: "Seu título aqui",
    birthdayTitle: "Feliz Aniversário!",
    signature: "Com carinho, Seu Nome."
}
```

### 2️⃣ Trocar Fotos
No `config.js`, procure por `photos`:

```javascript
photos: {
    photo1: "caminho/para/sua/foto1.jpg",
    photo2: "caminho/para/sua/foto2.jpg",
    // ... etc
}
```

### 3️⃣ Mudar as Cores
No `config.js`, procure por `colors`:

```javascript
colors: {
    accentGreen: "#00d9a3",  // Verde neon (mude para #FF1493, #00FFFF, etc)
    primaryDark: "#0a0e1a",  // Preto/fundo
    // ... etc
}
```

### 4️⃣ Adicionar Música
1. Coloque um arquivo `.mp3` na pasta `audio/`
2. Renomeie para `background-music.mp3`
3. Pronto!

---

## 🎨 Sugestões de Cores Alternativas

### Tema Roxo Elegante
```javascript
accentGreen: "#a855f7",      // Purple
primaryDark: "#1e1b4b"       // Dark purple
```

### Tema Rosa Romântico
```javascript
accentGreen: "#ec4899",      // Pink
primaryDark: "#1f0a1a"       // Dark pink
```

### Tema Azul Cinematográfico
```javascript
accentGreen: "#0ea5e9",      // Sky blue
primaryDark: "#0c1e30"       // Dark blue
```

### Tema Ouro Luxuoso
```javascript
accentGreen: "#fbbf24",      // Gold
primaryDark: "#1a1410"       // Dark brown
```

---

## 📸 Tamanhos Recomendados para Fotos

- **Fotos Galeria**: 500x600px ou 600x700px
- **Foto Principal**: 600x700px ou 800x900px
- **Formato**: JPG ou PNG
- **Qualidade**: Mínimo 1200px na dimensão maior

---

## 🎵 URLs de Música Gratuita

### YouTube
1. Acesse youtube.com/audio_library
2. Escolha uma música
3. Baixe e coloque na pasta `audio/`

### Incompetech
https://incompetech.com/music/royalty-free/

### Free Music Archive
https://freemusicarchive.org/

---

## ⚡ MÉTODO RÁPIDO: Editar HTML Direto

Se preferir não usar `config.js`, edite `index.html` diretamente:

### Trocar Frases
```html
<!-- Procure por -->
<p>Você entrou na minha vida de uma forma inesperada.</p>

<!-- Mude para -->
<p>Sua frase aqui.</p>
```

### Trocar Fotos
```html
<!-- Procure por -->
<img src="https://via.placeholder.com/500x600?text=Foto+1" alt="Memória 1">

<!-- Mude para -->
<img src="sua-foto.jpg" alt="Descrição">
```

### Editar Mensagem de Aniversário
```html
<!-- Procure por .birthday-letter e edite o texto -->
<div class="birthday-letter">
    <p>Sua mensagem aqui...</p>
</div>
```

---

## 🎯 Checklist Pré-Lançamento

- [ ] Fotos trocadas
- [ ] Textos personalizados
- [ ] Nome do remetente atualizado
- [ ] Música de fundo adicionada
- [ ] Cores ajustadas (se desejado)
- [ ] Testado no celular
- [ ] Testado em Chrome/Firefox/Safari
- [ ] Pronto para compartilhar!

---

## 💻 Como Abrir o Site

### Opção 1: Duplo clique
Simplesmente faça duplo clique no `index.html`

### Opção 2: Servidor Local (Recomendado)
```bash
# Na pasta do projeto, abra um terminal e execute:

# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000

# Node.js (se tiver instalado)
npx http-server

# Depois acesse: http://localhost:8000
```

---

## 🆘 Problemas Comuns

### "A música não toca"
- [ ] Verifique se o arquivo está em `audio/background-music.mp3`
- [ ] Teste em um servidor local, não com `file://`
- [ ] Verifique o console (F12) para erros

### "As fotos não aparecem"
- [ ] Confirme o caminho está correto
- [ ] Verifique o formato (.jpg ou .png)
- [ ] Teste as URLs em um navegador

### "Animações muito lentas"
- [ ] Desative parallax em `config.js`
- [ ] Reduza `particleCount`
- [ ] Teste em outro navegador

---

## 📱 Dicas de Mobile

- Teste em diferentes tamanhos de tela
- O site é totalmente responsivo
- Toque para iniciar a música
- Scroll é fluido em touch devices

---

## 🎁 Pronto para Presentear?

1. Customize tudo conforme acima
2. Teste bem em celular e desktop
3. Compartilhe o link ou salve como HTML
4. Aproveite a reação da pessoa especial! 💚

---

**Dúvidas? Abra o arquivo `README.md` para documentação completa.**

💚✨
