import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/providers/ThemeProvider";
import { LanguageProvider } from "@/contexts/LanguageContext";

export const metadata: Metadata = {
  title: "Flavio Rodrigues | Desenvolvedor Back-End & Front-End",
  description:
    "Portfólio de Flavio Rodrigues — desenvolvedor com experiência sólida em Django, React.js e TypeScript. Foco em sistemas integrados, automação de testes e APIs.",
  keywords: [
    "desenvolvedor",
    "back-end",
    "front-end",
    "Django",
    "React",
    "TypeScript",
    "Python",
    "São Paulo",
  ],
  authors: [{ name: "Flavio Rodrigues" }],
  openGraph: {
    title: "Flavio Rodrigues | Desenvolvedor Back-End & Front-End",
    description:
      "Portfólio profissional de Flavio Rodrigues — Django, React.js, TypeScript, automação de testes.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body>
        <LanguageProvider>
          <ThemeProvider>{children}</ThemeProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
