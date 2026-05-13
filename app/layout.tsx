import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/providers/ThemeProvider";
import { LanguageProvider } from "@/contexts/LanguageContext";

const BASE_URL = "https://codebyflavio.github.io";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Flavio Rodrigues | Desenvolvedor Back-End & Front-End",
    template: "%s | Flavio Rodrigues",
  },
  description:
    "Portfólio de Flavio Rodrigues — desenvolvedor full-stack com experiência em Django, React.js e TypeScript. Especialista em APIs robustas, automação de testes QA e sistemas integrados.",
  keywords: [
    "desenvolvedor full-stack",
    "back-end developer",
    "front-end developer",
    "Django REST Framework",
    "React.js",
    "TypeScript",
    "Python",
    "automação de testes",
    "QA automation",
    "Selenium",
    "Pytest",
    "PostgreSQL",
    "São Paulo",
    "portfólio desenvolvedor",
  ],
  authors: [{ name: "Flavio Rodrigues", url: BASE_URL }],
  creator: "Flavio Rodrigues",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Flavio Rodrigues | Desenvolvedor Back-End & Front-End",
    description:
      "Portfólio profissional de Flavio Rodrigues — Django, React.js, TypeScript, automação de testes e APIs de alto desempenho.",
    url: BASE_URL,
    siteName: "Flavio Rodrigues — Portfólio",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Flavio Rodrigues | Desenvolvedor Back-End & Front-End",
    description:
      "Portfólio profissional de Flavio Rodrigues — Django, React.js, TypeScript e automação de testes.",
    creator: "@codebyflavio",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Flavio Rodrigues",
  url: BASE_URL,
  jobTitle: "Full-Stack Developer",
  description:
    "Desenvolvedor full-stack com experiência em Django, React.js e TypeScript. Especialista em APIs, automação de testes QA e sistemas integrados.",
  email: "flaviorodriguestrb@gmail.com",
  sameAs: [
    "https://github.com/codebyflavio",
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "São Paulo",
    addressRegion: "SP",
    addressCountry: "BR",
  },
  knowsAbout: [
    "Django",
    "React.js",
    "TypeScript",
    "Python",
    "PostgreSQL",
    "Selenium",
    "Pytest",
    "CI/CD",
    "REST API",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <LanguageProvider>
          <ThemeProvider>{children}</ThemeProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
