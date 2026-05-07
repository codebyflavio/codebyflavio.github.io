"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  SiDjango, SiPython, SiReact, SiTypescript, SiJavascript,
  SiPostgresql, SiDocker, SiGit, SiGithubactions, SiTailwindcss,
  SiJest, SiCypress, SiSelenium, SiWebpack, SiSass, SiGo, SiPostman,
} from "react-icons/si";
import { FiCode } from "react-icons/fi";
import { useLanguage } from "@/contexts/LanguageContext";

interface Skill {
  name: string;
  icon: React.ElementType;
  level: number;
  color: string;
}

const skillData = {
  frontend: [
    { name: "React.js", icon: SiReact, level: 88, color: "#61DAFB" },
    { name: "TypeScript", icon: SiTypescript, level: 85, color: "#3178C6" },
    { name: "JavaScript (ES6+)", icon: SiJavascript, level: 90, color: "#F7DF1E" },
    { name: "Tailwind CSS", icon: SiTailwindcss, level: 82, color: "#38BDF8" },
    { name: "Sass / CSS3", icon: SiSass, level: 78, color: "#CC6699" },
  ],
  backend: [
    { name: "Django / DRF", icon: SiDjango, level: 90, color: "#2DD4BF" },
    { name: "Python", icon: SiPython, level: 92, color: "#3776AB" },
    { name: "Go", icon: SiGo, level: 60, color: "#00ADD8" },
    { name: "Logging / Watchdog", icon: FiCode, level: 85, color: "#A78BFA" },
  ],
  database: [
    { name: "PostgreSQL", icon: SiPostgresql, level: 85, color: "#336791" },
    { name: "SQL Avançado", icon: FiCode, level: 80, color: "#2DD4BF" },
  ],
  testing: [
    { name: "Pytest / Unittest", icon: SiPython, level: 88, color: "#3776AB" },
    { name: "Selenium", icon: SiSelenium, level: 85, color: "#43B02A" },
    { name: "Jest / RTL", icon: SiJest, level: 78, color: "#C21325" },
    { name: "Cypress", icon: SiCypress, level: 72, color: "#17202C" },
  ],
  devops: [
    { name: "Git / GitFlow", icon: SiGit, level: 90, color: "#F05032" },
    { name: "Docker", icon: SiDocker, level: 75, color: "#2496ED" },
    { name: "GitHub Actions", icon: SiGithubactions, level: 78, color: "#2088FF" },
    { name: "Webpack", icon: SiWebpack, level: 70, color: "#8DD6F9" },
    { name: "Postman", icon: SiPostman, level: 85, color: "#FF6C37" },
  ],
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

function SkillBar({ skill, inView }: { skill: Skill; inView: boolean }) {
  const Icon = skill.icon;
  return (
    <motion.div variants={fadeUp} className="space-y-1.5">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Icon size={14} style={{ color: skill.color }} />
          <span className="text-sm font-mono text-slate-700 dark:text-slate-300">{skill.name}</span>
        </div>
        <span className="text-xs font-mono text-slate-500 dark:text-slate-500">{skill.level}%</span>
      </div>
      <div className="h-1.5 bg-slate-100 dark:bg-surface-border rounded-full overflow-hidden">
        <motion.div
          className="h-full rounded-full"
          style={{ background: `linear-gradient(90deg, #2DD4BF, ${skill.color})` }}
          initial={{ width: 0 }}
          animate={{ width: inView ? `${skill.level}%` : 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
        />
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const { t } = useLanguage();

  const categories = [
    { key: "frontend" as const, ...t.skills.categories.frontend, skills: skillData.frontend },
    { key: "backend" as const, ...t.skills.categories.backend, skills: skillData.backend },
    { key: "database" as const, ...t.skills.categories.database, skills: skillData.database },
    { key: "testing" as const, ...t.skills.categories.testing, skills: skillData.testing },
    { key: "devops" as const, ...t.skills.categories.devops, skills: skillData.devops },
  ];

  return (
    <section id="skills" className="py-28 px-6 bg-slate-50 dark:bg-surface-card/40">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent font-mono text-sm">{t.skills.eyebrow}</span>
          <h2 className="section-heading text-slate-900 dark:text-white mt-2">
            {t.skills.heading} <span className="gradient-text">{t.skills.headingHighlight}</span>
          </h2>
          <p className="mt-4 text-slate-500 dark:text-slate-400 max-w-xl mx-auto text-sm">
            {t.skills.description}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {categories.map((cat, ci) => (
            <motion.div
              key={cat.key}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: ci * 0.1 }}
              className="card-base p-6 space-y-5 hover:glow-accent hover:-translate-y-1"
            >
              <div>
                <p className="text-xs font-mono text-slate-400 dark:text-slate-500 mb-1">{cat.comment}</p>
                <h3 className="font-mono font-bold text-slate-800 dark:text-white text-base flex items-center gap-2">
                  <span className="text-accent">&#8250;</span> {cat.label}
                </h3>
              </div>

              <motion.div
                variants={{ visible: { transition: { staggerChildren: 0.08, delayChildren: ci * 0.1 } } }}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                className="space-y-4"
              >
                {cat.skills.map((skill) => (
                  <SkillBar key={skill.name} skill={skill} inView={inView} />
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-xs font-mono text-slate-400 mb-4">{t.skills.otherTech}</p>
          <div className="flex flex-wrap justify-center gap-2">
            {["HTML5", "CSS3", "REST APIs", "ORM", "XML Parsing", "CI/CD", "Jasmine", "GeneXus", "Scrum", "Kanban"].map((tag) => (
              <span key={tag} className="tag-pill">{tag}</span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
