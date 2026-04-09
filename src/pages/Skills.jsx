// src/pages/Skills.jsx
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Database, Code, Zap, Cpu } from "lucide-react";

const skillData = [
  {
    category: "Frontend",
    icon: Code,
    iconColor: "#818cf8",
    skills: ["React (Vite)", "Tailwind CSS", "HTML5/CSS3", "JavaScript (ES6+)"],
  },
  {
    category: "Backend & Database",
    icon: Database,
    iconColor: "#34d399",
    skills: ["Node.js", "Express.js", "MongoDB", "REST APIs", "Mongoose"],
  },
  {
    category: "Core & Programming",
    icon: Cpu,
    iconColor: "#facc15",
    skills: ["DSA", "Java", "Problem Solving", "OOP"],
  },
  {
    category: "Tools & Others",
    icon: Zap,
    iconColor: "#a78bfa",
    skills: ["Git/GitHub", "VS Code", "Netlify/Vercel", "Postman", "Web Hosting"],
  },
];

/* ─── Skill Card ─────────────────────────────────────────────── */
const SkillCard = ({ group, index }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.25 });
  const Icon = group.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ y: 60, opacity: 0, filter: "blur(10px)", scale: 0.95 }}
      animate={inView ? { y: 0, opacity: 1, filter: "blur(0px)", scale: 1 } : {}}
      transition={{ duration: 0.75, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{
        y: -8,
        borderColor: `${group.iconColor}55`,
        boxShadow: `0 20px 56px ${group.iconColor}22`,
      }}
      className="relative rounded-2xl p-6 overflow-hidden cursor-default"
      style={{
        background: "rgba(13,22,44,0.82)",
        border: "1px solid rgba(148,163,184,0.12)",
        backdropFilter: "blur(20px)",
        transition: "border-color 0.3s, box-shadow 0.3s, transform 0.3s",
      }}
    >
      {/* Top shimmer */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-px rounded-t-2xl"
        style={{
          background: `linear-gradient(90deg, transparent, ${group.iconColor}80, transparent)`,
        }}
        animate={{ opacity: [0.2, 1, 0.2] }}
        transition={{ duration: 2.5, repeat: Infinity, delay: index * 0.5 }}
      />

      {/* Corner glow */}
      <div
        className="absolute top-0 right-0 w-28 h-28 pointer-events-none rounded-tr-2xl"
        style={{
          background: `radial-gradient(circle at top right, ${group.iconColor}18, transparent 70%)`,
        }}
      />

      {/* Icon + Title */}
      <div className="flex items-center gap-3 mb-5">
        <motion.div
          whileHover={{ scale: 1.15, rotate: 8 }}
          transition={{ type: "spring", stiffness: 400, damping: 15 }}
          className="flex items-center justify-center rounded-xl"
          style={{
            width: 44,
            height: 44,
            background: `${group.iconColor}15`,
            border: `1px solid ${group.iconColor}40`,
            boxShadow: `0 0 14px ${group.iconColor}30`,
            flexShrink: 0,
          }}
        >
          <Icon size={20} style={{ color: group.iconColor }} />
        </motion.div>
        <h2 className="text-base font-bold text-white tracking-wide">{group.category}</h2>
      </div>

      {/* Skills pills */}
      <div className="flex flex-wrap gap-2">
        {group.skills.map((skill, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, scale: 0.85 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: index * 0.12 + i * 0.06 + 0.2, duration: 0.4, type: "spring", stiffness: 200 }}
            whileHover={{ scale: 1.08, y: -2, borderColor: group.iconColor, color: group.iconColor }}
            className="px-3 py-1.5 text-xs font-medium rounded-full cursor-default"
            style={{
              background: `${group.iconColor}0d`,
              border: `1px solid ${group.iconColor}28`,
              color: "#94a3b8",
              transition: "all 0.25s",
            }}
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
};

/* ─── Main Skills Component ──────────────────────────────────── */
const Skills = () => {
  const headingRef = useRef(null);
  const headingInView = useInView(headingRef, { once: true, amount: 0.5 });
  const focusRef = useRef(null);
  const focusInView = useInView(focusRef, { once: true, amount: 0.5 });

  return (
    <section
      id="skills"
      className="relative overflow-hidden py-24 px-6"
      style={{ background: "rgb(26, 38, 55)" }}
    >
      {/* Grid background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(99,102,241,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.06) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Ambient glows */}
      <motion.div
        animate={{ scale: [1, 1.12, 1], opacity: [0.22, 0.38, 0.22] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="absolute pointer-events-none rounded-full"
        style={{
          width: 480,
          height: 480,
          background: "radial-gradient(circle, rgba(99,102,241,0.28) 0%, transparent 70%)",
          top: -140,
          right: -140,
          filter: "blur(60px)",
        }}
      />
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.18, 0.3, 0.18] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        className="absolute pointer-events-none rounded-full"
        style={{
          width: 380,
          height: 380,
          background: "radial-gradient(circle, rgba(167,139,250,0.22) 0%, transparent 70%)",
          bottom: -90,
          left: -90,
          filter: "blur(60px)",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* ── Heading ──────────────────────────────────────── */}
        <div ref={headingRef} className="mb-16">
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={headingInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-xs font-bold tracking-[0.35em] uppercase mb-5 flex items-center gap-3"
            style={{ color: "#6366f1" }}
            // subtle pulse
          >
            <motion.span
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2.5, repeat: Infinity }}
              className="flex items-center gap-3"
            >
              <span className="w-10 h-px" style={{ background: "#6366f1" }} />
              Expertise
              <span className="w-10 h-px" style={{ background: "#6366f1" }} />
            </motion.span>
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 50, filter: "blur(12px)" }}
            animate={headingInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-5xl md:text-7xl font-black tracking-tight leading-tight mb-4"
            style={{ color: "#f1f5f9" }}
          >
            Skills{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #818cf8, #a78bfa)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              &amp; Tech
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={headingInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="text-base max-w-xl"
            style={{ color: "#64748b" }}
          >
            My essential tools for building{" "}
            <span className="font-semibold" style={{ color: "#94a3b8" }}>full-stack applications</span>
          </motion.p>
        </div>

        {/* ── Cards Grid ───────────────────────────────────── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
          {skillData.map((group, index) => (
            <SkillCard key={index} group={group} index={index} />
          ))}
        </div>

        {/* ── Focus Note ───────────────────────────────────── */}
        <motion.div
          ref={focusRef}
          initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
          animate={focusInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{
            borderColor: "rgba(129,140,248,0.4)",
            boxShadow: "0 0 40px rgba(99,102,241,0.15)",
          }}
          className="relative rounded-2xl px-8 py-6 text-center overflow-hidden"
          style={{
            background: "rgba(13,22,44,0.7)",
            border: "1px solid rgba(148,163,184,0.1)",
            backdropFilter: "blur(20px)",
            transition: "border-color 0.3s, box-shadow 0.3s",
          }}
        >
          {/* Shimmer */}
          <motion.div
            className="absolute top-0 left-0 right-0 h-px"
            style={{
              background: "linear-gradient(90deg, transparent, rgba(129,140,248,0.7), transparent)",
            }}
            animate={{ opacity: [0.2, 1, 0.2] }}
            transition={{ duration: 3, repeat: Infinity }}
          />

          <p className="text-sm font-medium leading-relaxed" style={{ color: "#94a3b8" }}>
            <span className="font-bold text-white">Current Focus: </span>
            Deepening expertise in{" "}
            <span className="font-bold" style={{ color: "#818cf8" }}>DSA</span>{" "}
            (using <span className="font-bold" style={{ color: "#818cf8" }}>Java</span>) and exploring{" "}
            <span className="font-bold" style={{ color: "#a78bfa" }}>Artificial Intelligence (AI)</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
