"use client";

import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail, FiArrowUp } from "react-icons/fi";
import { useLanguage } from "@/contexts/LanguageContext";

const socials = [
  { icon: FiGithub, href: "https://github.com/codebyflavio", label: "GitHub" },
  { icon: FiLinkedin, href: "https://linkedin.com/in/flaviorodrigues-dev", label: "LinkedIn" },
  { icon: FiMail, href: "mailto:flaviorodriguestrb@gmail.com", label: "E-mail" },
];

export default function Footer() {
  const { t } = useLanguage();
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative border-t border-slate-200 dark:border-surface-border bg-white dark:bg-surface-dark">
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <a
            href="#home"
            onClick={(e) => { e.preventDefault(); scrollTop(); }}
            className="font-mono font-bold text-lg text-slate-800 dark:text-white"
          >
            <span className="text-accent">&lt;</span>FR<span className="text-accent">/&gt;</span>
          </a>

          <p className="text-xs font-mono text-slate-400 text-center">
            © {new Date().getFullYear()} Flavio Rodrigues · {t.footer.madeWith}{" "}
            <span className="text-accent">Next.js</span> &{" "}
            <span className="text-accent">Tailwind CSS</span>
          </p>

          <div className="flex items-center gap-3">
            {socials.map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.15, y: -2 }}
                whileTap={{ scale: 0.9 }}
                aria-label={label}
                className="p-2 rounded-lg text-slate-400 hover:text-accent hover:bg-accent/10 transition-colors"
              >
                <Icon size={18} />
              </motion.a>
            ))}

            <motion.button
              onClick={scrollTop}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Back to top"
              className="ml-2 p-2 rounded-lg border border-slate-200 dark:border-surface-border text-slate-400 hover:text-accent hover:border-accent/40 transition-colors"
            >
              <FiArrowUp size={16} />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
}
