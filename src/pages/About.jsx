// src/pages/About.jsx
import React, { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useInView,
} from "framer-motion";
import { GraduationCap, Monitor, ArrowRight, Download } from "lucide-react";

/* ─── Timeline Data ─────────────────────────────────────────── */
const timelineItems = [
  {
    side: "right",
    date: "2023 – 2026",
    icon: GraduationCap,
    iconColor: "#818cf8",
    title: "Ajay Kumar Garg Engineering College",
    subtitle: "B.Tech in Computer Science & Engineering · Ghaziabad, Uttar Pradesh",
    points: ["CGPA: 8.05", "Focused on MERN stack, DSA, and System Design."],
  },
  {
    side: "left",
    date: "2020 – 2023",
    icon: GraduationCap,
    iconColor: "#facc15",
    title: "Mahatma Gandhi Inter College Gorakhpur",
    subtitle: "10+2 · Uttar Pradesh",
    points: ["Percentage: 80%"],
  },
  {
    side: "right",
    date: "2018 – 2019",
    icon: GraduationCap,
    iconColor: "#a78bfa",
    title: "DN Inter College Maharajganj",
    subtitle: "High School · Uttar Pradesh",
    points: ["Percentage: 83.33%"],
  },
];

/* ─── Timeline Card ─────────────────────────────────────────── */
const TimelineCard = ({ item, index }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });
  const isLeft = item.side === "left";
  const Icon = item.icon;

  return (
    <div
      ref={ref}
      className="relative flex items-center justify-center w-full"
      style={{ marginBottom: "2rem" }}
    >
      {/* Center node */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={inView ? { scale: 1, opacity: 1 } : {}}
        transition={{ duration: 0.4, delay: 0.2, type: "spring", stiffness: 300, damping: 22 }}
        className="absolute left-1/2 -translate-x-1/2 z-20 flex items-center justify-center rounded-full"
        style={{
          width: 44,
          height: 44,
          background: `${item.iconColor}15`,
          border: `2px solid ${item.iconColor}`,
          boxShadow: `0 0 16px ${item.iconColor}70, 0 0 36px ${item.iconColor}20`,
        }}
      >
        <Icon size={18} style={{ color: item.iconColor }} />
      </motion.div>

      {/* Horizontal connector */}
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        animate={inView ? { scaleX: 1, opacity: 1 } : {}}
        transition={{ duration: 0.3, delay: 0.38, ease: "easeOut" }}
        className="absolute top-[22px] hidden md:block h-px"
        style={{
          width: "5%",
          background: `linear-gradient(${isLeft ? "to left" : "to right"}, ${item.iconColor}80, transparent)`,
          transformOrigin: isLeft ? "right" : "left",
          left: isLeft ? "calc(44% + 0px)" : "auto",
          right: isLeft ? "auto" : "calc(44% + 0px)",
        }}
      />

      {/* Date label */}
      <motion.span
        initial={{ opacity: 0, x: isLeft ? 14 : -14 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.45, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        className="absolute hidden md:block text-xs font-bold tracking-widest uppercase z-10"
        style={{
          color: "#f43f5e",
          top: 13,
          ...(isLeft ? { left: "calc(50% + 28px)" } : { right: "calc(50% + 28px)" }),
          whiteSpace: "nowrap",
        }}
      >
        {item.date}
      </motion.span>

      {/* Card — slides from left or right */}
      <motion.div
        initial={{ x: isLeft ? -110 : 110, opacity: 0, filter: "blur(10px)" }}
        animate={inView ? { x: 0, opacity: 1, filter: "blur(0px)" } : {}}
        transition={{ duration: 0.78, delay: 0.07, ease: [0.22, 1, 0.36, 1] }}
        whileHover={{
          y: -5,
          boxShadow: `0 14px 44px ${item.iconColor}28`,
          borderColor: `${item.iconColor}55`,
        }}
        className="relative rounded-2xl px-6 py-4 backdrop-blur-xl cursor-default"
        style={{
          width: "44%",
          marginLeft: isLeft ? "0" : "auto",
          marginRight: isLeft ? "auto" : "0",
          background: "rgba(13,22,44,0.82)",
          border: "1px solid rgba(148,163,184,0.12)",
          transition: "border-color 0.3s, box-shadow 0.3s, transform 0.3s",
        }}
      >
        {/* Arrow tip */}
        <div
          className="absolute hidden md:block"
          style={{
            top: 13,
            [isLeft ? "right" : "left"]: -9,
            width: 0,
            height: 0,
            borderTop: "9px solid transparent",
            borderBottom: "9px solid transparent",
            [isLeft ? "borderLeft" : "borderRight"]: "9px solid rgba(148,163,184,0.13)",
          }}
        />

        {/* Top shimmer */}
        <motion.div
          className="absolute top-0 left-0 right-0 h-px rounded-t-2xl"
          style={{
            background: `linear-gradient(90deg, transparent, ${item.iconColor}80, transparent)`,
          }}
          animate={{ opacity: [0.2, 1, 0.2] }}
          transition={{ duration: 2.8, repeat: Infinity, delay: index * 0.7 }}
        />

        {/* Mobile date */}
        <p className="md:hidden text-xs font-bold tracking-widest uppercase mb-2" style={{ color: "#f43f5e" }}>
          {item.date}
        </p>

        <h3 className="text-sm font-bold text-white mb-0.5 leading-snug">{item.title}</h3>
        <p className="text-xs mb-2 font-medium leading-relaxed" style={{ color: item.iconColor }}>
          {item.subtitle}
        </p>
        {item.points.map((pt, i) => (
          <p key={i} className="text-xs leading-relaxed" style={{ color: "#7c8fa6" }}>
            • {pt}
          </p>
        ))}
      </motion.div>
    </div>
  );
};

/* ─── Scroll-driven timeline line ───────────────────────────── */
const TimelineLine = ({ children }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start center", "end center"] });
  const scaleY = useSpring(scrollYProgress, { stiffness: 55, damping: 22 });

  return (
    <div ref={ref} className="relative">
      {/* Static track — very subtle */}
      <div
        className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px"
        style={{ background: "rgba(99,102,241,0.12)" }}
      />

      {/* Glowing animated progress */}
      <motion.div
        className="absolute left-1/2 -translate-x-1/2 top-0 w-px origin-top"
        style={{
          scaleY,
          height: "100%",
          background: "linear-gradient(to bottom, #818cf8, #a78bfa, #facc15)",
          boxShadow: "0 0 8px rgba(129,140,248,0.9)",
        }}
      />

      {/* Top cap dot */}
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 300, damping: 18 }}
        className="absolute left-1/2 -translate-x-1/2 top-0 z-10 rounded-full"
        style={{ width: 8, height: 8, background: "#818cf8", boxShadow: "0 0 12px #818cf8" }}
      />

      {/* Bottom cap dot */}
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 300, damping: 18 }}
        className="absolute left-1/2 -translate-x-1/2 bottom-0 z-10 rounded-full"
        style={{ width: 8, height: 8, background: "#facc15", boxShadow: "0 0 12px #facc15" }}
      />

      <div className="py-5">{children}</div>
    </div>
  );
};

