// src/pages/Contact.jsx
import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { motion, useInView } from "framer-motion";
import {
  Mail, Linkedin, Github, Phone, MapPin,
  Send, CheckCircle, AlertCircle, ArrowRight, Copy, Check,
} from "lucide-react";

const EMAIL = "ramucodes@gmail.com";
const LINKEDIN = "https://www.linkedin.com/in/ramu-chaurasiya-/";
const GITHUB = "https://github.com/ramu-codes"; // Updated to your likely github from previous context

/* ─── Social link card ───────────────────────────────────────── */
const SocialCard = ({ href, icon: Icon, label, sublabel, color, index }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.a
      ref={ref}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, x: 30, filter: "blur(8px)" }}
      animate={inView ? { opacity: 1, x: 0, filter: "blur(0px)" } : {}}
      transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
      whileHover={{ y: -4, borderColor: `${color}60`, boxShadow: `0 15px 35px ${color}20` }}
      className="relative flex items-center gap-4 rounded-2xl px-5 py-4 overflow-hidden group"
      style={{
        background: "rgba(30, 41, 59, 0.5)", // Matches About.jsx cards
        border: "1px solid rgba(148,163,184,0.1)",
        backdropFilter: "blur(20px)",
        transition: "all 0.3s cubic-bezier(0.25, 0.1, 0.25, 1)",
        textDecoration: "none",
      }}
    >
      {/* shimmer */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: `linear-gradient(90deg, transparent, ${color}80, transparent)` }}
        animate={{ opacity: [0.1, 0.8, 0.1] }}
        transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
      />

      <motion.div
        whileHover={{ scale: 1.1, rotate: 5 }}
        transition={{ type: "spring", stiffness: 300, damping: 15 }}
        className="flex items-center justify-center rounded-xl shrink-0 transition-colors"
        style={{
          width: 44, height: 44,
          background: `${color}15`,
          border: `1px solid ${color}30`,
        }}
      >
        <Icon size={19} style={{ color }} />
      </motion.div>

      <div className="min-w-0">
        <p className="text-sm font-bold text-white truncate">{label}</p>
        <p className="text-xs truncate text-slate-400">{sublabel}</p>
      </div>

      <ArrowRight
        size={16}
        className="ml-auto shrink-0 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
        style={{ color }}
      />
    </motion.a>
  );
};

/* ─── Copy email button ──────────────────────────────────────── */
const CopyEmail = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <motion.button
      onClick={handleCopy}
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={{ borderColor: "rgba(129,140,248,0.5)", y: -4, boxShadow: "0 15px 35px rgba(129,140,248,0.15)" }}
      whileTap={{ scale: 0.98 }}
      className="relative w-full flex items-center justify-between gap-3 rounded-2xl px-5 py-4 overflow-hidden text-left group"
      style={{
        background: "rgba(30, 41, 59, 0.5)",
        border: "1px solid rgba(148,163,184,0.1)",
        backdropFilter: "blur(20px)",
        transition: "all 0.3s cubic-bezier(0.25, 0.1, 0.25, 1)",
        cursor: "pointer",
      }}
    >
      <motion.div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(129,140,248,0.6), transparent)" }}
        animate={{ opacity: [0.1, 1, 0.1] }}
        transition={{ duration: 3, repeat: Infinity }}
      />

      <div className="flex items-center gap-4 min-w-0">
        <div
          className="flex items-center justify-center rounded-xl shrink-0 transition-colors group-hover:bg-indigo-500/20"
          style={{ width: 44, height: 44, background: "rgba(129,140,248,0.1)", border: "1px solid rgba(129,140,248,0.3)" }}
        >
          <Mail size={18} style={{ color: "#818cf8" }} />
        </div>
        <div className="min-w-0">
          <p className="text-xs font-medium mb-0.5 text-slate-400">Direct Email</p>
          <p className="text-sm font-bold text-white truncate">{EMAIL}</p>
        </div>
      </div>

      <motion.div
        animate={{ scale: copied ? [1, 1.2, 1] : 1 }}
        transition={{ duration: 0.3 }}
        className="shrink-0"
      >
        {copied
          ? <Check size={18} style={{ color: "#34d399" }} />
          : <Copy size={18} className="text-slate-500 group-hover:text-indigo-400 transition-colors" />}
      </motion.div>

      {copied && (
        <motion.span
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          className="absolute right-14 text-xs font-semibold"
          style={{ color: "#34d399" }}
        >
          Copied!
        </motion.span>
      )}
    </motion.button>
  );
};

/* ─── Form field ─────────────────────────────────────────────── */
const Field = ({ label, children }) => (
  <div>
    <label className="block text-xs font-bold uppercase tracking-wider mb-2 text-slate-400">
      {label}
    </label>
    {children}
  </div>
);

const inputStyle = {
  width: "100%",
  background: "rgba(15, 23, 42, 0.5)", // Darker inner slate
  border: "1px solid rgba(148,163,184,0.15)",
  borderRadius: "0.75rem",
  padding: "0.875rem 1rem",
  color: "#f1f5f9",
  fontSize: "0.875rem",
  outline: "none",
  transition: "all 0.3s cubic-bezier(0.25, 0.1, 0.25, 1)",
};

