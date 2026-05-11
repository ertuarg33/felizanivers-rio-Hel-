# 📸 GUIA DE FOTOS

## Como Adicionar Suas Fotos

### Opção 1: URLs Online (Mais Fácil)

1. Faça upload de suas fotos em um serviço gratuito:
   - **Google Drive**: drive.google.com
   - **Imgur**: imgur.com
   - **Cloudinary**: cloudinary.com
   - **Unsplash**: unsplash.com (fotos gratuitas)

2. Obtenha o link direto da imagem

3. Edite o `index.html`:
```html
<!-- Procure por esta linha: -->
<img src="https://via.placeholder.com/500x600?text=Foto+1" alt="Memória 1" class="photo">

<!-- E altere para: -->
<img src="https://seu-link-da-foto.jpg" alt="Descrição da Foto" class="photo">
```

---

### Opção 2: Fotos Locais (Melhor Performance)

#### Passo 1: Organize as Fotos
1. Crie uma pasta `images` no mesmo local que `index.html`
2. Copie suas fotos para lá
3. Renomeie para nomes simples: `foto1.jpg`, `foto2.jpg`, etc.

**Estrutura:**
```
site-helo/
├── index.html
├── styles.css
├── script.js
└── images/
    ├── foto1.jpg
    ├── foto2.jpg
    ├── foto3.jpg
    ├── foto4.jpg
    ├── foto5.jpg
    └── foto-principal.jpg
```

#### Passo 2: Edite o HTML
```html
<!-- De: -->
<img src="https://via.placeholder.com/500x600?text=Foto+1" alt="Memória 1" class="photo">

<!-- Para: -->
<img src="images/foto1.jpg" alt="Primeira memória" class="photo">
```

#### Passo 3: Repita para Todas as Fotos
```html
<!-- Foto 2 -->
<img src="images/foto2.jpg" alt="Segunda memória" class="photo">

<!-- Foto 3 -->
<img src="images/foto3.jpg" alt="Terceira memória" class="photo">

<!-- ... e assim por diante -->
```

---

## 📐 Tamanhos Recomendados

| Foto | Dimensão | Proporção |
|------|----------|-----------|
| Galeria (1-5) | 500x600px | 5:6 |
| Galeria alt. | 600x700px | 6:7 |
| Principal | 600x700px | 6:7 |
| Máximo recomendado | 1200x1400px | Similar |
| Mínimo recomendado | 400x500px | Similar |

---

## 🖼️ Formatos Suportados

✅ **Recomendados:**
- **JPG/JPEG** - Melhor compressão
- **PNG** - Suporta transparência
- **WebP** - Melhor qualidade/tamanho

❌ **Não recomendados:**
- BMP - Arquivo grande
- TIFF - Arquivo muito grande
- GIF - Use PNG para imagens estáticas

---

## 🎨 Dicas de Qualidade

### 1. Tamanho do Arquivo
- **Ideal**: 50KB - 200KB por foto
- **Use**: TinyPNG.com ou Compressor.io

### 2. Resolução
- **Mínimo**: 400px na dimensão menor
- **Ideal**: 600-800px
- **Máximo**: Sem limite, mas site fica lento

### 3. Proporção
- **Retrato**: 5:6 ou 6:7 (vertical)
- **Paisagem**: 16:9 ou 4:3 (horizontal)
- **Quadrada**: 1:1

### 4. Edição
Recomendações gratuitas:
- **Canva**: canva.com
- **Pixlr**: pixlr.com
- **Photopea**: photopea.com
- **GIMP**: gimp.org

---

## 📝 Como Editar a Foto Principal

A foto principal aparece grande antes da mensagem de aniversário.

```html
<!-- Procure por: -->
<div class="final-photo-frame">
    <img src="https://via.placeholder.com/600x700?text=Foto+Principal" alt="Foto Principal" class="final-photo">
</div>

<!-- Altere para: -->
<div class="final-photo-frame">
    <img src="images/foto-principal.jpg" alt="Foto Especial" class="final-photo">
</div>
```

---

## 🔗 Obter Links de Fotos (Google Drive)

### Passo a Passo:
1. Upload da foto em Google Drive
2. Clique com botão direito → "Obter link"
3. Mude para "Qualquer pessoa com link pode visualizar"
4. Copie o link
5. **Altere a URL:**
   ```
   DE: https://drive.google.com/file/d/[ID]/view?usp=sharing
   PARA: https://drive.google.com/uc?export=view&id=[ID]
   ```

