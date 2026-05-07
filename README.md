# Portfólio — Flavio Rodrigues

Portfolio pessoal construído com **Next.js 14 (App Router)**, **TypeScript**, **Tailwind CSS** e **Framer Motion**.

## Stack

- **Framework:** Next.js 14 (App Router)
- **Linguagem:** TypeScript
- **Estilização:** Tailwind CSS
- **Animações:** Framer Motion
- **Tema:** next-themes (dark/light)
- **Ícones:** react-icons (Fi + Si)

## Como rodar localmente

```bash
# 1. Entre na pasta
cd portfolio

# 2. Instale as dependências
npm install

# 3. Rode em modo desenvolvimento
npm run dev
```

Acesse **http://localhost:3000**

## Build para produção

```bash
npm run build
npm start
```

## Deploy na Vercel

1. Crie conta em https://vercel.com
2. Importe o repositório (ou a pasta `portfolio/`)
3. Vercel detecta Next.js automaticamente — clique em **Deploy**

---

## Como personalizar

### 🎨 Trocar as cores principais

Edite `tailwind.config.ts` — seção `colors.accent`:

```ts
accent: {
  DEFAULT: "#2DD4BF",  // cor principal (teal) → troque aqui
  light: "#5EEAD4",    // variante clara
  dark: "#0D9488",     // variante escura
},
```

Após trocar o hex, todas as classes `text-accent`, `bg-accent`, `border-accent` mudam automaticamente.

### 🖼️ Trocar a foto pessoal

1. Coloque sua foto em `public/photo.jpg`
2. No componente `components/About.tsx`, substitua o bloco de placeholder pelo `<Image>` do Next.js:

```tsx
import Image from "next/image";

// Substitua o <div> de placeholder por:
<Image
  src="/photo.jpg"
  alt="Flavio Rodrigues"
  fill
  className="object-cover"
/>
```

### 📄 Adicionar o PDF do currículo

1. Coloque o arquivo em `public/curriculum-flavio-rodrigues.pdf`
2. O botão "Download CV" em `About.tsx` já aponta para esse caminho

### 📧 Ativar envio real do formulário (Formspree)

1. Crie conta em https://formspree.io
2. Crie um novo formulário e copie o ID (ex.: `xabc1234`)
3. Em `components/Contact.tsx`, substitua a linha de simulação:

```ts
// Antes (simulação):
await new Promise((r) => setTimeout(r, 1500));

// Depois (Formspree):
const res = await fetch("https://formspree.io/f/SEU_ID", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(form),
});
if (!res.ok) throw new Error("Falha no envio");
```