/* ─── Main Component ─────────────────────────────────────────── */
const Contact = () => {
  const headingRef = useRef(null);
  const headingInView = useInView(headingRef, { once: true, amount: 0.4 });
  const formRef = useRef(null);
  const formInView = useInView(formRef, { once: true, amount: 0.2 });

  const [status, setStatus] = useState("idle");
  const [focused, setFocused] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setStatus("success");
        e.target.reset();
        setTimeout(() => setStatus("idle"), 5000);
      })
      .catch(() => {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 5000);
      });
  };

  const focusBorder = (name) => ({
    ...inputStyle,
    borderColor: focused === name ? "rgba(99,102,241,0.5)" : "rgba(148,163,184,0.15)",
    boxShadow: focused === name ? "0 0 0 4px rgba(99,102,241,0.1)" : "none",
    background: focused === name ? "rgba(15, 23, 42, 0.8)" : "rgba(15, 23, 42, 0.5)",
  });

  return (
    <section
      id="contact"
      className="relative overflow-hidden py-24 px-6 sm:px-8 lg:px-12"
      style={{ background: "rgb(26, 38, 55)" }}
    >
      {/* Grid background */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(rgba(99,102,241,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.2) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Ambient glows (Matching Hero & About) */}
      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.4, 0.6, 0.4] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute pointer-events-none rounded-full"
        style={{
          width: 500, height: 500,
          background: "radial-gradient(circle, rgba(99,102,241,0.15) 0%, transparent 70%)",
          bottom: -150, left: -150,
          filter: "blur(50px)",
        }}
      />
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute pointer-events-none rounded-full"
        style={{
          width: 400, height: 400,
          background: "radial-gradient(circle, rgba(167,139,250,0.12) 0%, transparent 70%)",
          top: -100, right: -100,
          filter: "blur(50px)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* ── Heading ──────────────────────────────────────── */}
        <div ref={headingRef} className="mb-16 mt-8">
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={headingInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-xs font-mono font-bold tracking-[0.35em] uppercase mb-6 flex items-center gap-3 text-indigo-400"
          >
            <motion.span
              animate={{ opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="flex items-center gap-3"
            >
              <span className="w-10 h-px bg-indigo-500/50" />
              Contact
              <span className="w-10 h-px bg-indigo-500/50" />
            </motion.span>
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
            animate={headingInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight mb-6"
          >
            Let's{" "}
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent">
              Connect
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={headingInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="text-lg text-slate-400 max-w-2xl font-light"
          >
            Currently seeking{" "}
            <span className="font-medium text-emerald-400">internship opportunities</span>
            {" "}— open to full-time roles too. Let's build something great together 🚀
          </motion.p>
        </div>

        {/* ── Two-column layout ────────────────────────────── */}
        <div className="grid lg:grid-cols-5 gap-10 items-start">

          {/* ── Left: Form ─────────────────────────────────── */}
          <motion.div
            ref={formRef}
            initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
            animate={formInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-3 relative rounded-3xl p-8 sm:p-10 overflow-hidden shadow-2xl"
            style={{
              background: "rgba(30, 41, 59, 0.4)", // Slate based
              border: "1px solid rgba(148,163,184,0.1)",
              backdropFilter: "blur(20px)",
            }}
          >
            {/* shimmer top */}
            <motion.div
              className="absolute top-0 left-0 right-0 h-px rounded-t-3xl"
              style={{ background: "linear-gradient(90deg, transparent, rgba(99,102,241,0.6), transparent)" }}
              animate={{ opacity: [0.2, 0.8, 0.2] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Corner glow */}
            <div
              className="absolute top-0 left-0 w-64 h-64 pointer-events-none"
              style={{ background: "radial-gradient(circle at top left, rgba(99,102,241,0.1), transparent 70%)" }}
            />

            <h3 className="text-2xl font-bold text-white mb-8 relative z-10 tracking-tight">Send Me a Message</h3>

            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <div className="grid sm:grid-cols-2 gap-6">
                <Field label="Your Name">
                  <input
                    type="text"
                    name="user_name"
                    required
                    placeholder="ramu chaurasiya"
                    style={focusBorder("name")}
                    onFocus={() => setFocused("name")}
                    onBlur={() => setFocused(null)}
                  />
                </Field>
                <Field label="Your Email">
                  <input
                    type="email"
                    name="user_email"
                    required
                    placeholder="ramucodes@gmail.com"
                    style={focusBorder("email")}
                    onFocus={() => setFocused("email")}
                    onBlur={() => setFocused(null)}
                  />
                </Field>
              </div>

              <Field label="Subject">
                <input
                  type="text"
                  name="subject"
                  placeholder="Internship Opportunity / Project Collab..."
                  style={focusBorder("subject")}
                  onFocus={() => setFocused("subject")}
                  onBlur={() => setFocused(null)}
                />
              </Field>

              <Field label="Message">
                <textarea
                  name="message"
                  rows={5}
                  required
                  placeholder="Tell me about the opportunity or project..."
                  style={{ ...focusBorder("message"), resize: "vertical" }}
                  onFocus={() => setFocused("message")}
                  onBlur={() => setFocused(null)}
                />
              </Field>

              {/* Status messages */}
              {status === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-3 text-sm font-medium rounded-xl px-5 py-4"
                  style={{ background: "rgba(52,211,153,0.1)", border: "1px solid rgba(52,211,153,0.2)", color: "#34d399" }}
                >
                  <CheckCircle size={18} /> Message sent successfully! I'll reply within 24 hours.
                </motion.div>
              )}
              {status === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-3 text-sm font-medium rounded-xl px-5 py-4"
                  style={{ background: "rgba(248,113,113,0.1)", border: "1px solid rgba(248,113,113,0.2)", color: "#f87171" }}
                >
                  <AlertCircle size={18} /> Something went wrong. Please try again or email me directly.
                </motion.div>
              )}

              <motion.button
                type="submit"
                disabled={status === "sending"}
                whileHover={{ scale: status === "sending" ? 1 : 1.02, boxShadow: "0 0 30px rgba(99,102,241,0.4)" }}
                whileTap={{ scale: 0.98 }}
                className="w-full flex items-center justify-center gap-3 py-4 rounded-xl text-sm font-bold text-white"
                style={{
                  background: status === "sending"
                    ? "rgba(99,102,241,0.5)"
                    : "linear-gradient(135deg, #6366f1, #a855f7)",
                  transition: "all 0.3s cubic-bezier(0.25, 0.1, 0.25, 1)",
                  cursor: status === "sending" ? "not-allowed" : "pointer",
                }}
              >
                {status === "sending" ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                    />
                    Sending...
                  </>
                ) : (
                  <><Send size={18} /> Send Message</>
                )}
              </motion.button>
            </form>
          </motion.div>

          {/* ── Right: Info panel ───────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: 40, filter: "blur(8px)" }}
            animate={formInView ? { opacity: 1, x: 0, filter: "blur(0px)" } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-2 flex flex-col gap-5"
          >
            {/* Status badge */}
            <motion.div
              whileHover={{ y: -4, borderColor: "rgba(52,211,153,0.4)", boxShadow: "0 10px 30px rgba(52,211,153,0.1)" }}
              className="relative flex items-center gap-4 rounded-2xl px-6 py-5 overflow-hidden group"
              style={{
                background: "rgba(30, 41, 59, 0.5)",
                border: "1px solid rgba(52,211,153,0.2)",
                backdropFilter: "blur(20px)",
                transition: "all 0.3s cubic-bezier(0.25, 0.1, 0.25, 1)",
              }}
            >
              <div className="relative flex items-center justify-center w-3 h-3">
                <motion.span
                  className="absolute w-full h-full rounded-full"
                  style={{ background: "#34d399" }}
                  animate={{ scale: [1, 2], opacity: [0.8, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
                />
                <span className="relative w-2 h-2 rounded-full bg-emerald-400" />
              </div>
              <div>
                <p className="text-sm font-bold text-emerald-400"> Open to Work</p>
                <p className="text-xs text-slate-400 mt-0.5">Internship & full-time roles</p>
              </div>
            </motion.div>

            {/* Copy email */}
            <CopyEmail />

            {/* Social links */}
            <SocialCard
              href={LINKEDIN}
              icon={Linkedin}
              label="LinkedIn Profile"
              sublabel="Ramu Chaurasiya"
              color="#818cf8"
              index={0}
            />
            <SocialCard
              href={GITHUB}
              icon={Github}
              label="GitHub"
              sublabel="View my repositories"
              color="#a78bfa"
              index={1}
            />

            {/* Location */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              whileHover={{ y: -4, borderColor: "rgba(250,204,21,0.4)", boxShadow: "0 15px 35px rgba(250,204,21,0.1)" }}
              className="flex items-center gap-4 rounded-2xl px-5 py-4"
              style={{
                background: "rgba(30, 41, 59, 0.5)",
                border: "1px solid rgba(148,163,184,0.1)",
                backdropFilter: "blur(20px)",
                transition: "all 0.3s cubic-bezier(0.25, 0.1, 0.25, 1)",
              }}
            >
              <div
                className="flex items-center justify-center rounded-xl shrink-0"
                style={{ width: 44, height: 44, background: "rgba(250,204,21,0.1)", border: "1px solid rgba(250,204,21,0.3)" }}
              >
                <MapPin size={18} style={{ color: "#facc15" }} />
              </div>
              <div>
                <p className="text-sm font-bold text-white">Ghaziabad, UP</p>
                <p className="text-xs text-slate-400 mt-0.5">India · Open to remote</p>
              </div>
            </motion.div>

            {/* Response time */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="rounded-2xl px-5 py-4 text-center mt-2"
              style={{
                background: "rgba(15, 23, 42, 0.4)",
                border: "1px solid rgba(148,163,184,0.05)",
              }}
            >
              <p className="text-xs text-slate-400">
                ⚡ Average response time:{" "}
                <span className="font-bold text-indigo-400">under 24 hours</span>
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;