---

## 💾 Comprimir Fotos (Gratuito)

### TinyPNG
1. Vá em tinypng.com
2. Arraste suas fotos
3. Baixe os arquivos comprimidos
4. Economiza até 80% de espaço!

### Alternativas:
- **Compressor.io**: compressor.io
- **ImageOptim**: imageoptim.com
- **Online-Convert**: online-convert.com

---

## 🎭 Efeitos de Foto (Gratuitos)

### Candva Filters
1. Faça upload em canva.com
2. Aplique filtro (vintage, preto-e-branco, etc)
3. Baixe a foto

### Alternativas:
- **Pixlr**: Filtros e edição online
- **Photopea**: Ferramenta tipo Photoshop
- **Pixabay**: Fotos gratuitas com filtros

---

## 📊 Exemplo Completo

### Seu HTML Ficará Assim:

```html
<!-- FOTO 1 (Esquerda) -->
<section class="photo-section fade-in-left">
    <div class="photo-frame">
        <img src="images/foto1.jpg" alt="Primeiro encontro" class="photo">
    </div>
    <div class="text-declaration">
        <p>Você entrou na minha vida de uma forma inesperada.</p>
    </div>
</section>

<!-- FOTO 2 (Direita) -->
<section class="photo-section fade-in-right">
    <div class="text-declaration">
        <p>E desde então, tudo ficou mais leve.</p>
    </div>
    <div class="photo-frame">
        <img src="images/foto2.jpg" alt="Momentos compartilhados" class="photo">
    </div>
</section>

<!-- ... continua para fotos 3, 4, 5 -->

<!-- FOTO PRINCIPAL (Final) -->
<section class="final-section">
    <div class="final-photo-frame">
        <img src="images/foto-principal.jpg" alt="Você é especial" class="final-photo">
    </div>
    <!-- Resto do conteúdo -->
</section>
```

---

## ✅ Checklist de Fotos

- [ ] 5 fotos da galeria (500x600px cada)
- [ ] 1 foto principal (600x700px)
- [ ] Fotos em JPG ou PNG
- [ ] Nomes simples (foto1.jpg, foto2.jpg)
- [ ] Arquivo < 200KB cada
- [ ] Salvo em pasta `images/`
- [ ] HTML atualizado com caminhos corretos
- [ ] Testado no navegador

---

## 🎨 Sequência Recomendada

### Para um Fluxo Emocional Natural:

1. **Foto 1**: Vocês dois juntos (sorrindo)
2. **Foto 2**: Momento feliz/descontraído
3. **Foto 3**: Momento especial/romântico
4. **Foto 4**: Vocês rindo/se divertindo
5. **Foto 5**: Abraço ou carinho
6. **Foto Principal**: A melhor/mais linda de todas

---

## 🌟 Dicas Pro

### 1. Qualidade
- Use fotos recentes
- Boa iluminação
- Sem borrada
- Cor natural

### 2. Emoção
- Escolha momentos significativos
- Sorrisos genuínos
- Contato visual
- Memórias especiais

### 3. Estética
- Mesma proporção em todas
- Coerência de estilo
- Evite muita saturação
- Considere tema do site

### 4. Performance
- Comprimir antes de usar
- Usar .jpg para fotografias
- Usar .png para gráficos
- Máximo 600x700px

---

## 🔄 Como Trocar Fotos Depois

Se precisar mudar depois:

1. Salve a nova foto em `images/`
2. Edite o `src` no HTML
3. Recarregue a página (Ctrl+F5 para limpar cache)
4. Pronto!

---

## 📱 Otimização para Mobile

O site redimensiona fotos automaticamente:
- Desktop: Tamanho original
- Tablet: 90% do tamanho
- Mobile: 100% da largura disponível

Não precisa de versões diferentes!

---

## 🎁 Onde Encontrar Fotos Grátis

Se precisar de fotos para complementar:

- **Unsplash**: unsplash.com (alta qualidade)
- **Pexels**: pexels.com (licença gratuita)
- **Pixabay**: pixabay.com (sem atribuição)
- **Freepik**: freepik.com (com controle)

---

**Pronto para adicionar suas fotos! 📸💚**

💚✨
