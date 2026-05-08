"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";
import { HiSun, HiMoon, HiMenuAlt3, HiX } from "react-icons/hi";
import { useLanguage } from "@/contexts/LanguageContext";
import { Lang } from "@/lib/translations";

const LANGS: { code: Lang; label: string }[] = [
  { code: "pt", label: "PT" },
  { code: "en", label: "EN" },
  { code: "es", label: "ES" },
];

const NAV_IDS = ["home", "sobre", "skills", "experiencia", "projetos", "contato"];

export default function Header() {
  const { t, lang, setLang } = useLanguage();
  const navLabels = [
    t.nav.home,
    t.nav.about,
    t.nav.skills,
    t.nav.experience,
    t.nav.projects,
    t.nav.contact,
  ];
  const navLinks = NAV_IDS.map((id, i) => ({ label: navLabels[i], href: `#${id}` }));

  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      for (const id of [...NAV_IDS].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNav = (href: string) => {
    setMenuOpen(false);
    const id = href.replace("#", "");
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const isDark = resolvedTheme === "dark";

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 dark:bg-surface-dark/80 backdrop-blur-md shadow-sm shadow-black/10 dark:shadow-black/40"
          : "bg-transparent"
      }`}
    >
      <nav aria-label="Navegação principal" className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <motion.a
          href="#home"
          onClick={(e) => { e.preventDefault(); handleNav("#home"); }}
          className="font-mono font-bold text-lg text-slate-800 dark:text-white flex items-center gap-1"
          whileHover={{ scale: 1.04 }}
        >
          <span className="text-accent">&lt;</span>
          FR
          <span className="text-accent">/&gt;</span>
        </motion.a>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const id = link.href.replace("#", "");
            return (
              <li key={id}>
                <button
                  onClick={() => handleNav(link.href)}
                  className={`relative px-3 py-2 text-sm font-medium font-mono rounded-lg transition-colors duration-200 ${
                    active === id
                      ? "text-accent"
                      : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                  }`}
                >
                  {active === id && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 bg-accent/10 rounded-lg"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                  <span className="relative">{link.label}</span>
                </button>
              </li>
            );
          })}
        </ul>

        {/* Controls */}
        <div className="flex items-center gap-1">
          {/* Language switcher */}
          <div className="flex items-center gap-0.5 border border-slate-200 dark:border-surface-border rounded-lg p-0.5">
            {LANGS.map(({ code, label }) => (
              <button
                key={code}
                onClick={() => setLang(code)}
                className={`px-2 py-1 rounded text-xs font-mono font-semibold transition-colors duration-200 ${
                  lang === code
                    ? "bg-accent text-surface-dark"
                    : "text-slate-500 dark:text-slate-400 hover:text-accent"
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          {/* Theme toggle */}
          {mounted && (
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setTheme(isDark ? "light" : "dark")}
              className="p-2 rounded-lg text-slate-600 dark:text-slate-400 hover:text-accent dark:hover:text-accent hover:bg-accent/10 transition-colors duration-200"
              aria-label="Toggle theme"
            >
              {isDark ? <HiSun size={20} /> : <HiMoon size={20} />}
            </motion.button>
          )}

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="md:hidden p-2 rounded-lg text-slate-600 dark:text-slate-400 hover:text-accent transition-colors"
            aria-label="Toggle menu"
          >
            {menuOpen ? <HiX size={22} /> : <HiMenuAlt3 size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden overflow-hidden bg-white/95 dark:bg-surface-dark/95 backdrop-blur-md border-t border-slate-200 dark:border-surface-border"
          >
            <ul className="flex flex-col px-6 py-4 gap-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNav(link.href)}
                    className="w-full text-left px-3 py-2.5 font-mono text-sm text-slate-700 dark:text-slate-300 hover:text-accent rounded-lg hover:bg-accent/10 transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
