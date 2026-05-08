"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FiGithub, FiCode } from "react-icons/fi";
import { SiDjango, SiReact, SiPython, SiSelenium, SiTypescript, SiPostgresql } from "react-icons/si";
import { useLanguage } from "@/contexts/LanguageContext";

const projectsMeta = [
  {
    accent: "#2DD4BF",
    featured: true,
    codeUrl: "https://github.com/codebyflavio/docmanager-api",
    tags: [
      { name: "Django REST", icon: SiDjango, color: "#2DD4BF" },
      { name: "Python", icon: SiPython, color: "#3776AB" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
      { name: "JWT", icon: FiCode, color: "#A78BFA" },
    ],
  },
  {
    accent: "#61DAFB",
    codeUrl: "https://github.com/codebyflavio/analytics-dashboard",
    tags: [
      { name: "React.js", icon: SiReact, color: "#61DAFB" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "Tailwind CSS", icon: FiCode, color: "#38BDF8" },
      { name: "Recharts", icon: FiCode, color: "#8884D8" },
    ],
  },
  {
    accent: "#43B02A",
    codeUrl: "https://github.com/codebyflavio/pricebot-scraper",
    tags: [
      { name: "Python", icon: SiPython, color: "#3776AB" },
      { name: "Selenium", icon: SiSelenium, color: "#43B02A" },
      { name: "Pytest", icon: FiCode, color: "#A78BFA" },
      { name: "Telegram Bot", icon: FiCode, color: "#2AABEE" },
    ],
  },
];

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const { t } = useLanguage();

  return (
    <section id="projetos" className="py-28 px-6 bg-slate-50 dark:bg-surface-card/40">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent font-mono text-sm">{t.projects.eyebrow}</span>
          <h2 className="section-heading text-slate-900 dark:text-white mt-2">
            {t.projects.heading} <span className="gradient-text">{t.projects.headingHighlight}</span>
          </h2>
          <p className="mt-4 text-slate-500 dark:text-slate-400 max-w-xl mx-auto text-sm">
            {t.projects.description}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {projectsMeta.map((meta, i) => (
            <ProjectCard
              key={i}
              meta={meta}
              title={t.projects.items[i].title}
              story={t.projects.items[i].story}
              longDescription={t.projects.items[i].longDescription}
              viewCode={t.projects.viewCode}
              index={i}
              inView={inView}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-slate-500 dark:text-slate-400 text-sm mb-4">
            {t.projects.moreOnGithub}
          </p>
          <a
            href="https://github.com/codebyflavio"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-slate-300 dark:border-surface-border text-slate-700 dark:text-slate-300 hover:border-accent/50 hover:text-accent font-mono text-sm transition-colors"
          >
            <FiGithub size={16} />
            {t.projects.viewAllGithub}
          </a>
        </motion.div>
      </div>
    </section>
  );
}

function ProjectCard({
  meta, title, story, longDescription, viewCode, index, inView,
}: {
  meta: typeof projectsMeta[0];
  title: string;
  story: string;
  longDescription: string;
  viewCode: string;
  index: number;
  inView: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.12 }}
      whileHover={{ y: -6 }}
      className="card-base group flex flex-col overflow-hidden"
    >
      <div
        className="h-1 w-full transition-all duration-300 group-hover:h-1.5"
        style={{ background: `linear-gradient(90deg, ${meta.accent}80, ${meta.accent}20)` }}
      />

      <div className="flex flex-col flex-1 p-6">
        <div className="flex items-start justify-between mb-3">
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center"
            style={{ background: `${meta.accent}15` }}
          >
            <FiCode size={18} style={{ color: meta.accent }} />
          </div>
          <div className="flex gap-2">
            <motion.a
              href={meta.codeUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Source code"
              className="p-1.5 rounded-lg text-slate-400 hover:text-accent transition-colors"
            >
              <FiGithub size={17} />
            </motion.a>
          </div>
        </div>

        <h3 className="font-mono font-bold text-slate-800 dark:text-white mb-3">{title}</h3>

        <div
          className="rounded-lg px-3 py-2.5 mb-3"
          style={{ background: `${meta.accent}0d`, borderLeft: `2px solid ${meta.accent}60` }}
        >
          <span className="block text-[10px] font-mono mb-1" style={{ color: meta.accent }}>
            // o problema
          </span>
          <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed italic">
            {story}
          </p>
        </div>

        <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed flex-1">
          {longDescription}
        </p>

        <div className="flex flex-wrap gap-1.5 mt-5">
          {meta.tags.map(({ name, icon: Icon, color }) => (
            <span
              key={name}
              className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-mono"
              style={{ background: `${color}12`, color, border: `1px solid ${color}30` }}
            >
              <Icon size={10} />
              {name}
            </span>
          ))}
        </div>

        <div className="flex gap-3 mt-5">
          <a
            href={meta.codeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center py-2 rounded-lg border border-slate-200 dark:border-surface-border text-xs font-mono text-slate-600 dark:text-slate-400 hover:border-accent/50 hover:text-accent transition-colors"
          >
            {viewCode}
          </a>
        </div>
      </div>
    </motion.div>
  );
}
