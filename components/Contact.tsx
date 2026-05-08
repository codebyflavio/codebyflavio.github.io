"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { FiSend, FiMail, FiMapPin, FiGithub, FiLinkedin, FiCheck, FiAlertCircle } from "react-icons/fi";
import { useLanguage } from "@/contexts/LanguageContext";
import { SOCIAL, FORMSPREE_URL } from "@/lib/config";

type FormState = "idle" | "loading" | "success" | "error";

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const { t } = useLanguage();

  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<FormState>("idle");
  const [errors, setErrors] = useState<Partial<typeof form>>({});

  const validate = () => {
    const e: Partial<typeof form> = {};
    if (!form.name.trim()) e.name = t.contact.validationName;
    if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) e.email = t.contact.validationEmail;
    if (form.message.trim().length < 10) e.message = t.contact.validationMessage;
    return e;
  };

  useEffect(() => {
    if (status !== "success") return;
    const timer = setTimeout(() => {
      setStatus("idle");
      setForm({ name: "", email: "", message: "" });
    }, 5000);
    return () => clearTimeout(timer);
  }, [status]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setErrors({});
    setStatus("loading");
    try {
      const res = await fetch(FORMSPREE_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ name: form.name, email: form.email, message: form.message }),
      });
      if (!res.ok) { setStatus("error"); return; }
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    if (errors[name as keyof typeof form]) {
      setErrors((err) => ({ ...err, [name]: undefined }));
    }
  };

  const inputBase =
    "w-full px-4 py-3 rounded-xl bg-white dark:bg-surface-dark border text-sm font-sans text-slate-800 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-accent/40 transition-all duration-200";
  const inputNormal = "border-slate-200 dark:border-surface-border";
  const inputError = "border-red-400/60 dark:border-red-500/60 focus:ring-red-400/30";

  return (
    <section id="contato" className="py-28 px-6">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent font-mono text-sm">{t.contact.eyebrow}</span>
          <h2 className="section-heading text-slate-900 dark:text-white mt-2">
            {t.contact.heading} <span className="gradient-text">{t.contact.headingHighlight}</span>
          </h2>
          <p className="mt-4 text-slate-500 dark:text-slate-400 max-w-xl mx-auto text-sm">
            {t.contact.description}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-10 items-start">
          {/* Info column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:col-span-2 space-y-6"
          >
            {[
              {
                icon: FiMail,
                label: "E-mail",
                value: SOCIAL.email,
                href: `mailto:${SOCIAL.email}`,
              },
              {
                icon: FiMapPin,
                label: t.contact.locationLabel,
                value: t.contact.locationValue,
                href: "#",
              },
            ].map(({ icon: Icon, label, value, href }) => (
              <a
                key={label}
                href={href}
                className="flex items-center gap-4 p-4 card-base hover:border-accent/40 hover:glow-accent transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Icon size={18} className="text-accent" />
                </div>
                <div>
                  <p className="text-xs font-mono text-slate-500 dark:text-slate-500">{label}</p>
                  <p className="text-sm font-medium text-slate-700 dark:text-slate-300 mt-0.5">{value}</p>
                </div>
              </a>
            ))}

            <div>
              <p className="text-xs font-mono text-slate-400 mb-3">{t.contact.socialsLabel}</p>
              <div className="flex gap-3">
                {[
                  { icon: FiGithub, href: SOCIAL.github, label: "GitHub" },
                  { icon: FiLinkedin, href: SOCIAL.linkedin, label: "LinkedIn" },
                ].map(({ icon: Icon, href, label }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label={label}
                    className="flex items-center gap-2 px-4 py-2.5 card-base hover:border-accent/40 hover:text-accent text-slate-600 dark:text-slate-400 text-sm font-mono transition-colors"
                  >
                    <Icon size={16} />
                    {label}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Form column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-3"
          >
            <div className="card-base p-6 md:p-8">
              {status === "success" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12 text-center gap-4"
                >
                  <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center">
                    <FiCheck size={32} className="text-accent" />
                  </div>
                  <h3 className="font-mono font-bold text-xl text-slate-800 dark:text-white">
                    {t.contact.successTitle}
                  </h3>
                  <p className="text-slate-500 dark:text-slate-400 text-sm">{t.contact.successDesc}</p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="mt-2 text-xs font-mono text-accent hover:underline"
                  >
                    {t.contact.sendAnother}
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-mono text-slate-500 dark:text-slate-400 mb-1.5">
                      {t.contact.nameLabel}
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder={t.contact.namePlaceholder}
                      aria-describedby={errors.name ? "contact-name-error" : undefined}
                      className={`${inputBase} ${errors.name ? inputError : inputNormal}`}
                    />
                    {errors.name && (
                      <p id="contact-name-error" className="mt-1 text-xs text-red-400 font-mono flex items-center gap-1">
                        <FiAlertCircle size={11} /> {errors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="contact-email" className="block text-xs font-mono text-slate-500 dark:text-slate-400 mb-1.5">
                      {t.contact.emailLabel}
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder={t.contact.emailPlaceholder}
                      aria-describedby={errors.email ? "contact-email-error" : undefined}
                      className={`${inputBase} ${errors.email ? inputError : inputNormal}`}
                    />
                    {errors.email && (
                      <p id="contact-email-error" className="mt-1 text-xs text-red-400 font-mono flex items-center gap-1">
                        <FiAlertCircle size={11} /> {errors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="block text-xs font-mono text-slate-500 dark:text-slate-400 mb-1.5">
                      {t.contact.messageLabel}
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={5}
                      placeholder={t.contact.messagePlaceholder}
                      aria-describedby={errors.message ? "contact-message-error" : undefined}
                      className={`${inputBase} resize-none ${errors.message ? inputError : inputNormal}`}
                    />
                    {errors.message && (
                      <p id="contact-message-error" className="mt-1 text-xs text-red-400 font-mono flex items-center gap-1">
                        <FiAlertCircle size={11} /> {errors.message}
                      </p>
                    )}
                  </div>

                  {status === "error" && (
                    <div className="flex items-center gap-2 px-4 py-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-sm font-mono">
                      <FiAlertCircle size={16} />
                      {t.contact.errorMsg}
                    </div>
                  )}

                  <motion.button
                    type="submit"
                    disabled={status === "loading"}
                    whileHover={{ scale: status === "loading" ? 1 : 1.02 }}
                    whileTap={{ scale: status === "loading" ? 1 : 0.98 }}
                    className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-accent text-surface-dark font-mono font-semibold text-sm hover:bg-accent-light transition-colors shadow-lg shadow-accent/20 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {status === "loading" ? (
                      <>
                        <motion.span
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          className="w-4 h-4 border-2 border-surface-dark/30 border-t-surface-dark rounded-full"
                        />
                        {t.contact.sending}
                      </>
                    ) : (
                      <>
                        <FiSend size={16} />
                        {t.contact.send}
                      </>
                    )}
                  </motion.button>

                  <p className="text-center text-xs font-mono text-slate-400">
                    {t.contact.orSendTo}{" "}
                    <a href={`mailto:${SOCIAL.email}`} className="text-accent hover:underline">
                      {SOCIAL.email}
                    </a>
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
