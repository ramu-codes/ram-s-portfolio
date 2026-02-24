// src/pages/Projects.jsx
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Github, ExternalLink, ArrowRight } from "lucide-react";

const projectData = [
  {
    id: 1,
    title: "Full-Stack E-commerce Platform",
    description:
      "A complete online shopping system featuring user authentication, product management, cart functionality, and secure payment gateway integration.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Redux", "Stripe"],
    accentColor: "#818cf8",
    githubLink: "#",
    liveLink: "#",
  },
  {
    id: 2,
    title: "Modern Agriculture Information Platform",
    description:
      "A data-driven platform designed to connect farmers with resources, market trends, and modern techniques, built with a focus on data visualization.",
    technologies: ["MERN Stack", "Chart.js", "Tailwind CSS"],
    accentColor: "#34d399",
    githubLink: "#",
    liveLink: "#",
  },
  {
    id: 3,
    title: "Advanced Task Management App",
    description:
      "A collaborative to-do app with drag-and-drop functionality, real-time updates, and user-specific task lists, emphasizing efficient state management.",
    technologies: ["React (Vite)", "Context API", "Express", "MongoDB"],
    accentColor: "#a78bfa",
    githubLink: "#",
    liveLink: "#",
  },
];

/* ─── Project Card ───────────────────────────────────────────── */
const ProjectCard = ({ project, index }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ y: 70, opacity: 0, filter: "blur(10px)", scale: 0.96 }}
      animate={inView ? { y: 0, opacity: 1, filter: "blur(0px)", scale: 1 } : {}}
      transition={{ duration: 0.8, delay: index * 0.14, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{
        y: -8,
        borderColor: `${project.accentColor}55`,
        boxShadow: `0 24px 60px ${project.accentColor}22`,
      }}
      className="relative flex flex-col rounded-2xl overflow-hidden cursor-default"
      style={{
        background: "rgba(13,22,44,0.82)",
        border: "1px solid rgba(148,163,184,0.12)",
        backdropFilter: "blur(20px)",
        transition: "border-color 0.3s, box-shadow 0.3s, transform 0.3s",
      }}
    >
      {/* Top shimmer line */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background: `linear-gradient(90deg, transparent, ${project.accentColor}90, transparent)`,
        }}
        animate={{ opacity: [0.2, 1, 0.2] }}
        transition={{ duration: 2.5, repeat: Infinity, delay: index * 0.6 }}
      />

      {/* Corner glow */}
      <div
        className="absolute top-0 left-0 w-40 h-40 pointer-events-none"
        style={{
          background: `radial-gradient(circle at top left, ${project.accentColor}18, transparent 65%)`,
        }}
      />

      {/* Number badge */}
      <div className="absolute top-5 right-5 z-10">
        <span
          className="text-xs font-black tracking-widest opacity-30"
          style={{ color: project.accentColor }}
        >
          0{project.id}
        </span>
      </div>

      <div className="relative z-10 p-7 flex flex-col flex-1">
        {/* Title */}
        <h3
          className="text-lg font-bold text-white mb-3 leading-snug pr-6"
          style={{ fontFamily: "Georgia, serif" }}
        >
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-sm leading-relaxed mb-5 flex-1" style={{ color: "#7c8fa6" }}>
          {project.description}
        </p>

        {/* Tech pills */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, scale: 0.85 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: index * 0.14 + i * 0.05 + 0.3, duration: 0.35, type: "spring", stiffness: 200 }}
              whileHover={{ scale: 1.08, y: -2, borderColor: project.accentColor, color: project.accentColor }}
              className="px-3 py-1 text-xs font-medium rounded-full cursor-default"
              style={{
                background: `${project.accentColor}0d`,
                border: `1px solid ${project.accentColor}28`,
                color: "#94a3b8",
                transition: "all 0.22s",
              }}
            >
              {tech}
            </motion.span>
          ))}
        </div>

        {/* Divider */}
        <div
          className="w-full h-px mb-5"
          style={{ background: "rgba(148,163,184,0.1)" }}
        />

        {/* Links */}
        <div className="flex items-center gap-3">
          <motion.a
            href={project.githubLink}
            whileHover={{ scale: 1.05, borderColor: project.accentColor, color: project.accentColor }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold"
            style={{
              border: "1px solid rgba(148,163,184,0.2)",
              color: "#94a3b8",
              transition: "all 0.25s",
            }}
          >
            <Github size={14} /> GitHub
          </motion.a>
          <motion.a
            href={project.liveLink}
            whileHover={{ scale: 1.05, boxShadow: `0 0 24px ${project.accentColor}50` }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold text-white"
            style={{
              background: `linear-gradient(135deg, ${project.accentColor}cc, ${project.accentColor}88)`,
              boxShadow: `0 0 14px ${project.accentColor}30`,
              transition: "box-shadow 0.25s, transform 0.25s",
            }}
          >
            <ExternalLink size={14} /> Live Demo
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
};

/* ─── Main Component ─────────────────────────────────────────── */
const Projects = () => {
  const headingRef = useRef(null);
  const headingInView = useInView(headingRef, { once: true, amount: 0.5 });
  const noteRef = useRef(null);
  const noteInView = useInView(noteRef, { once: true, amount: 0.5 });

  return (
    <section
      id="projects"
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
          background: "radial-gradient(circle, rgba(129,140,248,0.25) 0%, transparent 70%)",
          top: -140,
          left: -140,
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
          background: "radial-gradient(circle, rgba(52,211,153,0.2) 0%, transparent 70%)",
          bottom: -90,
          right: -90,
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
          >
            <motion.span
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2.5, repeat: Infinity }}
              className="flex items-center gap-3"
            >
              <span className="w-10 h-px" style={{ background: "#6366f1" }} />
              Portfolio
              <span className="w-10 h-px" style={{ background: "#6366f1" }} />
            </motion.span>
          </motion.p>

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 50, filter: "blur(12px)" }}
                animate={headingInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
                transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="text-5xl md:text-7xl font-black tracking-tight leading-tight mb-3"
                style={{ fontFamily: "Georgia, serif", color: "#f1f5f9" }}
              >
                My{" "}
                <span
                  style={{
                    background: "linear-gradient(135deg, #818cf8, #34d399)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Work
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 25 }}
                animate={headingInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
                className="text-base"
                style={{ color: "#64748b" }}
              >
                Proof of skill — modern full-stack applications
              </motion.p>
            </div>

            {/* View all link */}
            <motion.a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, x: 20 }}
              animate={headingInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ x: 4, color: "#818cf8" }}
              className="inline-flex items-center gap-2 text-sm font-semibold shrink-0"
              style={{ color: "#475569", transition: "color 0.25s" }}
            >
              View all on GitHub <ArrowRight size={15} />
            </motion.a>
          </div>
        </div>

        {/* ── Cards Grid ───────────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
          {projectData.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* ── Recruiter note ───────────────────────────────── */}
        <motion.div
          ref={noteRef}
          initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
          animate={noteInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{
            borderColor: "rgba(129,140,248,0.4)",
            boxShadow: "0 0 40px rgba(99,102,241,0.12)",
          }}
          className="relative rounded-2xl px-8 py-5 text-center overflow-hidden"
          style={{
            background: "rgba(13,22,44,0.7)",
            border: "1px solid rgba(148,163,184,0.1)",
            backdropFilter: "blur(20px)",
            transition: "border-color 0.3s, box-shadow 0.3s",
          }}
        >
          <motion.div
            className="absolute top-0 left-0 right-0 h-px"
            style={{
              background: "linear-gradient(90deg, transparent, rgba(129,140,248,0.7), transparent)",
            }}
            animate={{ opacity: [0.2, 1, 0.2] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
          <p className="text-sm leading-relaxed" style={{ color: "#7c8fa6" }}>
            These projects highlight my expertise in the{" "}
            <span className="font-bold text-white">MERN Stack</span> and my ability to craft
            clean, impactful full-stack solutions. Explore them on{" "}
            <span className="font-bold" style={{ color: "#818cf8" }}>GitHub</span> for code details.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;