/* ─── Main Component ────────────────────────────────────────── */
const About = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const rawY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const smoothY = useSpring(rawY, { stiffness: 60, damping: 25 });

  return (
    <section
      ref={heroRef}
      id="about"
      className="relative overflow-hidden pt-16 pb-16 px-6"
      style={{ background: "rgb(26, 38, 55)" }}
    >
      {/* Subtle Grid Background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(99,102,241,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.06) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Ambient Glows */}
      <motion.div
        animate={{ scale: [1, 1.12, 1], opacity: [0.22, 0.38, 0.22] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="absolute pointer-events-none rounded-full"
        style={{
          width: 480,
          height: 480,
          background: "radial-gradient(circle, rgba(99,102,241,0.28) 0%, transparent 70%)",
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
          background: "radial-gradient(circle, rgba(45,212,191,0.22) 0%, transparent 70%)",
          bottom: -90,
          right: -90,
          filter: "blur(60px)",
        }}
      />

      <motion.div style={{ y: smoothY }} className="relative z-10 max-w-6xl mx-auto">

        {/* ── Bio Section (unchanged) ──────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 70, filter: "blur(14px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          className="mb-24"
        >
           

          <h1
            className="text-5xl md:text-7xl font-black tracking-tight mb-10 leading-tight"
            style={{ fontFamily: "Georgia, serif", color: "#f1f5f9" }}
          >
            About me
          </h1>

          <div className="grid md:grid-cols-5 gap-10 items-start">
            <div className="md:col-span-3">
              <motion.p
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.85, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                className="text-lg leading-relaxed mb-5"
                style={{ color: "#cbd5e1" }}
              >
                I'm a passionate{" "}
                <span className="font-bold" style={{ color: "#2dd4bf" }}>
                  Backend-Oriented Full Stack Developer
                </span>{" "}
                who loves turning ideas into scalable, user-friendly web applications and solving critical problems with{" "}
                <span className="font-bold" style={{ color: "#818cf8" }}>DSA & Algorithms</span>.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.85, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
                className="text-base leading-relaxed mb-5"
                style={{ color: "#94a3b8" }}
              >
                I specialize in building modern web products using{" "}
                <span className="font-semibold text-white">MERN stack, clean UI design, optimized backend logic</span>,
                and performance-focused development. With a strong foundation in DSA and CS fundamentals, I enjoy writing efficient, maintainable code.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.85, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="text-base leading-relaxed mb-10"
                style={{ color: "#94a3b8" }}
              >
                Currently pursuing B.Tech in CSE — I've worked on AI chatbots, rental platforms, and healthcare systems. Looking to contribute my skills to a growth-oriented tech team.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.45 }}
                className="flex flex-wrap gap-4"
              >
                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.06, boxShadow: "0 0 35px rgba(99,102,241,0.55)" }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-2 px-7 py-3 rounded-xl text-sm font-bold text-white"
                  style={{ background: "linear-gradient(135deg, #6366f1, #a855f7)", boxShadow: "0 0 20px rgba(99,102,241,0.3)" }}
                >
                  Hire Me <ArrowRight size={16} />
                </motion.a>
                <motion.a
                  href="/resume.pdf"
                  whileHover={{ scale: 1.06, borderColor: "#6366f1", color: "#818cf8" }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-2 px-7 py-3 rounded-xl text-sm font-bold"
                  style={{ border: "1px solid rgba(99,102,241,0.35)", color: "#94a3b8", transition: "all 0.3s" }}
                >
                  Resume <Download size={16} />
                </motion.a>
              </motion.div>
            </div>

            <div className="md:col-span-2 grid grid-cols-2 gap-4">
              {[
                { value: "15+", label: "Projects", color: "#818cf8" },
                { value: "300+", label: "DSA Problems", color: "#34d399" },
                { value: "8.05", label: "CGPA", color: "#a78bfa" },
                { value: "1+", label: "Internship", color: "#facc15" },
              ].map((s, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 + 0.2, duration: 0.65, ease: [0.34, 1.56, 0.64, 1] }}
                  whileHover={{ y: -6, borderColor: s.color, boxShadow: `0 12px 40px ${s.color}25` }}
                  className="rounded-2xl p-5 text-center"
                  style={{
                    background: "rgba(15,23,42,0.7)",
                    border: "1px solid rgba(148,163,184,0.1)",
                    backdropFilter: "blur(20px)",
                    transition: "all 0.35s",
                  }}
                >
                  <p className="text-3xl font-black mb-1" style={{ color: s.color }}>{s.value}</p>
                  <p className="text-xs uppercase tracking-widest" style={{ color: "#64748b" }}>{s.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* ── Timeline Heading ─────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-10"
        >
          <h2
            className="text-4xl md:text-5xl font-black"
            style={{ fontFamily: "Georgia, serif", color: "#f1f5f9" }}
          >
            Timeline
          </h2>
          <p className="mt-2 text-xs uppercase tracking-widest" style={{ color: "#475569" }}>
            Education &amp; Experience
          </p>
        </motion.div>

        {/* ── Timeline ─────────────────────────────────────── */}
        <TimelineLine>
          {timelineItems.map((item, i) => (
            <TimelineCard key={i} item={item} index={i} />
          ))}
        </TimelineLine>
      </motion.div>
    </section>
  );
};

export default About;