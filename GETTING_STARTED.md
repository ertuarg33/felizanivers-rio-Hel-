# 🚀 COMEÇANDO - Passo a Passo

Este é o guia mais simples possível. Se estiver com dúvida, comece aqui!

---

## Passo 1: Abrir o Site

### Opção A: Mais Fácil
1. Vá para a pasta: `site-helo`
2. Duplo clique em: **`index.html`**
3. Pronto! O site abriu no navegador

### Opção B: Melhor Qualidade (Com Música)
1. Abra PowerShell/Terminal na pasta
2. Digite:
   ```bash
   python -m http.server 8000
   ```
3. Vá no navegador para: `http://localhost:8000`
4. Clique em `index.html`

✅ Site carregado!

---

## Passo 2: Entender o que Você Tem

Você tem estes arquivos principais:

| Arquivo | O que é | Mexo nele? |
|---------|---------|-----------|
| **index.html** | O site | ✏️ Sim (fotos, textos) |
| **styles.css** | Design | ✏️ Sim (cores, efeitos) |
| **script.js** | Animações | ❌ Não mexer |
| **editor.html** | Editor visual | ✏️ Sim (sem código) |
| Pasta **audio/** | Música | ✏️ Sim (colocar MP3) |

---

## Passo 3: Trocar as Fotos (5 minutos)

### Opção A: Sem Código - Editor Visual

1. Duplo clique em: **`editor.html`**
2. Cole as URLs das suas fotos
3. Clique em "Salvar Fotos"
4. Pronto!

### Opção B: Com Código - HTML

1. Abra `index.html` com editor (Notepad, VS Code, etc)
2. Procure por esta linha:
   ```html
   <img src="https://via.placeholder.com/500x600?text=Foto+1"
   ```
3. Mude `https://via.placeholder...` para sua foto:
   ```html
   <img src="https://sua-foto.jpg"
   ```
4. Salve (Ctrl+S)
5. Recarregue o site (F5)

### Onde Colocar Suas Fotos?

#### Opção 1: Usar URLs Online (Mais fácil)
- Foto no Google Drive, Imgur, etc
- Copie o link
- Cole no HTML

#### Opção 2: Pasta Local (Melhor)
1. Crie uma pasta `images` dentro de `site-helo`
2. Coloque suas fotos lá
3. No HTML, use: `src="images/foto1.jpg"`

---

## Passo 4: Trocar os Textos (5 minutos)

### Textos que Você Pode Mudar

1. **Título inicial**: "Quer uma surpresa?"
2. **Frases emocionais**: 5 frases da galeria
3. **Título final**: "Feliz Aniversário ❤️"
4. **Mensagem**: Carta de aniversário
5. **Assinatura**: "Com carinho, Arthur"

### Como Trocar

#### Método 1: Editor Visual (Sem código)
1. Abra `editor.html`
2. Edite os textos nos campos
3. Clique "Salvar Textos"

#### Método 2: HTML Direto
1. Abra `index.html`
2. Procure pelo texto que quer mudar:
   ```html
   <p>Você entrou na minha vida de uma forma inesperada.</p>
   ```
3. Mude para:
   ```html
   <p>Seu novo texto aqui</p>
   ```
4. Salve (Ctrl+S)
5. Recarregue (F5)

---

## Passo 5: Adicionar Música (5 minutos)

### Ter um Arquivo MP3

1. Escolha uma música (ambiente, clássica, etc)
2. Abra em: https://online-audio-converter.com/
3. Baixe em formato MP3
4. Comprima se ficar > 5MB em: https://www.tinypng.com/

### Colocar no Site

1. Renomeie o arquivo para: `background-music.mp3`
2. Coloque dentro da pasta: `site-helo/audio/`
3. Pronto!

### Testar

1. Recarregue o site (F5)
2. Clique no botão "Clique"
3. A música deve tocar (low volume)
4. Use o botão de música 🎵 para controlar

---

## Passo 6: Trocar as Cores (3 minutos)

### Método 1: Editor Visual (Mais fácil)
1. Abra `editor.html`
2. Escolha uma cor
3. Clique em "Aplicar Cores"

### Método 2: Temas Pré-prontos
No `editor.html`, escolha um:
- 💜 Roxo Elegante
- 💖 Rosa Romântico
- 💙 Azul Cinematográfico
- ✨ Ouro Luxuoso

### Método 3: Customizar (Um pouco mais)
1. Abra `styles.css`
2. No topo, procure por:
   ```css
   :root {
       --accent-green: #00d9a3;
   }
   ```
3. Mude `#00d9a3` para sua cor (use https://color-hex.com)
4. Salve
5. Recarregue

---

## Passo 7: Testar Tudo

### Desktop
- [ ] Abra `index.html`
- [ ] Clique no botão "Clique"
- [ ] Veja a transição
- [ ] Role para baixo
- [ ] Veja as fotos aparecerem
- [ ] Leia a mensagem
- [ ] Teste o botão de música

### Mobile (Simulado)
1. Abra o site
2. Aperte F12 (DevTools)
3. Clique no ícone de celular (móvel icon)
4. Teste em tamanhos diferentes

### Mobile Real
1. Abra o site em um celular
2. Teste o scroll
3. Teste o botão
4. Teste a música

---

## Passo 8: Pronto para Compartilhar!

### Opção 1: Enviar como Arquivo
1. Comprima a pasta `site-helo` em ZIP
2. Envie por email
3. Receptáculo extrai e abre `index.html`

### Opção 2: Hospedagem Gratuita
1. Upload em: https://pages.github.com/ (GitHub Pages)
2. Ou: https://www.netlify.com/ (Netlify)
3. Envie o link

### Opção 3: QR Code
1. Gere QR code do seu site
2. Apresente no celular
3. Pessoa especial escaneia

---

## 🎯 Checklist Rápido

```
□ Abri o site (index.html)
□ Troquei as fotos (6 fotos)
□ Troquei os textos (frases + mensagem)
□ Adicionei música (background-music.mp3)
□ Personalizei as cores (se quis)
□ Testei em desktop
□ Testei em mobile
□ Pronto para compartilhar!
```

---

## ❓ Dúvidas Frequentes

### "Cliquei mas nada aconteceu"
✅ Solução: Use servidor local (ver Passo 1 Opção B)

### "Fotos não aparecem"
✅ Solução: Verifique o caminho/URL da foto está correto

### "Música não toca"
✅ Solução: Coloque em `audio/background-music.mp3` e recarregue

### "Como uso minhas fotos do computador?"
✅ Solução: Crie pasta `images/`, coloque fotos lá, use `src="images/foto1.jpg"`

### "Quero mudar mais coisas"
✅ Solução: Leia `QUICK_START.md` ou `README.md`

### "Não entendo código"
✅ Solução: Use `editor.html` - é visual e sem código!

---

## 📚 Próxima Leitura

Quando terminar:
- **Quer aprender mais?** → `QUICK_START.md`
- **Quer tudo em detalhes?** → `README.md`
- **Quer customizar efeitos?** → `EFFECTS_GUIDE.md`
- **Dúvida sobre fotos?** → `PHOTOS_GUIDE.md`

---

## ✨ Você Consegue!

Este guia cobre 90% do que você precisa fazer. Se tiver dúvida:

1. Procure a resposta nos arquivos `.md`
2. Abra F12 para ver erros no console
3. Teste em servidor local
4. Tente novamente!

---

## 🎉 Pronto!

Você tem um site lindo, emocional e cinematográfico.

**Agora é hora de personalizar com o coração e compartilhar com a pessoa especial!** 💚

---

## 📞 Checklist Final

Antes de compartilhar:

```
□ Fotos aparecem corretamente
□ Textos estão personalizados
□ Música toca quando clica
□ Testei em 2+ navegadores
□ Testei em celular
□ Botão de música funciona
□ Animações suaves
□ Sem erros no console (F12)
```

---

**Sucesso! Aproveite o momento! 💚✨**
