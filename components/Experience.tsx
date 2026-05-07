"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { FiBriefcase, FiChevronDown } from "react-icons/fi";
import { useLanguage } from "@/contexts/LanguageContext";

type JobType = "full-time" | "internship" | "contract";

const jobsMeta: { company: string; type: JobType; tags: string[] }[] = [
  {
    company: "Giant Cargo",
    type: "full-time",
    tags: ["Django", "React.js", "PostgreSQL", "XML", "Python", "REST API"],
  },
  {
    company: "Grupo Assessor Araçatuba",
    type: "full-time",
    tags: ["Selenium", "Pytest", "Python", "CI/CD", "GitHub Actions"],
  },
  {
    company: "SDNA",
    type: "internship",
    tags: ["Python", "Selenium", "GeneXus", "Git", "GitFlow"],
  },
];

const typeColor: Record<JobType, string> = {
  "full-time": "bg-accent/10 text-accent border-accent/30",
  internship: "bg-purple-500/10 text-purple-400 border-purple-500/30",
  contract: "bg-amber-500/10 text-amber-400 border-amber-500/30",
};

function JobCard({
  company, type, tags, role, period, location, activities, typeLabel, index, inView,
}: {
  company: string; type: JobType; tags: string[]; role: string; period: string;
  location: string; activities: readonly string[]; typeLabel: string; index: number; inView: boolean;
}) {
  const [open, setOpen] = useState(index === 0);

  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="relative flex gap-6"
    >
      <div className="flex flex-col items-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={inView ? { scale: 1 } : {}}
          transition={{ delay: index * 0.15 + 0.2, type: "spring", stiffness: 300 }}
          className="w-10 h-10 rounded-full bg-accent/10 border-2 border-accent/40 flex items-center justify-center flex-shrink-0 mt-1 z-10"
        >
          <FiBriefcase size={16} className="text-accent" />
        </motion.div>
        {index < jobsMeta.length - 1 && (
          <div className="w-px flex-1 bg-gradient-to-b from-accent/30 to-transparent mt-2 min-h-8" />
        )}
      </div>

      <div className="flex-1 card-base mb-8 overflow-hidden">
        <button
          onClick={() => setOpen((v) => !v)}
          className="w-full text-left p-5 hover:bg-accent/5 transition-colors"
        >
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div>
              <h3 className="font-mono font-bold text-slate-800 dark:text-white text-base">{role}</h3>
              <p className="text-accent font-mono text-sm font-medium mt-0.5">{company}</p>
              <p className="text-xs text-slate-500 dark:text-slate-500 font-mono mt-1">
                {period} · {location}
              </p>
            </div>
            <div className="flex items-center gap-2 flex-shrink-0">
              <span className={`text-xs font-mono px-2.5 py-0.5 rounded-full border ${typeColor[type]}`}>
                {typeLabel}
              </span>
              <motion.span
                animate={{ rotate: open ? 180 : 0 }}
                transition={{ duration: 0.2 }}
                className="text-slate-400"
              >
                <FiChevronDown size={18} />
              </motion.span>
            </div>
          </div>

          <div className="flex flex-wrap gap-1.5 mt-3">
            {tags.map((tag) => (
              <span key={tag} className="tag-pill text-[11px]">{tag}</span>
            ))}
          </div>
        </button>

        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              key="content"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="px-5 pb-5 border-t border-slate-100 dark:border-surface-border">
                <ul className="mt-4 space-y-2">
                  {activities.map((act, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400">
                      <span className="text-accent mt-1 flex-shrink-0">▸</span>
                      {act}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const { t } = useLanguage();

  return (
    <section id="experiencia" className="py-28 px-6">
      <div className="max-w-4xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent font-mono text-sm">{t.experience.eyebrow}</span>
          <h2 className="section-heading text-slate-900 dark:text-white mt-2">
            {t.experience.heading} <span className="gradient-text">{t.experience.headingHighlight}</span>
          </h2>
          <p className="mt-4 text-slate-500 dark:text-slate-400 max-w-xl mx-auto text-sm">
            {t.experience.description}
          </p>
        </motion.div>

        <div>
          {jobsMeta.map((meta, i) => (
            <JobCard
              key={meta.company}
              {...meta}
              role={t.experience.jobs[i].role}
              period={t.experience.jobs[i].period}
              location={t.experience.jobs[i].location}
              activities={t.experience.jobs[i].activities}
              typeLabel={t.experience.typeLabels[meta.type]}
              index={i}
              inView={inView}
            />
          ))}
        </div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-4"
        >
          <div className="relative flex gap-6">
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 rounded-full bg-purple-500/10 border-2 border-purple-500/30 flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-purple-400 text-xs font-bold">🎓</span>
              </div>
            </div>
            <div className="flex-1 card-base p-5 border-purple-500/20 hover:border-purple-500/40 transition-colors">
              <span className="text-xs font-mono text-purple-400 border border-purple-500/30 rounded-full px-2.5 py-0.5 bg-purple-500/10">
                {t.experience.educationLabel}
              </span>
              <h3 className="font-mono font-bold text-slate-800 dark:text-white mt-3">
                {t.experience.degreeName}
              </h3>
              <p className="text-purple-400 font-mono text-sm mt-0.5">
                Universidade Anhembi Morumbi (UAM)
              </p>
              <p className="text-xs font-mono text-slate-500 mt-1">2022 – 2024 · São Paulo, SP</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
