"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FiDownload, FiMapPin, FiMail, FiUser } from "react-icons/fi";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const { t, lang } = useLanguage();

  const infoItems = [
    { icon: FiUser, label: t.about.infoName, value: "Flavio Rodrigues" },
    { icon: FiMapPin, label: t.about.infoLocation, value: "São Paulo, SP" },
    { icon: FiMail, label: t.about.infoEmail, value: "flaviorodriguestrb@gmail.com" },
  ];

  return (
    <section id="sobre" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          variants={stagger}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-16 items-center"
        >
          {/* Avatar side */}
          <motion.div variants={fadeUp} className="flex justify-center md:justify-start">
            <div className="relative">
              <div className="absolute -inset-2 rounded-2xl bg-gradient-to-br from-accent/30 to-purple-500/10 blur-xl" />

              <div className="relative w-64 h-72 md:w-72 md:h-80 rounded-2xl overflow-hidden border-2 border-accent/30">
                <Image
                  src="/avatar.png"
                  alt="Flavio Rodrigues"
                  fill
                  className="object-cover object-top"
                  priority
                />

                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-surface-dark/90 backdrop-blur-sm rounded-lg px-3 py-2 border border-surface-border">
                    <p className="font-mono text-xs text-accent">
                      <span className="text-slate-500">$</span> whoami
                    </p>
                    <p className="font-mono text-xs text-white mt-0.5">flavio_rodrigues</p>
                  </div>
                </div>
              </div>

              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -right-6 top-8 bg-white dark:bg-surface-card border border-slate-200 dark:border-surface-border rounded-xl px-3 py-2 shadow-xl"
              >
                <p className="font-mono text-xs text-slate-600 dark:text-slate-400">{t.about.experienceLabel}</p>
                <p className="font-mono text-lg font-bold text-accent">4+ {lang === "en" ? "yrs" : lang === "es" ? "años" : "anos"}</p>
              </motion.div>

              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute -left-6 bottom-12 bg-white dark:bg-surface-card border border-slate-200 dark:border-surface-border rounded-xl px-3 py-2 shadow-xl"
              >
                <p className="font-mono text-xs text-slate-600 dark:text-slate-400">{t.about.stacksLabel}</p>
                <p className="font-mono text-lg font-bold text-accent">10+</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Text side */}
          <motion.div variants={stagger} className="space-y-6">
            <motion.div variants={fadeUp}>
              <span className="text-accent font-mono text-sm">{t.about.eyebrow}</span>
              <h2 className="section-heading text-slate-900 dark:text-white mt-2">
                {t.about.heading} <span className="gradient-text">{t.about.headingHighlight}</span>
              </h2>
            </motion.div>

            <motion.p variants={fadeUp} className="text-slate-600 dark:text-slate-400 leading-relaxed text-[15px]">
              {t.about.p1}
            </motion.p>

            <motion.p variants={fadeUp} className="text-slate-600 dark:text-slate-400 leading-relaxed text-[15px]">
              {t.about.p2}
            </motion.p>

            <motion.div variants={fadeUp} className="space-y-3">
              {infoItems.map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center">
                    <Icon size={15} className="text-accent" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-slate-500 dark:text-slate-500 block">{label}</span>
                    <span className="text-sm text-slate-700 dark:text-slate-300 font-medium">{value}</span>
                  </div>
                </div>
              ))}
            </motion.div>

            <motion.div variants={fadeUp} className="flex flex-wrap gap-2">
              {t.about.langs.map((l) => (
                <span key={l} className="tag-pill">{l}</span>
              ))}
            </motion.div>

            <motion.div variants={fadeUp}>
              <a
                href="/CurriculoFlavio.pdf"
                download
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-accent text-surface-dark font-mono font-semibold text-sm hover:bg-accent-light transition-colors shadow-lg shadow-accent/20"
              >
                <FiDownload size={16} />
                {t.about.downloadCV}
              </a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
